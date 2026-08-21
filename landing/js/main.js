/**
 * Klipr Landing Page JavaScript
 * Multi-language (EN / VI), Release Fetching, Copy Toasts, Lightbox, and FAQ Accordions.
 */

// i18n Translations Dictionary
const translations = {
    en: {
        'nav.features': 'Features',
        'nav.screenshots': 'Demo',
        'nav.install': 'Install',
        'nav.faq': 'FAQ',
        'nav.star': 'Star on GitHub',

        'hero.release_suffix': '— Latest Release',
        'hero.title': 'Clipboard history,<br><span class="gradient-text">made seamless for Linux.</span>',
        'hero.desc': 'Klipr captures everything you copy — text, code, commands, and screenshots. Native GTK4 desktop integration, zero Electron bloat, and instant fuzzy search.',
        'hero.install_guide': 'Install Now',
        'hero.download_deb': 'Download .deb',
        'hero.pill_free': 'Open Source',
        'hero.pill_gtk': 'Native GTK4 (~41MB RAM)',
        'hero.pill_privacy': 'Offline & Private',
        'hero.pill_no_account': 'No Account Required',

        'promise.tag': 'Open Source',
        'promise.title': 'Built openly for the Linux community',
        'promise.subtitle': 'Klipr is lightweight and transparent. No paywalls, no monetization, no tracking.',
        'promise.c1_title': 'Community Driven',
        'promise.c1_desc': 'No paid tiers, subscriptions, or locked features. Built as an open tool for everyone.',
        'promise.c2_title': 'Zero Advertisements',
        'promise.c2_desc': 'No sponsored banners, no upgrade prompts, and no annoying popups. Clean and focused.',
        'promise.c3_title': 'Offline & Private',
        'promise.c3_desc': 'All snippets and history remain strictly on your local disk. Nothing is uploaded to any cloud server.',
        'promise.c4_title': 'Permissive MIT License',
        'promise.c4_desc': 'Free for both personal and commercial use. Inspect, modify, or fork the full codebase on GitHub.',

        'showcase.tag': 'Demo',
        'showcase.title': 'Clean, focused GTK4 interface',
        'showcase.subtitle': 'Fits right at home on modern Linux desktop environments including GNOME, XFCE, and KDE.',
        'showcase.window1_title': 'Klipr — History & Favorites',
        'showcase.window1_caption': 'Clipboard History with Thumbnail Previews',
        'showcase.window2_title': 'Klipr — Settings & Customization',
        'showcase.window2_caption': 'Themes, Global Hotkeys & Tray Settings',
        'showcase.zoom': 'Click to Zoom',

        'features.tag': 'Features',
        'features.title': 'Built for daily developer productivity',
        'features.subtitle': 'Everything you need to effortlessly manage clipboard history without bloat.',
        'features.f1_title': 'Automatic History',
        'features.f1_desc': 'Quietly records snippets and automatically prunes older items based on your configured limit.',
        'features.f2_title': 'Instant Fuzzy Search',
        'features.f2_desc': 'Search across your entire clipboard history with zero input latency and full multilingual IME support.',
        'features.f3_title': 'Pinned Favorites',
        'features.f3_desc': 'Bookmark recurring commands, passwords, or snippets. Pinned items are protected from auto-pruning.',
        'features.f4_title': 'Image & Screenshot Capture',
        'features.f4_desc': 'Preserves copied images and screenshots with instant thumbnail previews and one-click paste back.',
        'features.f5_title': 'Dark, Light & System',
        'features.f5_desc': 'Seamlessly synchronizes with your Linux desktop theme or choose your preferred look manually.',
        'features.f6_title': 'Pure Native Performance',
        'features.f6_desc': 'Built with Python and GTK4. Tiny memory footprint that runs silently in the system tray.',


        'install.title': 'Install Klipr in Seconds',
        'install.subtitle': 'Copy, paste, run. That\'s it.',
        'install.note_apt': 'Works on any Ubuntu system out of the box. Future updates then arrive through `sudo snap refresh` automatically.',

        'faq.tag': 'FAQ',
        'faq.title': 'Frequently Asked Questions',
        'faq.subtitle': 'Quick answers to common questions about Klipr.',
        'faq.q0': 'Is Klipr completely free to use?',
        'faq.a0': 'Yes. Klipr is free and open-source under the MIT License. There are no paid tiers, subscriptions, or ads.',
        'faq.q1': 'Is my clipboard data private and secure?',
        'faq.a1': 'Yes. Klipr runs completely offline. All history is saved locally on your device in a SQLite database and is never sent across the internet.',
        'faq.q2': 'How do I open Klipr with a keyboard shortcut?',
        'faq.a2': 'The default global shortcut is Ctrl+Alt+M. You can easily customize it to any combination you prefer (such as Super+V) in the Settings dialog.',
        'faq.q3': 'Will my pinned favorite items be deleted over time?',
        'faq.a3': 'No. Pinned favorites are stored separately and protected from automatic history cleanup. They stay pinned until you manually unstar them.',
        'faq.q4': 'Does Klipr support saving images and screenshots?',
        'faq.a4': 'Yes. Whenever you copy an image or take a screenshot, Klipr stores it with an instant thumbnail preview so you can paste it back whenever you need.',
        'faq.q5': 'Does Klipr continue running in the background when closed?',
        'faq.a5': 'Yes. Closing the window minimizes Klipr to your system tray so clipboard capture stays active. You can customize this behavior in Settings or quit from the tray menu.',

        'footer.crafted': 'Klipr &bull; Created by',
        'footer.free_note': 'Open Source under the MIT License.',
        'footer.repo': 'GitHub Repository',
        'footer.releases': 'Releases',
        'footer.license': 'MIT License',

        'toast.copied': 'Copied to clipboard!',
        'toast.failed': 'Failed to copy. Please copy manually.'
    },
    vi: {
        'nav.features': 'Tính năng',
        'nav.screenshots': 'Demo',
        'nav.install': 'Cài đặt',
        'nav.faq': 'Hỏi đáp',
        'nav.star': 'Star trên GitHub',

        'hero.release_suffix': '— Bản phát hành mới nhất',
        'hero.title': 'Quản lý lịch sử clipboard,<br><span class="gradient-text">mượt mà cho Linux.</span>',
        'hero.desc': 'Klipr tự động lưu lại mọi nội dung bạn sao chép — văn bản, mã nguồn, lệnh terminal và ảnh chụp màn hình. Tích hợp GTK4 native, không dùng Electron nặng nề, tìm kiếm siêu nhanh.',
        'hero.install_guide': 'Cài đặt ngay',
        'hero.download_deb': 'Tải gói .deb',
        'hero.pill_free': 'Mã nguồn mở',
        'hero.pill_gtk': 'GTK4 Native (~41MB RAM)',
        'hero.pill_privacy': 'Offline & Bảo mật',
        'hero.pill_no_account': 'Không cần tài khoản',

        'promise.tag': 'Mã nguồn mở',
        'promise.title': 'Mã nguồn mở và minh bạch',
        'promise.subtitle': 'Klipr được phát triển công khai cho cộng đồng Linux. Không thu phí, không theo dõi.',
        'promise.c1_title': 'Hoàn toàn mở',
        'promise.c1_desc': 'Không có bản Pro, không thu phí bản quyền, không khóa tính năng. Mọi tính năng đều miễn phí cho tất cả mọi người.',
        'promise.c2_title': 'Không quảng cáo',
        'promise.c2_desc': 'Không pop-up mời nâng cấp, không banner quảng cáo, không làm phiền trải nghiệm làm việc của bạn.',
        'promise.c3_title': 'Offline & Bảo mật',
        'promise.c3_desc': 'Toàn bộ nội dung sao chép lưu trữ nội bộ trên máy bạn. Tuyệt đối không gửi dữ liệu lên bất kỳ máy chủ nào.',
        'promise.c4_title': 'Mã nguồn mở MIT',
        'promise.c4_desc': 'Hoàn toàn tự do sử dụng cho cá nhân lẫn thương mại. Thoải mái kiểm tra, chỉnh sửa mã nguồn trên GitHub.',

        'showcase.tag': 'Demo',
        'showcase.title': 'Thiết kế GTK4 tinh tế & gọn gàng',
        'showcase.subtitle': 'Hoạt động hoàn hảo trên các môi trường desktop Linux hiện đại như GNOME, XFCE và KDE.',
        'showcase.window1_title': 'Klipr — Lịch sử & Yêu thích',
        'showcase.window1_caption': 'Lịch sử clipboard kèm hình ảnh thumbnail trực quan',
        'showcase.window2_title': 'Klipr — Cài đặt & Tùy biến',
        'showcase.window2_caption': 'Tùy biến giao diện Sáng/Tối, phím tắt & khay hệ thống',
        'showcase.zoom': 'Bấm để phóng to',

        'features.tag': 'Tính năng',
        'features.title': 'Tối ưu cho hiệu suất làm việc mỗi ngày',
        'features.subtitle': 'Mọi thứ bạn cần để quản lý nội dung clipboard mà không gây nặng máy.',
        'features.f1_title': 'Lưu trữ tự động',
        'features.f1_desc': 'Âm thầm ghi nhớ các đoạn văn bản, tự động dọn dẹp các mục cũ theo giới hạn bạn đặt.',
        'features.f2_title': 'Tìm kiếm tức thì',
        'features.f2_desc': 'Tìm kiếm nhanh chóng trong toàn bộ lịch sử với độ trễ bằng 0, hỗ trợ tốt gõ tiếng Việt (IME).',
        'features.f3_title': 'Ghim mục yêu thích',
        'features.f3_desc': 'Đánh dấu các lệnh hay dùng hoặc ghi chú quan trọng. Các mục ghim không bao giờ bị xóa tự động.',
        'features.f4_title': 'Lưu ảnh & Ảnh chụp màn hình',
        'features.f4_desc': 'Giữ lại các hình ảnh đã copy với thumbnail xem trước, dán lại chỉ với 1 click chuột.',
        'features.f5_title': 'Dark, Light & Theo hệ thống',
        'features.f5_desc': 'Tự động đồng bộ theo giao diện Sáng/Tối của Linux hoặc tùy chọn thủ công theo sở thích.',
        'features.f6_title': 'Hiệu năng Native vượt trội',
        'features.f6_desc': 'Viết bằng Python và GTK4. Chiếm cực ít bộ nhớ RAM và chạy ẩn trên khay hệ thống.',


        'install.title': 'Cài đặt Klipr dễ dàng',
        'install.subtitle': 'Copy, dán, chạy. Vậy là xong.',
        'install.note_apt': 'Chạy được ngay trên mọi máy Ubuntu. Các bản cập nhật sau đó sẽ tự động tới qua `sudo snap refresh`.',

        'faq.tag': 'Hỏi & Đáp',
        'faq.title': 'Câu hỏi thường gặp',
        'faq.subtitle': 'Giải đáp nhanh các thắc mắc phổ biến về Klipr.',
        'faq.q0': 'Klipr có miễn phí hoàn toàn không?',
        'faq.a0': 'Có. Klipr hoàn toàn miễn phí và là phần mềm mã nguồn mở theo giấy phép MIT. Không có bản trả phí, không thuê bao và không quảng cáo.',
        'faq.q1': 'Dữ liệu clipboard có được bảo mật và an toàn không?',
        'faq.a1': 'Có. Klipr hoạt động hoàn toàn offline. Toàn bộ lịch sử clipboard được lưu cục bộ trên máy bạn trong SQLite và tuyệt đối không gửi hay thu thập dữ liệu qua mạng.',
        'faq.q2': 'Làm cách nào để mở nhanh Klipr bằng phím tắt?',
        'faq.a2': 'Phím tắt mặc định là Ctrl+Alt+M. Bạn có thể tuỳ chỉnh phím tắt này bất kỳ lúc nào trong bảng Cài đặt để phù hợp với thói quen sử dụng (ví dụ: Super+V).',
        'faq.q3': 'Các mục đã ghim có bị xoá khi lịch sử đầy không?',
        'faq.a3': 'Không. Các mục ghim yêu thích được lưu riêng biệt và không bao giờ bị xóa tự động khi đạt đến giới hạn số lượng mục.',
        'faq.q4': 'Klipr có lưu được ảnh và ảnh chụp màn hình không?',
        'faq.a4': 'Có. Khi bạn sao chép hình ảnh hoặc chụp màn hình, Klipr tự động lưu trữ và hiển thị thumbnail trực quan để bạn dán lại nhanh chóng.',
        'faq.q5': 'Klipr có tiếp tục chạy ngầm khi đóng cửa sổ không?',
        'faq.a5': 'Có. Mặc định khi đóng cửa sổ, Klipr sẽ ẩn xuống khay hệ thống để tiếp tục ghi nhận clipboard. Bạn có thể thay đổi tùy chọn này trong Cài đặt hoặc thoát hoàn toàn từ menu khay hệ thống.',

        'footer.crafted': 'Klipr &bull; Phát triển bởi',
        'footer.free_note': 'Mã nguồn mở theo giấy phép MIT.',
        'footer.repo': 'Kho mã nguồn GitHub',
        'footer.releases': 'Các bản phát hành',
        'footer.license': 'Giấy phép MIT',

        'toast.copied': 'Đã sao chép vào bộ nhớ tạm!',
        'toast.failed': 'Không thể sao chép. Vui lòng sao chép thủ công.'
    }
};

