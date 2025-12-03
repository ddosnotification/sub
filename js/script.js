// ===============================================
// PODPEROS - Website JavaScript
// Modern interactions and animations
// ===============================================

// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: 'ease-out-cubic',
    mirror: true
});

// ===============================================
// NAVIGATION
// ===============================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// ===============================================
// HERO SECTION ANIMATIONS
// ===============================================

// Parallax effect for hero elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const heroVisual = document.querySelector('.hero-visual');
    const orbs = document.querySelectorAll('.gradient-orb');
    
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 600);
    }
    
    if (heroVisual && scrolled < window.innerHeight) {
        heroVisual.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 - scrolled * 0.0003})`;
    }
    
    orbs.forEach((orb, index) => {
        if (scrolled < window.innerHeight) {
            const speed = 0.2 + (index * 0.1);
            orb.style.transform = `translate(${scrolled * speed}px, ${scrolled * speed * 0.5}px)`;
        }
    });
});

// Dynamic text effect for hero title
const heroTitle = document.querySelector('.hero-title');
if (heroTitle) {
    const titleLines = heroTitle.querySelectorAll('.title-line');
    titleLines.forEach((line, index) => {
        line.style.animation = `slideInLeft 1s ease-out ${index * 0.2}s forwards`;
        line.style.opacity = '0';
    });
}

// Add CSS animation for title
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInLeft {
        from {
            opacity: 0;
            transform: translateX(-100px);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes scaleIn {
        from {
            opacity: 0;
            transform: scale(0.8);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ===============================================
// PRODUCT CARDS HOVER EFFECTS
// ===============================================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function(e) {
        this.style.zIndex = '10';
    });
    
    card.addEventListener('mouseleave', function(e) {
        this.style.zIndex = '1';
    });
    
    // 3D tilt effect on mouse move
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.02)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ===============================================
// SMOOTH SCROLL WITH OFFSET
// ===============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all cards and sections
document.querySelectorAll('.about-card, .product-card, .feature-box, .location-card').forEach(el => {
    observer.observe(el);
});

// ===============================================
// CONTACT FORM HANDLING
// ===============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.btn');
        const originalText = submitBtn.innerHTML;
        
        // Simulate form submission
        submitBtn.innerHTML = '<span>Odosiela sa...</span>';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<span>Odoslané! ✓</span>';
            submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = '';
                contactForm.reset();
            }, 2000);
        }, 1500);
    });
}

// ===============================================
// CURSOR TRAIL EFFECT (Optional Enhancement)
// ===============================================

let cursorTrail = [];
const trailLength = 20;

document.addEventListener('mousemove', (e) => {
    cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
    
    if (cursorTrail.length > trailLength) {
        cursorTrail.shift();
    }
});

// ===============================================
// SCROLL PROGRESS INDICATOR
// ===============================================

const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    height: 3px;
    background: linear-gradient(90deg, #ff1744, #ec407a, #d81b60);
    z-index: 9999;
    transition: width 0.1s ease;
    box-shadow: 0 0 10px rgba(255, 23, 68, 0.5);
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const scrollCurrent = window.pageYOffset;
    const progress = (scrollCurrent / scrollTotal) * 100;
    scrollProgress.style.width = `${progress}%`;
});

// ===============================================
// LAZY LOADING IMAGES
// ===============================================

const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));

// ===============================================
// FLOATING ELEMENTS MOUSE PARALLAX
// ===============================================

const floatingElements = document.querySelectorAll('.floating-element');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    floatingElements.forEach((element, index) => {
        const speed = (index + 1) * 10;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        
        element.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===============================================
// TYPING EFFECT FOR TAGLINE (Optional)
// ===============================================

function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Apply typing effect to tagline
window.addEventListener('load', () => {
    const tagline = document.querySelector('.hero-tagline');
    if (tagline) {
        const originalText = tagline.textContent;
        setTimeout(() => {
            typeWriter(tagline, originalText, 50);
        }, 1000);
    }
});

// ===============================================
// PRODUCT BADGE ANIMATIONS
// ===============================================

const productBadges = document.querySelectorAll('.product-badge');

productBadges.forEach(badge => {
    setInterval(() => {
        badge.style.animation = 'none';
        setTimeout(() => {
            badge.style.animation = '';
        }, 10);
    }, 5000);
});

// ===============================================
// SCROLL TO TOP BUTTON
// ===============================================

const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff1744, #ec407a);
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 5px 20px rgba(255, 23, 68, 0.4);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollToTopBtn.style.opacity = '1';
        scrollToTopBtn.style.pointerEvents = 'auto';
    } else {
        scrollToTopBtn.style.opacity = '0';
        scrollToTopBtn.style.pointerEvents = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollToTopBtn.addEventListener('mouseenter', function() {
    this.style.transform = 'scale(1.1) translateY(-5px)';
    this.style.boxShadow = '0 10px 30px rgba(255, 23, 68, 0.6)';
});

scrollToTopBtn.addEventListener('mouseleave', function() {
    this.style.transform = 'scale(1)';
    this.style.boxShadow = '0 5px 20px rgba(255, 23, 68, 0.4)';
});

// ===============================================
// PERFORMANCE OPTIMIZATION
// ===============================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
    // Additional scroll-based logic here if needed
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===============================================
// CONSOLE MESSAGE
// ===============================================

console.log('%cPODPEROS 🔴', 'font-size: 30px; font-weight: bold; background: linear-gradient(135deg, #ff1744, #ec407a); -webkit-background-clip: text; -webkit-text-fill-color: transparent;');
console.log('%cPod perami, nad očakávaniami!', 'font-size: 14px; color: #ec407a;');
console.log('%cWebsite by Cursor AI', 'font-size: 12px; color: #999;');

// ===============================================
// AGE VERIFICATION POPUP (18+)
// ===============================================

function showAgeVerification() {
    const hasVerified = localStorage.getItem('ageVerified');
    
    if (!hasVerified) {
        const popup = document.createElement('div');
        popup.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(10px);
        `;
        
        popup.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #1a1a1a 0%, #252525 100%);
                padding: 50px;
                border-radius: 30px;
                text-align: center;
                max-width: 500px;
                border: 2px solid #ff1744;
                box-shadow: 0 20px 60px rgba(255, 23, 68, 0.4);
            ">
                <h2 style="font-family: 'Bebas Neue', sans-serif; font-size: 3rem; margin-bottom: 20px; background: linear-gradient(135deg, #ff1744, #ec407a); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    PODPEROS
                </h2>
                <p style="font-size: 1.2rem; margin-bottom: 30px; color: #fff;">
                    Máš viac ako 18 rokov?
                </p>
                <p style="font-size: 0.9rem; margin-bottom: 30px; color: #b0b0b0;">
                    Tento web obsahuje produkty s nikotínom.<br>Nikotín je návyková látka.
                </p>
                <div style="display: flex; gap: 20px; justify-content: center;">
                    <button id="ageYes" style="
                        padding: 15px 40px;
                        background: linear-gradient(135deg, #ff1744, #ec407a);
                        border: none;
                        border-radius: 50px;
                        color: white;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-family: 'Poppins', sans-serif;
                    ">
                        ÁNO, mám 18+
                    </button>
                    <button id="ageNo" style="
                        padding: 15px 40px;
                        background: transparent;
                        border: 2px solid #666;
                        border-radius: 50px;
                        color: white;
                        font-size: 1.1rem;
                        font-weight: 600;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        font-family: 'Poppins', sans-serif;
                    ">
                        NIE
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(popup);
        document.body.style.overflow = 'hidden';
        
        document.getElementById('ageYes').addEventListener('click', () => {
            localStorage.setItem('ageVerified', 'true');
            popup.style.opacity = '0';
            setTimeout(() => {
                popup.remove();
                document.body.style.overflow = '';
            }, 300);
        });
        
        document.getElementById('ageNo').addEventListener('click', () => {
            window.location.href = 'https://www.google.com';
        });
        
        // Add hover effects
        document.getElementById('ageYes').addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
            this.style.boxShadow = '0 10px 30px rgba(255, 23, 68, 0.5)';
        });
        
        document.getElementById('ageYes').addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
        
        popup.style.transition = 'opacity 0.3s ease';
    }
}

// Show age verification on page load
window.addEventListener('load', () => {
    setTimeout(showAgeVerification, 500);
});

// ===============================================
// DYNAMIC CONTENT LOADING
// ===============================================

// Simulate loading new products or content
function loadMoreContent() {
    // This would be used to load additional products dynamically
    console.log('Loading more content...');
}

// Add intersection observer for infinite scroll (if needed)
const loadMoreTrigger = document.querySelector('.products-footer');
if (loadMoreTrigger) {
    const loadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // loadMoreContent(); // Uncomment if you want infinite scroll
            }
        });
    });
    
    loadObserver.observe(loadMoreTrigger);
}

// ===============================================
// ENHANCE USER EXPERIENCE
// ===============================================

// Add loading state to buttons
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            this.style.transition = 'all 0.3s ease';
        }
    });
});

// Prevent default behavior for demo purposes
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
        }
    });
});

console.log('🚀 Podperos website loaded successfully!');
