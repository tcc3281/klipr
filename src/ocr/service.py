from collections import OrderedDict
import os
import settings
from .base import prepare_image_payload
from .gemini import GeminiProvider
from .openai import OpenAIProvider

# In-memory LRU cache for OCR results (Content-Addressed by image filename/hash)
_OCR_CACHE = OrderedDict()
MAX_CACHE_ITEMS = 50


class OCRService:
    """Service to coordinate optimized OCR text extraction with LRU caching and auto-fallback."""

    @staticmethod
    def _build_gemini(conf: dict) -> GeminiProvider:
        key = conf.get("ocrGeminiKey", "")
        model = conf.get("ocrGeminiModel", "gemini-3.1-flash-lite")
        return GeminiProvider(api_key=key, model=model)

    @staticmethod
    def _build_openai(conf: dict) -> OpenAIProvider:
        key = conf.get("ocrOpenAIKey", "")
        model = conf.get("ocrOpenAIModel", "gpt-4o-mini")
        base_url = conf.get("ocrOpenAIBaseUrl", "https://api.openai.com/v1")
        return OpenAIProvider(api_key=key, model=model, base_url=base_url)

    @classmethod
    def extract(cls, image_path: str) -> str:
        # 1. O(1) Cache Lookup: Klipr caches images as img_<md5_hash>.png
        cache_key = os.path.basename(image_path)
        if cache_key in _OCR_CACHE:
            print(f"[Klipr OCR Cache] Cache hit for {cache_key} (~0ms latency)")
            _OCR_CACHE.move_to_end(cache_key)
            return _OCR_CACHE[cache_key]

        conf = settings.load()
        primary_name = conf.get("ocrProvider", "gemini").strip().lower()

        # 2. Downscale & compress image payload ONCE to reuse across providers
        payload = prepare_image_payload(image_path)

        # 3. Build prioritized list of providers (Primary -> Secondary Fallback)
        providers_to_try = []
        if primary_name == "openai":
            providers_to_try.append(("OpenAI", cls._build_openai(conf)))
            if conf.get("ocrGeminiKey", "").strip():
                providers_to_try.append(("Gemini (Fallback)", cls._build_gemini(conf)))
        else:
            providers_to_try.append(("Gemini", cls._build_gemini(conf)))
            if conf.get("ocrOpenAIKey", "").strip():
                providers_to_try.append(("OpenAI (Fallback)", cls._build_openai(conf)))

        last_error = None
        for name, provider in providers_to_try:
            try:
                text = provider.extract_text(image_path, preloaded_payload=payload)
                if text:
                    # Save to LRU cache
                    _OCR_CACHE[cache_key] = text
                    if len(_OCR_CACHE) > MAX_CACHE_ITEMS:
                        _OCR_CACHE.popitem(last=False)
                    return text
            except Exception as e:
                last_error = e
                print(f"[Klipr OCR] Provider {name} failed: {e}")
                if len(providers_to_try) > 1:
                    print("[Klipr OCR Fallback] Attempting secondary provider...")
                continue

        if last_error:
            raise last_error
        return ""
