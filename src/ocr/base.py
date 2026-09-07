from abc import ABC, abstractmethod
import base64
import io
import mimetypes
import os

MAX_OCR_DIMENSION = 1600
JPEG_QUALITY = 85


def prepare_image_payload(image_path: str) -> tuple[str, str]:
    """Downscale and compress image in-memory for minimal network payload and fast VLM inference.

    Reduces 4K/2K PNG screenshot (3MB-8MB) down to 150KB-300KB JPEG without losing OCR fidelity.
    Returns: (base64_data_str, mime_type_str)
    """
    if not os.path.isfile(image_path):
        raise FileNotFoundError(f"Image not found at: {image_path}")

    try:
        from PIL import Image

        with Image.open(image_path) as img:
            w, h = img.size
            # Convert alpha or palette channels to standard RGB for clean JPEG encoding
            if img.mode in ("RGBA", "LA", "P"):
                background = Image.new("RGB", img.size, (255, 255, 255))
                if img.mode == "P":
                    img = img.convert("RGBA")
                background.paste(img, mask=img.split()[-1] if "A" in img.mode else None)
                img = background
            elif img.mode != "RGB":
                img = img.convert("RGB")

            # Downscale proportionally if larger than maximum target dimension
            if max(w, h) > MAX_OCR_DIMENSION:
                scale = MAX_OCR_DIMENSION / float(max(w, h))
                new_w = max(1, int(w * scale))
                new_h = max(1, int(h * scale))
                img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

            buf = io.BytesIO()
            img.save(buf, format="JPEG", quality=JPEG_QUALITY, optimize=True)
            encoded = base64.b64encode(buf.getvalue()).decode("utf-8")
            return encoded, "image/jpeg"
    except Exception as e:
        # Fallback to direct raw file read if PIL is unavailable or errors
        mime_type, _ = mimetypes.guess_type(image_path)
        if not mime_type:
            mime_type = "image/png"
        with open(image_path, "rb") as f:
            encoded = base64.b64encode(f.read()).decode("utf-8")
        return encoded, mime_type


class BaseOCRProvider(ABC):
    """Abstract base class for OCR providers."""

    @abstractmethod
    def extract_text(self, image_path: str, preloaded_payload: tuple[str, str] = None) -> str:
        """Extract text from the given image file path.

        Args:
            image_path: Absolute filesystem path to the image.
            preloaded_payload: Optional pre-compressed (base64_str, mime_type) tuple to avoid re-encoding.

        Returns:
            Extracted text as a string.

        Raises:
            Exception: If API call fails or text extraction errors.
        """
        pass
