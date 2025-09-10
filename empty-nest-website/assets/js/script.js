/**
 * EMPTY NEST LIFESTYLE BRAND
 * Critical Homepage Refinement - Professional JavaScript
 * Menu Functionality & Brand Interactions
 */

class EmptyNestBrand {
    constructor() {
        this.menuButton = document.getElementById('menuButton');
        this.menuDropdown = document.getElementById('menuDropdown');
        this.isMenuOpen = false;
        
        this.initializeBrand();
        this.setupMenuFunctionality();
        this.setupNavigationEffects();
        this.setupScrollAnimations();
        this.setupProfessionalInteractions();
    }

    initializeBrand() {
        // Brand loading experience
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.body.classList.add('brand-loaded');
            }, 100);
        });

        // Professional page reveal
        window.addEventListener('load', () => {
            this.revealContent();
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.menuButton.contains(e.target) && !this.menuDropdown.contains(e.target)) {
                this.closeMenu();
            }
        });

        // Handle escape key for menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isMenuOpen) {
                this.closeMenu();
            }
        });
    }

    setupMenuFunctionality() {
        // MANDATORY: Single expandable menu button
        this.menuButton.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMenu();
        });

        // Smooth scrolling for dropdown links
        document.querySelectorAll('.dropdown-link[href^=\"#\"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    this.closeMenu();
                    
                    setTimeout(() => {
                        const navHeight = document.querySelector('.navigation').offsetHeight;
                        const targetPosition = targetElement.offsetTop - navHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }, 300);
                }
            });
        });
    }

    toggleMenu() {
        if (this.isMenuOpen) {
            this.closeMenu();
        } else {
            this.openMenu();
        }
    }

    openMenu() {
        this.menuDropdown.classList.add('active');
        this.menuButton.style.color = 'var(--brand-blush)';
        this.isMenuOpen = true;
        
        // Add aria attributes for accessibility
        this.menuButton.setAttribute('aria-expanded', 'true');
        this.menuDropdown.setAttribute('aria-hidden', 'false');
    }

    closeMenu() {
        this.menuDropdown.classList.remove('active');
        this.menuButton.style.color = 'var(--charcoal)';
        this.isMenuOpen = false;
        
        // Update aria attributes
        this.menuButton.setAttribute('aria-expanded', 'false');
        this.menuDropdown.setAttribute('aria-hidden', 'true');
    }

    revealContent() {
        // Professional content reveal sequence
        const sequence = [
            { selector: '.hero-eyebrow', delay: 100 },
            { selector: '.hero-headline', delay: 200 },
            { selector: '.hero-subtext', delay: 300 },
            { selector: '.hero-actions', delay: 400 },
            { selector: '.visual-gallery', delay: 500 }
        ];

        sequence.forEach(item => {
            setTimeout(() => {
                const element = document.querySelector(item.selector);
                if (element) {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }
            }, item.delay);
        });
    }

    setupNavigationEffects() {
        const nav = document.querySelector('.navigation');
        let lastScrollY = window.scrollY;

        // Professional navigation scroll effects
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Enhanced background on scroll
            if (currentScrollY > 100) {
                nav.style.background = 'rgba(247, 243, 238, 0.98)';
                nav.style.boxShadow = '0 8px 32px rgba(212, 164, 164, 0.1)';
            } else {
                nav.style.background = 'rgba(247, 243, 238, 0.95)';
                nav.style.boxShadow = 'none';
            }

            // Smart hide/show behavior
            if (currentScrollY > lastScrollY && currentScrollY > 200 && !this.isMenuOpen) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });
    }

    setupScrollAnimations() {
        // Professional intersection observer
        const observerOptions = {
            threshold: [0.1, 0.3, 0.7],
            rootMargin: '-50px 0px -50px 0px'
        };

        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target, entry.intersectionRatio);
                }
            });
        }, observerOptions);

        // Elements to observe for animation
        const elementsToObserve = [
            '.content-card',
            '.gallery-item',
            '.composition-item',
            '.metric-item',
            '.about-story p'
        ];

        elementsToObserve.forEach(selector => {
            document.querySelectorAll(selector).forEach(element => {
                scrollObserver.observe(element);
                // Initial animation state
                element.style.opacity = '0';
                element.style.transform = 'translateY(40px)';
                element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }

    animateElement(element, ratio) {
        if (ratio > 0.1) {
            // Staggered animation timing
            const delay = Array.from(element.parentNode.children).indexOf(element) * 100;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    }

    setupProfessionalInteractions() {
        // Enhanced button interactions
        this.enhanceButtons();
        
        // Social media hover effects
        this.enhanceSocialIcons();
        
        // Card hover animations
        this.enhanceCards();
        
        // Gallery interactions
        this.enhanceGallery();
        
        // Metrics animation
        this.animateMetrics();
    }

    enhanceButtons() {
        document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
            // Professional ripple effect
            button.addEventListener('click', (e) => {
                const ripple = document.createElement('div');
                const rect = button.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;

                ripple.style.cssText = `
                    position: absolute;
                    width: ${size}px;
                    height: ${size}px;
                    left: ${x}px;
                    top: ${y}px;
                    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
                    border-radius: 50%;
                    transform: scale(0);
                    animation: brand-ripple 0.6s ease-out;
                    pointer-events: none;
                `;

                button.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });

            // Subtle magnetic effect for desktop
            if (window.innerWidth > 768) {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    button.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
                });

                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translate(0, 0)';
                });
            }
        });
    }

    enhanceSocialIcons() {
        document.querySelectorAll('.social-icon').forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.1) translateY(-2px)';
                icon.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            });

            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1) translateY(0)';
            });
        });
    }

    enhanceCards() {
        document.querySelectorAll('.content-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateX(20px)';
                card.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
                
                const number = card.querySelector('.card-number');
                if (number) {
                    number.style.transform = 'scale(1.2)';
                    number.style.color = 'var(--brand-blush)';
                }
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateX(0)';
                
                const number = card.querySelector('.card-number');
                if (number) {
                    number.style.transform = 'scale(1)';
                }
            });
        });
    }

    enhanceGallery() {
        document.querySelectorAll('.gallery-item').forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-10px) scale(1.02)';
                item.style.filter = 'brightness(1.1)';
                item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                item.style.boxShadow = '0 20px 40px rgba(212, 164, 164, 0.2)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.filter = 'brightness(1)';
                item.style.boxShadow = 'none';
            });

            // Subtle parallax on scroll
            window.addEventListener('scroll', () => {
                const rect = item.getBoundingClientRect();
                const speed = 0.05 * (index + 1);
                const yPos = -(window.scrollY * speed);
                
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    item.style.transform += ` translateY(${yPos}px)`;
                }
            });
        });
    }

    animateMetrics() {
        const metrics = document.querySelectorAll('.metric-value');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.countUpAnimation(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        metrics.forEach(metric => observer.observe(metric));
    }

    countUpAnimation(element) {
        const text = element.textContent;
        
        // Handle infinity symbol
        if (text === '∞') {
            element.style.animation = 'float 2s ease-in-out infinite';
            return;
        }

        // Extract number from text
        const finalNumber = parseInt(text.replace(/\D/g, ''));
        const suffix = text.replace(/[\d.]/g, '');
        
        if (isNaN(finalNumber)) return;

        let currentNumber = 0;
        const increment = finalNumber / 60;
        
        const counter = () => {
            currentNumber += increment;
            if (currentNumber >= finalNumber) {
                element.textContent = finalNumber + suffix;
                return;
            }
            element.textContent = Math.floor(currentNumber) + suffix;
            requestAnimationFrame(counter);
        };
        
        counter();
    }
}

// Professional CSS animations injection
const brandAnimations = `
    @keyframes brand-ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    .brand-loaded .hero-eyebrow,
    .brand-loaded .hero-headline,
    .brand-loaded .hero-subtext,
    .brand-loaded .hero-actions,
    .brand-loaded .visual-gallery {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                   transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .navigation {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    /* Professional reduced motion support */
    @media (prefers-reduced-motion: reduce) {
        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    }
`;

// Inject professional animations
const styleSheet = document.createElement('style');
styleSheet.textContent = brandAnimations;
document.head.appendChild(styleSheet);

// Initialize the Empty Nest Brand experience
const emptyNestBrand = new EmptyNestBrand();

// Professional error handling
window.addEventListener('error', (e) => {
    console.warn('Brand experience error handled:', e.message);
});

// Performance monitoring for brand experience
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Empty Nest Brand loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }, 0);
    });
}