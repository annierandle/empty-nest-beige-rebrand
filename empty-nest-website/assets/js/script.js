/**
 * PROFESSIONAL JAVASCRIPT
 * Empty Nest Mom Life - Sophisticated Interactions
 * Magazine-Quality User Experience
 */

class EmptyNestExperience {
    constructor() {
        this.initializeExperience();
        this.setupNavigationEffects();
        this.setupScrollAnimations();
        this.setupProfessionalInteractions();
        this.setupPerformanceOptimizations();
    }

    initializeExperience() {
        // Add loaded class for CSS transitions
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(() => {
                document.body.classList.add('experience-loaded');
            }, 100);
        });

        // Professional page loading experience
        window.addEventListener('load', () => {
            this.revealPageContent();
        });
    }

    revealPageContent() {
        // Sophisticated page reveal animation
        const tl = {
            elements: [
                { selector: '.hero-eyebrow', delay: 100 },
                { selector: '.hero-headline', delay: 200 },
                { selector: '.hero-subtext', delay: 300 },
                { selector: '.hero-description', delay: 400 },
                { selector: '.hero-actions', delay: 500 },
                { selector: '.visual-gallery', delay: 600 }
            ]
        };

        tl.elements.forEach(item => {
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

        // Professional scroll-based navigation
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            // Enhanced navigation background
            if (currentScrollY > 100) {
                nav.style.background = 'rgba(250, 248, 246, 0.98)';
                nav.style.boxShadow = '0 8px 32px rgba(196, 165, 134, 0.1)';
            } else {
                nav.style.background = 'rgba(250, 248, 246, 0.95)';
                nav.style.boxShadow = 'none';
            }

            // Sophisticated hide/show behavior
            if (currentScrollY > lastScrollY && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
            } else {
                nav.style.transform = 'translateY(0)';
            }
            
            lastScrollY = currentScrollY;
        });

        // Smooth scroll with offset
        document.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const navHeight = nav.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    setupScrollAnimations() {
        // Professional Intersection Observer
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

        // Observe professional elements
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
                // Initial state for animation
                element.style.opacity = '0';
                element.style.transform = 'translateY(40px)';
                element.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
            });
        });
    }

    animateElement(element, ratio) {
        if (ratio > 0.1) {
            // Staggered animation for child elements
            const delay = Array.from(element.parentNode.children).indexOf(element) * 100;
            
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, delay);
        }
    }

    setupProfessionalInteractions() {
        // Sophisticated button interactions
        this.enhanceButtons();
        
        // Professional card hover effects
        this.enhanceCards();
        
        // Gallery item interactions
        this.enhanceGallery();
        
        // Metrics counter animation
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
                    animation: professional-ripple 0.6s ease-out;
                    pointer-events: none;
                `;

                button.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });

            // Magnetic effect for desktop
            if (window.innerWidth > 768) {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
                });

                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translate(0, 0)';
                });
            }
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
                    number.style.color = 'var(--camel-primary)';
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
            // Staggered hover animations
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'translateY(-10px) scale(1.02)';
                item.style.filter = 'brightness(1.1)';
                item.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
                
                // Subtle glow effect
                item.style.boxShadow = '0 20px 40px rgba(196, 165, 134, 0.2)';
            });

            item.addEventListener('mouseleave', () => {
                item.style.transform = 'translateY(0) scale(1)';
                item.style.filter = 'brightness(1)';
                item.style.boxShadow = 'none';
            });

            // Parallax effect on scroll
            window.addEventListener('scroll', () => {
                const rect = item.getBoundingClientRect();
                const speed = 0.1 * (index + 1);
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
        const increment = finalNumber / 60; // 60 frames animation
        
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

    setupPerformanceOptimizations() {
        // Debounced resize handler
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(() => {
                this.handleResize();
            }, 100);
        });

        // Intersection Observer for performance
        this.setupLazyElements();
        
        // Preload critical resources
        this.preloadCriticalAssets();
    }

    handleResize() {
        // Recalculate positions and sizes on resize
        const elements = document.querySelectorAll('.gallery-item, .composition-item');
        elements.forEach(element => {
            element.style.transform = 'none';
        });
    }

    setupLazyElements() {
        // Lazy load non-critical animations
        const lazyElements = document.querySelectorAll('.composition-item, .brand-circle');
        const lazyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    lazyObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '50px' });

        lazyElements.forEach(element => {
            lazyObserver.observe(element);
        });
    }

    preloadCriticalAssets() {
        // Preload Google Fonts for better performance
        const fontLink = document.createElement('link');
        fontLink.rel = 'preload';
        fontLink.href = 'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Inter:wght@200;300;400;500;600&display=swap';
        fontLink.as = 'style';
        document.head.appendChild(fontLink);
    }
}

// Professional CSS animations injection
const professionalAnimations = `
    @keyframes professional-ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    .experience-loaded .hero-eyebrow,
    .experience-loaded .hero-headline,
    .experience-loaded .hero-subtext,
    .experience-loaded .hero-description,
    .experience-loaded .hero-actions,
    .experience-loaded .visual-gallery {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), 
                   transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .animate-in {
        animation: sophisticatedFadeIn 1s ease-out forwards;
    }

    @keyframes sophisticatedFadeIn {
        from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
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
styleSheet.textContent = professionalAnimations;
document.head.appendChild(styleSheet);

// Initialize the professional experience
const emptyNestExperience = new EmptyNestExperience();

// Professional error handling
window.addEventListener('error', (e) => {
    console.warn('Professional experience error handled:', e.message);
});

// Performance monitoring
if ('performance' in window) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            const perfData = performance.getEntriesByType('navigation')[0];
            console.log(`Professional site loaded in ${Math.round(perfData.loadEventEnd - perfData.fetchStart)}ms`);
        }, 0);
    });
}