// ===================================
// Preloader
// ===================================

document.body.classList.add('loading');

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.classList.add('hidden');
        document.body.classList.remove('loading');
        
        // Remove preloader from DOM after transition
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }, 1000); // Show for at least 1 second
});

// ===================================
// Initialize AOS (Animate On Scroll)
// ===================================

AOS.init({
    duration: 1000,
    easing: 'ease-out-cubic',
    once: true,
    offset: 100,
    delay: 0
});

// ===================================
// Navigation Scroll Effect
// ===================================

const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add scrolled class for background effect
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ===================================
// Mobile Menu Toggle
// ===================================

const burgerMenu = document.getElementById('burger-menu');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-link');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener('click', (e) => {
    if (e.target === mobileMenu) {
        burgerMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// ===================================
// Smooth Scroll for Navigation Links
// ===================================

const navLinks = document.querySelectorAll('.nav-link, .mobile-link');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Hero CTA Smooth Scroll
// ===================================

const ctaButtons = document.querySelectorAll('.hero-cta a');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const href = button.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const targetSection = document.querySelector(href);
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===================================
// Floating Pouches Animation
// ===================================

const pouches = document.querySelectorAll('.pouch');

pouches.forEach((pouch, index) => {
    // Random start position
    const randomX = Math.random() * 100;
    const randomY = Math.random() * 100;
    pouch.style.left = randomX + '%';
    pouch.style.top = randomY + '%';
    
    // Add mouse interaction
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        const moveX = (mouseX - 0.5) * 50 * (index + 1);
        const moveY = (mouseY - 0.5) * 50 * (index + 1);
        
        pouch.style.transform = `translate(${moveX}px, ${moveY}px) rotate(${moveX / 5}deg)`;
    });
});

// ===================================
// Parallax Effect on Hero
// ===================================

const heroContent = document.querySelector('.hero-content');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (scrolled < heroHeight) {
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / heroHeight) * 0.8;
        }
        
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// ===================================
// Product Strength Indicators Animation
// ===================================

const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const strengthObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.strength-bar');
            bars.forEach(bar => {
                const width = bar.style.width;
                bar.style.width = '0';
                setTimeout(() => {
                    bar.style.width = width;
                }, 100);
            });
        }
    });
}, observerOptions);

const productsSection = document.querySelector('.products');
if (productsSection) {
    strengthObserver.observe(productsSection);
}

// ===================================
// Vending Machine Screen Animation
// ===================================

const machineScreen = document.querySelector('.machine-screen');
let screenAnimationInterval;

if (machineScreen) {
    const screenIcons = [
        'fa-shopping-bag',
        'fa-credit-card',
        'fa-check-circle',
        'fa-shopping-bag'
    ];
    
    const screenTexts = [
        'Touch & Go',
        'Vyber Platbu',
        'Ďakujeme',
        'Touch & Go'
    ];
    
    let currentIcon = 0;
    
    const machineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                screenAnimationInterval = setInterval(() => {
                    const icon = machineScreen.querySelector('i');
                    const text = machineScreen.querySelector('p');
                    
                    // Fade out
                    icon.style.opacity = '0';
                    text.style.opacity = '0';
                    
                    setTimeout(() => {
                        currentIcon = (currentIcon + 1) % screenIcons.length;
                        icon.className = `fas ${screenIcons[currentIcon]}`;
                        text.textContent = screenTexts[currentIcon];
                        
                        // Fade in
                        icon.style.opacity = '1';
                        text.style.opacity = '1';
                    }, 300);
                }, 3000);
            } else {
                clearInterval(screenAnimationInterval);
            }
        });
    }, observerOptions);
    
    machineObserver.observe(machineScreen);
    
    // Add transition to icon and text
    const icon = machineScreen.querySelector('i');
    const text = machineScreen.querySelector('p');
    if (icon) icon.style.transition = 'opacity 0.3s ease';
    if (text) text.style.transition = 'opacity 0.3s ease';
}

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.querySelector('span').textContent;
        
        // Disable button and show loading
        submitButton.disabled = true;
        submitButton.querySelector('span').textContent = 'Odosiela sa...';
        submitButton.style.opacity = '0.7';
        
        // Simulate form submission
        setTimeout(() => {
            // Show success message
            submitButton.querySelector('span').textContent = 'Odoslané ✓';
            submitButton.style.background = 'linear-gradient(135deg, #4CAF50, #45a049)';
            
            // Reset form
            contactForm.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.disabled = false;
                submitButton.querySelector('span').textContent = originalText;
                submitButton.style.background = '';
                submitButton.style.opacity = '1';
            }, 3000);
        }, 1500);
    });
}

// ===================================
// Add Hover Effects to Cards
// ===================================

const cards = document.querySelectorAll('.about-card, .product-category');

cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// ===================================
// Lip SVG Animation
// ===================================

const lipVisual = document.querySelector('.lip-visual svg');

if (lipVisual) {
    const paths = lipVisual.querySelectorAll('path');
    
    lipVisual.addEventListener('mouseenter', () => {
        paths.forEach((path, index) => {
            setTimeout(() => {
                path.style.transition = 'all 0.3s ease';
                path.style.transform = 'scale(1.1)';
                path.style.transformOrigin = 'center';
            }, index * 100);
        });
    });
    
    lipVisual.addEventListener('mouseleave', () => {
        paths.forEach(path => {
            path.style.transform = 'scale(1)';
        });
    });
}