function safeGetStorage(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch (e) {
        return fallback;
    }
}

function safeSetStorage(key, val) {
    try {
        localStorage.setItem(key, val);
    } catch (e) {}
}

let currentLang = safeGetStorage('klipr_lang', 'en');
let currentReleaseTag = 'v1.2.5';

/**
 * Public function to set language
 */
window.setLanguage = function(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    safeSetStorage('klipr_lang', lang);
    document.documentElement.lang = lang;

    document.title = 'Klipr - Linux Clipboard Manager';

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Translate all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update version badge
    updateVersionBadge();
};

function updateVersionBadge() {
    const badge = document.getElementById('latest-version-badge');
    if (badge) {
        const suffix = (translations[currentLang] && translations[currentLang]['hero.release_suffix']) || '— Latest Release';
        badge.textContent = `${currentReleaseTag} ${suffix}`;
    }
}

// Initialize on DOM ready
function init() {
    window.setLanguage(currentLang);
    initScrollReveal();
    initNavbarScroll();
    initCopyButtons();
    initLightbox();
    initFaqAccordion();
    initBackToTop();
    fetchLatestRelease();

    // Attach click listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const lang = btn.getAttribute('data-lang');
            if (lang) window.setLanguage(lang);
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

/**
 * Scroll Reveal Animations
 */
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
        revealElements.forEach(el => el.classList.add('active'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/**
 * Navbar Background Styling on Scroll
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.style.background = 'rgba(7, 10, 15, 0.92)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        } else {
            navbar.style.background = 'rgba(7, 10, 15, 0.75)';
            navbar.style.borderColor = 'var(--border-subtle)';
        }
    }, { passive: true });
}

/**
 * Copy to Clipboard Handlers
 */
function initCopyButtons() {
    const copyBlocks = document.querySelectorAll('[data-copy]');
    
    copyBlocks.forEach(block => {
        block.addEventListener('click', async (e) => {
            e.stopPropagation();
            const textToCopy = block.getAttribute('data-copy');
            if (!textToCopy) return;

            try {
                await navigator.clipboard.writeText(textToCopy);
                const msg = (translations[currentLang] && translations[currentLang]['toast.copied']) || 'Copied to clipboard!';
                showToast(msg);
                
                const btn = block.querySelector('.copy-btn');
                if (btn) {
                    const originalHTML = btn.innerHTML;
                    btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3fb950" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
                    setTimeout(() => {
                        btn.innerHTML = originalHTML;
                    }, 2000);
                }
            } catch (err) {
                console.error('Failed to copy:', err);
                const failMsg = (translations[currentLang] && translations[currentLang]['toast.failed']) || 'Failed to copy. Please copy manually.';
                showToast(failMsg);
            }
        });
    });
}

/**
 * Toast Notification System
 */
function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        <span>${message}</span>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/**
 * FAQ Accordion Handlers
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (questionBtn) {
            questionBtn.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        }
    });
}

/**
 * Back to Top Floating Button
 */
function initBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

/**
 * Screenshot Lightbox Viewer
 */
function initLightbox() {
    const frames = document.querySelectorAll('.window-frame');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    if (!lightbox || !lightboxImg) return;

    frames.forEach(frame => {
        frame.addEventListener('click', () => {
            const img = frame.querySelector('.window-img');
            if (img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt || 'Screenshot Preview';
                lightbox.classList.add('active');
            }
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove('active');
    };

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

/**
 * Dynamic GitHub Release Fetching
 */
async function fetchLatestRelease() {
    const repo = 'NguyenDuc2309/klipr';
    const downloadBtn = document.getElementById('download-deb-btn');

    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/releases/latest`);
        if (!response.ok) return;

        const release = await response.json();
        currentReleaseTag = release.tag_name || 'v1.2.5';
        updateVersionBadge();

        const debAsset = release.assets?.find(asset => asset.name.endsWith('.deb'));
        if (debAsset && downloadBtn) {
            downloadBtn.href = debAsset.browser_download_url;
            downloadBtn.setAttribute('title', `Download ${debAsset.name}`);
        }
    } catch (error) {
        console.info('Using fallback release metadata:', error);
    }
}
