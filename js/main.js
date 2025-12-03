// ============================================
// PODPEROS - Main JavaScript
// ============================================

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });
});

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================
const navbar = document.getElementById('navbar');
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

// ============================================
// MOBILE MENU TOGGLE
// ============================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const formValues = Object.fromEntries(formData);
    
    // Show success message
    showNotification('Ďakujeme! Tvoja správa bola odoslaná.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // In production, you would send this data to a server
    console.log('Form submitted:', formValues);
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
}

// ============================================
// PARALLAX EFFECT FOR HERO SECTION
// ============================================
const heroSection = document.querySelector('.hero');
const floatingPouches = document.querySelectorAll('.floating-pouch');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = heroSection.offsetHeight;
    
    if (scrolled < heroHeight) {
        floatingPouches.forEach((pouch, index) => {
            const speed = 0.5 + (index * 0.2);
            const yPos = -(scrolled * speed);
            pouch.style.transform = `translateY(${yPos}px)`;
        });
    }
});

// ============================================
// PRODUCT CARD HOVER EFFECT
// ============================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02) rotateZ(2deg)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1) rotateZ(0deg)';
    });
});

// ============================================
// DYNAMIC LIPS ANIMATION
// ============================================
const lipsIllustration = document.querySelector('.lips-illustration');

if (lipsIllustration) {
    // Add blinking effect
    setInterval(() => {
        const lipTop = document.querySelector('.lip-top');
        const lipBottom = document.querySelector('.lip-bottom');
        
        if (lipTop && lipBottom) {
            lipTop.style.transition = 'transform 0.2s ease';
            lipBottom.style.transition = 'transform 0.2s ease';
            
            lipTop.style.transform = 'translateX(-50%) translateY(5px)';
            lipBottom.style.transform = 'translateX(-50%) translateY(-5px)';
            
            setTimeout(() => {
                lipTop.style.transform = 'translateX(-50%) translateY(0)';
                lipBottom.style.transform = 'translateX(-50%) translateY(0)';
            }, 200);
        }
    }, 5000);
}

// ============================================
// CURSOR EFFECT (OPTIONAL)
// ============================================
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
cursor.style.cssText = `
    width: 20px;
    height: 20px;
    border: 2px solid #FF2D87;
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.2s ease;
    display: none;
`;
document.body.appendChild(cursor);

// Only show custom cursor on desktop
if (window.innerWidth > 768) {
    cursor.style.display = 'block';
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });
    
    // Enlarge cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .product-card, .about-card');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(2)';
            cursor.style.borderColor = '#FF0844';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursor.style.borderColor = '#FF2D87';
        });
    });
}

// ============================================
// LOADING ANIMATION
// ============================================
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add fade-in effect
    const elements = document.querySelectorAll('.hero-text, .hero-visual');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ============================================
// SCROLL PROGRESS INDICATOR
// ============================================
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #FF0844, #FF2D87);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// ============================================
// PRODUCT BADGE ANIMATION
// ============================================
const badges = document.querySelectorAll('.product-badge');
badges.forEach(badge => {
    if (badge.classList.contains('hot')) {
        // Add flame particles effect
        setInterval(() => {
            const flame = document.createElement('span');
            flame.innerHTML = '🔥';
            flame.style.cssText = `
                position: absolute;
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 12px;
                animation: rise 1s ease-out forwards;
                pointer-events: none;
            `;
            
            badge.style.position = 'relative';
            badge.appendChild(flame);
            
            setTimeout(() => flame.remove(), 1000);
        }, 2000);
    }
});

// Add rise animation for flames
const style = document.createElement('style');
style.textContent = `
    @keyframes rise {
        to {
            transform: translateX(-50%) translateY(-40px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// EASTER EGG: KONAMI CODE
// ============================================
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode.splice(-konamiSequence.length - 1, konamiCode.length - konamiSequence.length);
    
    if (konamiCode.join('').includes(konamiSequence.join(''))) {
        activateEasterEgg();
        konamiCode = [];
    }
});

function activateEasterEgg() {
    // Make all product cards spin
    const cards = document.querySelectorAll('.product-card, .about-card');
    cards.forEach(card => {
        card.style.transition = 'transform 2s ease';
        card.style.transform = 'rotate(720deg) scale(1.2)';
        
        setTimeout(() => {
            card.style.transform = '';
        }, 2000);
    });
    
    showNotification('🎉 Našiel si easter egg! Všetky produkty dnes so zľavou!', 'success');
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images when they come into view
const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        }
    });
}, observerOptions);

// Observe all images with data-src attribute
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Add keyboard navigation for product cards
productCards.forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            card.click();
        }
    });
});

// Add focus visible for better keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.add('keyboard-nav');
    }
});

document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
});

// Add keyboard nav styles
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .keyboard-nav *:focus {
        outline: 2px solid #FF2D87 !important;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

console.log('🚀 PODPEROS website loaded successfully!');
console.log('💡 Try the Konami code for a surprise! ⬆️⬆️⬇️⬇️⬅️➡️⬅️➡️BA');