// ===================================
// Pouch Item Interaction
// ===================================

const pouchItem = document.querySelector('.pouch-item');

if (pouchItem) {
    pouchItem.addEventListener('mouseenter', () => {
        pouchItem.style.transform = 'translateY(-20px) scale(1.1) rotate(5deg)';
        pouchItem.style.transition = 'all 0.3s ease';
    });
    
    pouchItem.addEventListener('mouseleave', () => {
        pouchItem.style.transform = '';
    });
}

// ===================================
// Dynamic Year in Footer
// ===================================

const updateFooterYear = () => {
    const yearElement = document.querySelector('.footer-bottom p');
    if (yearElement) {
        const currentYear = new Date().getFullYear();
        yearElement.innerHTML = yearElement.innerHTML.replace('2024', currentYear);
    }
};

updateFooterYear();

// ===================================
// Add Loading Animation
// ===================================

window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===================================
// Cursor Trail Effect (Optional)
// ===================================

let cursorTrail = [];
const maxTrailLength = 10;

document.addEventListener('mousemove', (e) => {
    if (window.innerWidth > 768) {
        cursorTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
        
        if (cursorTrail.length > maxTrailLength) {
            cursorTrail.shift();
        }
    }
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================

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

// ===================================
// Lazy Load Images (if any added later)
// ===================================

const lazyLoadImages = () => {
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
};

lazyLoadImages();

// ===================================
// Active Section Highlighting in Nav
// ===================================

const sections = document.querySelectorAll('section[id]');

const highlightNav = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', debounce(highlightNav, 100));

// ===================================
// Stats Counter Animation
// ===================================

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const stats = entry.target.querySelectorAll('.stat h3');
            
            stats.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    let current = 0;
                    const increment = number / 50;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= number) {
                            stat.textContent = text;
                            clearInterval(timer);
                        } else {
                            stat.textContent = Math.floor(current) + text.replace(/\d+/, '');
                        }
                    }, 30);
                }
            });
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===================================
// Product Slots Hover Effect
// ===================================

const productSlots = document.querySelectorAll('.product-slot');

productSlots.forEach((slot, index) => {
    slot.addEventListener('mouseenter', () => {
        slot.style.background = 'linear-gradient(135deg, rgba(255, 23, 68, 0.4), rgba(233, 30, 99, 0.4))';
        slot.style.transform = 'scale(0.95)';
        slot.style.transition = 'all 0.3s ease';
    });
    
    slot.addEventListener('mouseleave', () => {
        slot.style.background = '';
        slot.style.transform = '';
    });
});

// ===================================
// Social Links Animation
// ===================================

const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach((link, index) => {
    link.addEventListener('mouseenter', () => {
        socialLinks.forEach((otherLink, otherIndex) => {
            if (otherIndex !== index) {
                otherLink.style.opacity = '0.5';
                otherLink.style.transform = 'scale(0.9)';
            }
        });
    });
    
    link.addEventListener('mouseleave', () => {
        socialLinks.forEach(otherLink => {
            otherLink.style.opacity = '1';
            otherLink.style.transform = 'scale(1)';
        });
    });
});

// ===================================
// Random Pouch Colors
// ===================================

const randomizePouchColors = () => {
    const colors = [
        'linear-gradient(135deg, #FF1744, #E91E63)',
        'linear-gradient(135deg, #E91E63, #FF4081)',
        'linear-gradient(135deg, #C62828, #FF1744)',
        'linear-gradient(135deg, #8B0000, #C62828)'
    ];
    
    pouches.forEach(pouch => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        pouch.style.background = randomColor;
    });
};

randomizePouchColors();

// ===================================
// Console Message
// ===================================

console.log('%c🔥 PODPEROS - Vždy niečo nové pod peros! 🔥', 
    'background: linear-gradient(135deg, #FF1744, #E91E63); color: white; font-size: 20px; padding: 10px 20px; border-radius: 5px; font-weight: bold;');

console.log('%cWebsite by PODPEROS Team', 
    'color: #FF1744; font-size: 14px; font-weight: bold;');

// ===================================
// Prevent Right Click on Images (Optional)
// ===================================

// Uncomment if you want to protect images
// document.addEventListener('contextmenu', (e) => {
//     if (e.target.tagName === 'IMG') {
//         e.preventDefault();
//     }
// });

// ===================================
// Add Loading Spinner for Form
// ===================================

const addLoadingSpinner = (button) => {
    const spinner = document.createElement('i');
    spinner.className = 'fas fa-circle-notch fa-spin';
    spinner.style.marginLeft = '10px';
    button.appendChild(spinner);
};

// ===================================
// Easter Egg: Konami Code
// ===================================

let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-konamiPattern.length);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 5000);
    }
});

// ===================================
// End of Script
// ===================================

console.log('%c✅ All scripts loaded successfully!', 
    'color: #4CAF50; font-size: 12px; font-weight: bold;');
