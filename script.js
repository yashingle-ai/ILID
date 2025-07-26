// Mobile Navigation Toggle
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Citation Tab Functionality
const citationTabs = document.querySelectorAll('.citation-tab');
const citationFormats = document.querySelectorAll('.citation-format');

citationTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const format = tab.dataset.format;
        
        // Remove active class from all tabs and formats
        citationTabs.forEach(t => t.classList.remove('active'));
        citationFormats.forEach(f => f.classList.remove('active'));
        
        // Add active class to clicked tab and corresponding format
        tab.classList.add('active');
        document.querySelector(`.citation-format[data-format="${format}"]`).classList.add('active');
    });
});

// Copy Citation Functionality
const copyButton = document.getElementById('copy-citation');

copyButton.addEventListener('click', async () => {
    const activeFormat = document.querySelector('.citation-format.active .citation-text');
    const textToCopy = activeFormat.textContent || activeFormat.innerText;
    
    try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Visual feedback
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = `
            <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            Copied!
        `;
        copyButton.style.background = 'var(--success-500)';
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
            copyButton.style.background = 'var(--primary-600)';
        }, 2000);
    } catch (err) {
        console.error('Failed to copy citation:', err);
        
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Visual feedback
        const originalText = copyButton.innerHTML;
        copyButton.innerHTML = `
            <svg class="copy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            Copied!
        `;
        copyButton.style.background = 'var(--success-500)';
        
        setTimeout(() => {
            copyButton.innerHTML = originalText;
            copyButton.style.background = 'var(--primary-600)';
        }, 2000);
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.borderBottomColor = 'var(--gray-300)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.borderBottomColor = 'var(--gray-200)';
    }
});

// Intersection Observer for Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.author-card, .contribution-card, .abstract-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Handle PDF Viewer Fallback
document.addEventListener('DOMContentLoaded', () => {
    const pdfViewer = document.querySelector('.pdf-viewer');
    
    pdfViewer.addEventListener('error', () => {
        const fallbackMessage = document.createElement('div');
        fallbackMessage.innerHTML = `
            <div style="
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                height: 400px;
                background: var(--gray-50);
                border-radius: var(--radius-lg);
                text-align: center;
                padding: var(--space-8);
            ">
                <svg style="width: 4rem; height: 4rem; color: var(--gray-400); margin-bottom: var(--space-4);" 
                     viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                <h3 style="color: var(--gray-700); margin-bottom: var(--space-2);">PDF Preview Not Available</h3>
                <p style="color: var(--gray-600); margin-bottom: var(--space-6);">
                    Your browser doesn't support inline PDF viewing. Please download the paper to read it.
                </p>
                <a href="ILID_Paper_RANLP_2025 (3).pdf" 
                   class="btn btn-primary" 
                   download>
                    Download PDF
                </a>
            </div>
        `;
        
        pdfViewer.parentNode.replaceChild(fallbackMessage, pdfViewer);
    });
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }
});

// Performance: Lazy Loading for Images (if any are added)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Error Handling for External Resources
window.addEventListener('error', (e) => {
    if (e.target.tagName === 'LINK' && e.target.rel === 'stylesheet') {
        console.warn('Failed to load stylesheet:', e.target.href);
    }
});

// Analytics and Performance Monitoring (placeholder)
const trackPageView = () => {
    // Add your analytics tracking here
    console.log('Page view tracked');
};

const trackEvent = (eventName, properties) => {
    // Add your event tracking here
    console.log('Event tracked:', eventName, properties);
};

// Track page load
window.addEventListener('load', () => {
    trackPageView();
});

// Track button clicks
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        trackEvent('button_click', {
            button_text: btn.textContent.trim(),
            button_class: btn.className
        });
    });
});