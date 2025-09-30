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

// Partnership Interactive Functions
function toggleCode(brandId) {
    const codeElement = document.getElementById(brandId + '-code');
    const button = event.target.closest('.view-code-btn');
    
    if (codeElement.classList.contains('show')) {
        codeElement.classList.remove('show');
        button.classList.remove('active');
        button.querySelector('.btn-text').textContent = 'View Code';
    } else {
        // Hide all other open codes
        document.querySelectorAll('.code-reveal.show').forEach(el => {
            el.classList.remove('show');
            const btn = el.closest('.brand-action').querySelector('.view-code-btn');
            btn.classList.remove('active');
            btn.querySelector('.btn-text').textContent = 'View Code';
        });
        
        codeElement.classList.add('show');
        button.classList.add('active');
        button.querySelector('.btn-text').textContent = 'Hide Code';
    }
}

function toggleCodesDrawer() {
    const drawer = document.getElementById('codes-drawer');
    const toggleIcon = document.getElementById('codes-toggle-icon');
    const container = event.target.closest('.codes-modern-container');
    
    if (drawer.classList.contains('open')) {
        drawer.classList.remove('open');
        toggleIcon.classList.remove('active');
        container.classList.remove('active');
    } else {
        drawer.classList.add('open');
        toggleIcon.classList.add('active');
        container.classList.add('active');
    }
}

// Copy discount code to clipboard
function copyCode(code) {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    
    // Select and copy the text
    textarea.select();
    textarea.setSelectionRange(0, 99999); // For mobile devices
    
    try {
        document.execCommand('copy');
        
        // Show visual feedback
        showCopyFeedback(event.target, code);
    } catch (err) {
        console.error('Failed to copy code:', err);
    }
    
    // Remove the temporary element
    document.body.removeChild(textarea);
}

// Show visual feedback when code is copied
function showCopyFeedback(element, code) {
    const originalText = element.textContent;
    element.textContent = 'COPIED!';
    element.style.background = 'var(--sage-accent)';
    element.style.color = 'var(--white)';
    
    setTimeout(() => {
        element.textContent = originalText;
        element.style.background = '';
        element.style.color = '';
    }, 1500);
    
    // Optional: Show toast notification
    showToast(`Copied "${code}" to clipboard!`);
}

// Toast notification for copy feedback
function showToast(message) {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'copy-toast';
    toast.textContent = message;
    
    // Style the toast
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--sage-accent);
        color: var(--white);
        padding: 12px 24px;
        border-radius: 25px;
        font-family: 'Inter', sans-serif;
        font-size: 0.85rem;
        font-weight: 500;
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Product Carousel Functions
let currentSlide = 0;
const itemsPerView = 5; // Show 5 products at a time on desktop
const totalItems = 8; // Total number of products

function scrollCarousel(direction) {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    
    const itemWidth = 280 + 32; // item width + gap
    const maxSlide = Math.max(0, totalItems - itemsPerView);
    
    if (direction === 'left' && currentSlide > 0) {
        currentSlide--;
    } else if (direction === 'right' && currentSlide < maxSlide) {
        currentSlide++;
    }
    
    const translateX = -(currentSlide * itemWidth);
    track.style.transform = `translateX(${translateX}px)`;
    
    updateCarouselButtons();
}

function updateCarouselButtons() {
    const leftBtn = document.querySelector('.carousel-btn-left');
    const rightBtn = document.querySelector('.carousel-btn-right');
    const maxSlide = Math.max(0, totalItems - itemsPerView);
    
    if (leftBtn) {
        leftBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
        leftBtn.disabled = currentSlide === 0;
    }
    
    if (rightBtn) {
        rightBtn.style.opacity = currentSlide >= maxSlide ? '0.5' : '1';
        rightBtn.disabled = currentSlide >= maxSlide;
    }
}

// Initialize carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCarouselButtons();
});

// Responsive carousel behavior
function handleCarouselResize() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    
    // Reset position on resize
    currentSlide = 0;
    track.style.transform = 'translateX(0px)';
    updateCarouselButtons();
}

// Add resize listener
window.addEventListener('resize', handleCarouselResize);

// Book Carousel Functions
let bookCurrentSlide = 0;
const bookItemsPerView = 4; // Show 4 books at a time on desktop
const bookTotalItems = 8; // Total number of books

function scrollBookCarousel(direction) {
    const track = document.getElementById('bookCarouselTrack');
    if (!track) return;
    
    const itemWidth = 200 + 32; // item width + gap (200px width + 2rem gap)
    const maxSlide = Math.max(0, bookTotalItems - bookItemsPerView);
    
    if (direction === 'left' && bookCurrentSlide > 0) {
        bookCurrentSlide--;
    } else if (direction === 'right' && bookCurrentSlide < maxSlide) {
        bookCurrentSlide++;
    }
    
    const translateX = -(bookCurrentSlide * itemWidth);
    track.style.transform = `translateX(${translateX}px)`;
    
    updateBookCarouselButtons();
}

function updateBookCarouselButtons() {
    const leftBtn = document.querySelector('.book-carousel-btn-left');
    const rightBtn = document.querySelector('.book-carousel-btn-right');
    const maxSlide = Math.max(0, bookTotalItems - bookItemsPerView);
    
    if (leftBtn) {
        leftBtn.style.opacity = bookCurrentSlide === 0 ? '0.5' : '1';
        leftBtn.disabled = bookCurrentSlide === 0;
    }
    
    if (rightBtn) {
        rightBtn.style.opacity = bookCurrentSlide >= maxSlide ? '0.5' : '1';
        rightBtn.disabled = bookCurrentSlide >= maxSlide;
    }
}

// Initialize book carousel on page load
document.addEventListener('DOMContentLoaded', function() {
    updateBookCarouselButtons();
});

// Responsive book carousel behavior
function handleBookCarouselResize() {
    const track = document.getElementById('bookCarouselTrack');
    if (!track) return;
    
    // Reset position on resize
    bookCurrentSlide = 0;
    track.style.transform = 'translateX(0px)';
    updateBookCarouselButtons();
}

// Add resize listener for book carousel
window.addEventListener('resize', handleBookCarouselResize);


// Contact Form Functionality
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                fullName: formData.get('fullName'),
                email: formData.get('email'),
                subject: formData.get('subject'),
                message: formData.get('message')
            };
            
            // Basic validation
            if (!data.fullName || !data.email || !data.subject || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Simulate form submission (replace with actual form handler)
            const submitBtn = contactForm.querySelector('.contact-submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate API call
            setTimeout(() => {
                alert('Thank you for your message! I will be in touch soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
        
        // Enhanced form interactions
        const formInputs = contactForm.querySelectorAll('.form-input, .form-textarea');
        
        formInputs.forEach(input => {
            // Add focus/blur effects
            input.addEventListener('focus', function() {
                this.parentElement.classList.add('form-group-focused');
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.classList.remove('form-group-focused');
                if (this.value.trim()) {
                    this.parentElement.classList.add('form-group-filled');
                } else {
                    this.parentElement.classList.remove('form-group-filled');
                }
            });
        });
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', setupContactForm);

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

/**
 * INSTAGRAM HIGHLIGHTS FUNCTIONALITY
 * Interactive Content Categories System
 */

// Instagram Highlights Data Structure - Connected to @emptynestmomlife
const instagramHighlights = {
    family: {
        title: 'FAMILY',
        highlights: [
            {
                title: 'FamilyMem',
                description: 'Precious family memories and moments',
                url: 'https://www.instagram.com/stories/highlights/17934115638206846/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/0dc3511dcad303ff46deab2898db7e64'
            },
            {
                title: 'Kids',
                description: 'Our children through the years',
                url: 'https://www.instagram.com/stories/highlights/17908698794600488/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/238ba7f9093ead3e58f6bc22f3d4dc41'
            },
            {
                title: 'Graduations',
                description: 'Celebrating academic milestones',
                url: 'https://www.instagram.com/stories/highlights/17937133928178979/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/ccdc58697fe9069bc9716ecb56c80e7f'
            },
            {
                title: 'Will and Gra',
                description: 'Special moments with Will and Grace',
                url: 'https://www.instagram.com/stories/highlights/17925985422485596/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/6dbf73889f448bd40b20819b1988e479'
            },
            {
                title: 'College Mov',
                description: 'College move-in adventures',
                url: 'https://www.instagram.com/stories/highlights/17913823094544176/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/66441f23dc3477bc3085103eb691a8ce'
            },
            {
                title: 'Funny memes',
                description: 'Family humor and funny moments',
                url: 'https://www.instagram.com/stories/highlights/17948871829073240/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/82460d2ff5b094621efa7d896de56363'
            }
        ]
    },
    home: {
        title: 'HOME',
        highlights: [
            {
                title: 'new home',
                description: 'New home setup and decorating journey',
                url: 'https://www.instagram.com/stories/highlights/17895704586813254/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/b3026dbc936cadcd837f4510ee7eba59'
            },
            {
                title: 'MovingMyP',
                description: 'Moving my parents - downsizing journey',
                url: 'https://www.instagram.com/stories/highlights/17948602749093582/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/3c354b3fbdf8c3f558891d2564c48b03'
            },
            {
                title: 'Dorm Rooms',
                description: 'College dorm room setups and organization',
                url: 'https://www.instagram.com/stories/highlights/17947938026148395/',
                coverImage: null
            },
            {
                title: 'Dorm Room',
                description: 'Dorm room decorating tips and ideas',
                url: 'https://www.instagram.com/stories/highlights/17925985422485597/',
                coverImage: null
            },
            {
                title: 'Storage Tips',
                description: 'Home organization and storage solutions',
                url: 'https://www.instagram.com/stories/highlights/17912823094544177/',
                coverImage: null
            },
            {
                title: 'Downsizing',
                description: 'Downsizing tips and empty nest transitions',
                url: 'https://www.instagram.com/stories/highlights/17901698794600489/',
                coverImage: null
            }
        ]
    },
    wellness: {
        title: 'WELLNESS',
        highlights: [
            {
                title: 'Health',
                description: 'Health and wellness tips for empty nesters',
                url: 'https://www.instagram.com/stories/highlights/17934115638206847/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/23802e58286bafc19a3d7e9badf5b781'
            },
            {
                title: 'Life Tips #2',
                description: 'More practical life advice and wellness',
                url: 'https://www.instagram.com/stories/highlights/17937133928178980/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/ccdc58697fe9069bc9716ecb56c80e7f'
            },
            {
                title: 'Life Tips',
                description: 'Practical life advice for your best chapter',
                url: 'https://www.instagram.com/stories/highlights/17912823094544178/',
                coverImage: null
            },
            {
                title: 'Mom Tips',
                description: 'Motherhood wisdom and empty nest advice',
                url: 'https://www.instagram.com/stories/highlights/17901698794600490/',
                coverImage: null
            },
            {
                title: 'ND Rugby',
                description: 'Notre Dame rugby and active lifestyle',
                url: 'https://www.instagram.com/stories/highlights/17948871829073241/',
                coverImage: null
            },
            {
                title: 'Turning 50',
                description: 'Embracing life after 50 with confidence',
                url: 'https://www.instagram.com/stories/highlights/17901698794600491/',
                coverImage: null
            }
        ]
    },
    travel: {
        title: 'TRAVEL',
        highlights: [
            {
                title: 'Travel Tips',
                description: 'Essential travel advice and packing tips',
                url: 'https://www.instagram.com/stories/highlights/17925985422485598/',
                coverImage: null
            },
            {
                title: 'Italy',
                description: 'Italian adventures and culture',
                url: 'https://www.instagram.com/stories/highlights/17934115638206848/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/c79f7f857708bf828558fc8187ddfd78'
            },
            {
                title: 'Ireland',
                description: 'Irish countryside and culture exploration',
                url: 'https://www.instagram.com/stories/highlights/17908698794600499/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/ba06db980d6c5a6a0f40041a4238247d'
            },
            {
                title: 'Hawaii 24',
                description: 'Hawaiian island paradise 2024',
                url: 'https://www.instagram.com/stories/highlights/17937133928178981/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/18bab69f08b664aaa27f68dbc6e15feb'
            },
            {
                title: 'Hawaii',
                description: 'Hawaiian vacation memories',
                url: 'https://www.instagram.com/stories/highlights/17913823094544179/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/238ba7f9093ead3e58f6bc22f3d4dc41'
            },
            {
                title: 'Mexico City🇲🇽',
                description: 'Mexico City cultural adventures',
                url: 'https://www.instagram.com/stories/highlights/17948602749093583/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/65c2fe440b9006880f460d32cd64da35'
            },
            {
                title: 'Mexico',
                description: 'Mexican vacation and travel experiences',
                url: 'https://www.instagram.com/stories/highlights/17901698794600492/',
                coverImage: null
            },
            {
                title: 'Cabo',
                description: 'Cabo San Lucas beach getaway',
                url: 'https://www.instagram.com/stories/highlights/17948871829073242/',
                coverImage: null
            },
            {
                title: 'San Diego',
                description: 'San Diego California adventures',
                url: 'https://www.instagram.com/stories/highlights/17925985422485599/',
                coverImage: null
            },
            {
                title: 'Newport Be',
                description: 'Newport Beach California coastal life',
                url: 'https://www.instagram.com/stories/highlights/17913823094544180/',
                coverImage: null
            },
            {
                title: 'Park City',
                description: 'Park City Utah mountain adventures',
                url: 'https://www.instagram.com/stories/highlights/17925985422485600/',
                coverImage: null
            },
            {
                title: 'Crystal Cove',
                description: 'Crystal Cove State Park adventures',
                url: 'https://www.instagram.com/stories/highlights/17913823094544181/',
                coverImage: null
            },
            {
                title: 'Arizona',
                description: 'Arizona desert adventures and exploration',
                url: 'https://www.instagram.com/stories/highlights/17912823094544182/',
                coverImage: null
            },
            {
                title: 'Idaho',
                description: 'Idaho outdoor adventures and nature',
                url: 'https://www.instagram.com/stories/highlights/17901698794600493/',
                coverImage: null
            },
            {
                title: 'Chicago mo',
                description: 'Chicago moments and city adventures',
                url: 'https://www.instagram.com/stories/highlights/17901698794600494/',
                coverImage: null
            }
        ]
    },
    events: {
        title: 'EVENTS',
        highlights: [
            {
                title: 'Mimi\'s 80th',
                description: 'Celebrating Mimi\'s 80th birthday in style',
                url: 'https://www.instagram.com/stories/highlights/17934115638206849/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/c79f7f857708bf828558fc8187ddfd78'
            },
            {
                title: 'Smith Wedd',
                description: 'Smith family wedding celebrations',
                url: 'https://www.instagram.com/stories/highlights/17937133928178982/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/66441f23dc3477bc3085103eb691a8ce'
            },
            {
                title: 'Alexa\'s Wed',
                description: 'Alexa\'s wedding celebration and memories',
                url: 'https://www.instagram.com/stories/highlights/17948871829073243/',
                coverImage: null
            },
            {
                title: 'Bridal Shower',
                description: 'Beautiful bridal shower celebrations',
                url: 'https://www.instagram.com/stories/highlights/17901698794600495/',
                coverImage: null
            },
            {
                title: '25thAnniver',
                description: '25th anniversary celebration',
                url: 'https://www.instagram.com/stories/highlights/17937133928178983/',
                coverImage: null
            },
            {
                title: 'RC 20th Anniv',
                description: 'Randle Communications 20th anniversary',
                url: 'https://www.instagram.com/stories/highlights/17925985422485601/',
                coverImage: null
            },
            {
                title: 'RC Xmas pa',
                description: 'Randle Communications Christmas party',
                url: 'https://www.instagram.com/stories/highlights/17908698794600500/',
                coverImage: null
            },
            {
                title: 'Parties 2019',
                description: 'Various celebrations from 2019',
                url: 'https://www.instagram.com/stories/highlights/17901698794600496/',
                coverImage: null
            },
            {
                title: 'Events 2018',
                description: 'Memorable events from 2018',
                url: 'https://www.instagram.com/stories/highlights/17913823094544183/',
                coverImage: null
            },
            {
                title: 'Disney',
                description: 'Disney family adventures and magic',
                url: 'https://www.instagram.com/stories/highlights/17925985422485602/',
                coverImage: null
            },
            {
                title: 'Amish Coun',
                description: 'Amish Country cultural exploration',
                url: 'https://www.instagram.com/stories/highlights/17925985422485603/',
                coverImage: null
            },
            {
                title: 'Graduation',
                description: 'Graduation ceremonies and celebrations',
                url: 'https://www.instagram.com/stories/highlights/17901698794600497/',
                coverImage: null
            },
            {
                title: 'Grad Gifts',
                description: 'Perfect graduation gift ideas',
                url: 'https://www.instagram.com/stories/highlights/17895704586813255/',
                coverImage: null
            }
        ]
    },
    food: {
        title: 'FOOD',
        highlights: [
            {
                title: 'RECIPES',
                description: 'Family favorite recipes and cooking tips',
                url: 'https://www.instagram.com/stories/highlights/17937133928178984/',
                coverImage: null
            },
            {
                title: 'Recipes',
                description: 'More delicious recipe collections',
                url: 'https://www.instagram.com/stories/highlights/17901698794600498/',
                coverImage: null
            },
            {
                title: 'Costco',
                description: 'Costco shopping finds and bulk buying tips',
                url: 'https://www.instagram.com/stories/highlights/17901698794600499/',
                coverImage: null
            },
            {
                title: 'Trader Joe\'s',
                description: 'Trader Joe\'s must-have products and finds',
                url: 'https://www.instagram.com/stories/highlights/17901698794600500/',
                coverImage: null
            },
            {
                title: 'Granola',
                description: 'Healthy granola recipes and breakfast ideas',
                url: 'https://www.instagram.com/stories/highlights/17901698794600501/',
                coverImage: null
            },
            {
                title: 'Cheeseboar',
                description: 'Charcuterie and cheese board creations',
                url: 'https://www.instagram.com/stories/highlights/17901698794600502/',
                coverImage: null
            },
            {
                title: 'Sac Food Tr',
                description: 'Sacramento food truck discoveries',
                url: 'https://www.instagram.com/stories/highlights/17925985422485604/',
                coverImage: null
            },
            {
                title: 'Food!!!!',
                description: 'Delicious food adventures and discoveries',
                url: 'https://www.instagram.com/stories/highlights/17908698794600501/',
                coverImage: null
            },
            {
                title: 'Keto',
                description: 'Keto lifestyle and low-carb recipes',
                url: 'https://www.instagram.com/stories/highlights/17908698794600502/',
                coverImage: null
            },
            {
                title: 'NotreDame3',
                description: 'Notre Dame food traditions and game day',
                url: 'https://www.instagram.com/stories/highlights/17908698794600503/',
                coverImage: null
            },
            {
                title: 'NotreDame2',
                description: 'More Notre Dame culinary experiences',
                url: 'https://www.instagram.com/stories/highlights/17901698794600503/',
                coverImage: null
            },
            {
                title: 'NotreDame1',
                description: 'Notre Dame game day food and fun',
                url: 'https://www.instagram.com/stories/highlights/17901698794600504/',
                coverImage: null
            },
            {
                title: 'Cheers',
                description: 'Cocktails, drinks, and celebration toasts',
                url: 'https://www.instagram.com/stories/highlights/17901698794600505/',
                coverImage: null
            }
        ]
    },
    holidays: {
        title: 'HOLIDAYS',
        highlights: [
            {
                title: 'Christmas g',
                description: 'Christmas gift guides and holiday magic',
                url: 'https://www.instagram.com/stories/highlights/17937133928178985/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/0dc3511dcad303ff46deab2898db7e64'
            },
            {
                title: 'Halloween',
                description: 'Halloween costumes, decor, and spooky fun',
                url: 'https://www.instagram.com/stories/highlights/17947938026148396/',
                coverImage: null
            },
            {
                title: 'Mother\'s Day',
                description: 'Celebrating mothers and motherhood',
                url: 'https://www.instagram.com/stories/highlights/17912823094544184/',
                coverImage: null
            },
            {
                title: 'Things to do',
                description: 'Holiday activities and seasonal fun',
                url: 'https://www.instagram.com/stories/highlights/17912823094544185/',
                coverImage: null
            },
            {
                title: 'Quarantine',
                description: 'Making the best of quarantine holidays',
                url: 'https://www.instagram.com/stories/highlights/17912823094544186/',
                coverImage: null
            },
            {
                title: 'Quarantine 😊',
                description: 'Positive quarantine holiday moments',
                url: 'https://www.instagram.com/stories/highlights/17912823094544187/',
                coverImage: null
            }
        ]
    },
    nashville: {
        title: 'NASHVILLE',
        highlights: [
            {
                title: 'Nashville sp',
                description: 'Nashville special moments and experiences',
                url: 'https://www.instagram.com/stories/highlights/17934115638206850/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/ba06db980d6c5a6a0f40041a4238247d'
            },
            {
                title: 'Nashville M',
                description: 'Nashville music and culture exploration',
                url: 'https://www.instagram.com/stories/highlights/17937133928178986/',
                coverImage: null
            },
            {
                title: '#SacTownTips',
                description: 'Sacramento to Nashville transition tips',
                url: 'https://www.instagram.com/stories/highlights/17937133928178987/',
                coverImage: null
            }
        ]
    },
    tips: {
        title: 'TIPS & TRICKS',
        highlights: [
            {
                title: 'fave reshares',
                description: 'My favorite content reshares and recommendations',
                url: 'https://www.instagram.com/stories/highlights/17934115638206851/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/ef90831c311fc7d3dc68ba1cc51ee2b1'
            },
            {
                title: 'Annie\'sAcci',
                description: 'Annie\'s Accident prevention and safety tips',
                url: 'https://www.instagram.com/stories/highlights/17937133928178988/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/b3026dbc936cadcd837f4510ee7eba59'
            },
            {
                title: 'Fave Things',
                description: 'My favorite things and product recommendations',
                url: 'https://www.instagram.com/stories/highlights/17948602749093584/',
                coverImage: null
            },
            {
                title: 'Hostess Gifts',
                description: 'Perfect hostess gift ideas and etiquette',
                url: 'https://www.instagram.com/stories/highlights/17901698794600506/',
                coverImage: null
            },
            {
                title: 'Favorite Thi',
                description: 'More of my favorite discoveries',
                url: 'https://www.instagram.com/stories/highlights/17908698794600504/',
                coverImage: null
            }
        ]
    },
    fashion: {
        title: 'FASHION',
        highlights: [
            {
                title: 'Fashion',
                description: 'Style inspiration and outfit ideas',
                url: 'https://www.instagram.com/stories/highlights/17925985422485605/',
                coverImage: null
            }
        ]
    },
    gifts: {
        title: 'GIFTS',
        highlights: [
            {
                title: 'GIFTS',
                description: 'Perfect gift ideas for every occasion',
                url: 'https://www.instagram.com/stories/highlights/17948602749093585/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/03a5e36c492b9b7a16613317837cda09'
            },
            {
                title: 'Gifts',
                description: 'More thoughtful gift suggestions',
                url: 'https://www.instagram.com/stories/highlights/17913823094544184/',
                coverImage: null
            },
            {
                title: 'gifts fr. heart',
                description: 'Heartfelt gift ideas from the heart',
                url: 'https://www.instagram.com/stories/highlights/17913823094544185/',
                coverImage: null
            }
        ]
    },
    shopping: {
        title: 'SHOPPING',
        highlights: [
            {
                title: 'Amazon \'23',
                description: '2023 Amazon finds and favorites',
                url: 'https://www.instagram.com/stories/highlights/17948602749093586/',
                coverImage: 'https://page.gensparksite.com/v1/base64_upload/03a5e36c492b9b7a16613317837cda09'
            },
            {
                title: 'Amazon',
                description: 'Amazon product recommendations and finds',
                url: 'https://www.instagram.com/stories/highlights/17937133928178989/',
                coverImage: null
            },
            {
                title: 'TV time',
                description: 'TV show recommendations and binge-watching',
                url: 'https://www.instagram.com/stories/highlights/17937133928178990/',
                coverImage: null
            }
        ]
    },
    cruises: {
        title: 'CRUISES',
        highlights: [
            {
                title: 'NCL 2',
                description: 'Norwegian Cruise Line adventures part 2',
                url: 'https://www.instagram.com/stories/highlights/17901698794600507/',
                coverImage: null
            },
            {
                title: 'NCL',
                description: 'Norwegian Cruise Line vacation memories',
                url: 'https://www.instagram.com/stories/highlights/17913823094544186/',
                coverImage: null
            }
        ]
    },
    sacramento: {
        title: 'SACRAMENTO',
        highlights: [
            {
                title: 'Sacramento',
                description: 'Sacramento California life and experiences',
                url: 'https://www.instagram.com/stories/highlights/17908698794600505/',
                coverImage: null
            }
        ]
    },
    banners: {
        title: 'SPECIAL PROJECTS',
        highlights: [
            {
                title: 'Banner Maki',
                description: 'Banner making and creative projects',
                url: 'https://www.instagram.com/stories/highlights/17948871829073244/',
                coverImage: null
            }
        ]
    }
};

// Global functions for modal interaction
function openHighlightsModal(category) {
    const modal = document.getElementById('highlightsModal');
    const modalTitle = document.getElementById('modalCategoryTitle');
    const highlightsGrid = document.getElementById('highlightsGrid');
    
    if (!modal || !modalTitle || !highlightsGrid) {
        console.error('Modal elements not found');
        return;
    }
    
    const categoryData = instagramHighlights[category];
    if (!categoryData) {
        console.error('Category data not found:', category);
        return;
    }
    
    // Set modal title
    modalTitle.textContent = categoryData.title + ' HIGHLIGHTS';
    
    // Clear and populate highlights grid
    highlightsGrid.innerHTML = '';
    
    categoryData.highlights.forEach((highlight, index) => {
        const highlightCard = createHighlightCard(highlight, index);
        highlightsGrid.appendChild(highlightCard);
    });
    
    // Show modal with animation
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeHighlightsModal() {
    const modal = document.getElementById('highlightsModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function createHighlightCard(highlight, index) {
    const card = document.createElement('div');
    card.className = 'highlight-card';
    card.onclick = () => openInstagramHighlight(highlight.url);
    
    // Create minimalist monochromatic icon based on category/title
    const iconElement = getMinimalistIcon(highlight.title);
    
    card.innerHTML = `
        <div class="highlight-instagram-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
        </div>
        <div class="highlight-icon-placeholder">${iconElement}</div>
        <h3 class="highlight-title">${highlight.title}</h3>
    `;
    
    return card;
}

// Generate minimalist monochromatic icons for different highlight types
function getMinimalistIcon(title) {
    const titleLower = title.toLowerCase();
    
    // Travel icons
    if (titleLower.includes('cabo') || titleLower.includes('travel') || titleLower.includes('european') || titleLower.includes('getaway')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        </svg>`;
    }
    
    // Home icons  
    if (titleLower.includes('home') || titleLower.includes('redesign') || titleLower.includes('decor') || titleLower.includes('organization') || titleLower.includes('kitchen')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9,22 9,12 15,12 15,22"/>
        </svg>`;
    }
    
    // Family icons
    if (titleLower.includes('family') || titleLower.includes('jillie') || titleLower.includes('grandparent') || titleLower.includes('empty nest')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
        </svg>`;
    }
    
    // Food icons
    if (titleLower.includes('dinner') || titleLower.includes('meal') || titleLower.includes('restaurant') || titleLower.includes('cooking')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
        </svg>`;
    }
    
    // Event icons
    if (titleLower.includes('party') || titleLower.includes('wedding') || titleLower.includes('birthday') || titleLower.includes('girls night')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>`;
    }
    
    // Wellness icons
    if (titleLower.includes('fitness') || titleLower.includes('mental') || titleLower.includes('self care') || titleLower.includes('health')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>`;
    }
    
    // Holiday icons
    if (titleLower.includes('christmas') || titleLower.includes('halloween') || titleLower.includes('thanksgiving') || titleLower.includes('valentine')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26 12,2"/>
        </svg>`;
    }
    
    // Tips & Politics icons
    if (titleLower.includes('tips') || titleLower.includes('hack') || titleLower.includes('beauty') || titleLower.includes('tech') || titleLower.includes('money')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
        </svg>`;
    }
    
    if (titleLower.includes('civic') || titleLower.includes('voting') || titleLower.includes('local') || titleLower.includes('political')) {
        return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <polygon points="12,2 15.09,8.26 22,9 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9 8.91,8.26 12,2"/>
        </svg>`;
    }
    
    // Default icon for any unmatched items
    return `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>`;
}

function openInstagramHighlight(url) {
    // Show Instagram redirect modal with helpful instructions
    showInstagramRedirectModal();
}

function showInstagramRedirectModal() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.className = 'instagram-redirect-modal-overlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;

    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: white;
        border-radius: 0;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        position: relative;
    `;

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    modalContent.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style="color: #E4405F;">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" stroke-width="2"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" stroke-width="2"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" stroke-width="2"/>
            </svg>
        </div>
        <h3 style="margin: 0 0 1rem 0; color: #2C2C2C; font-family: 'Inter', sans-serif; font-size: 1.25rem; font-weight: 600;">
            View on Instagram
        </h3>
        <p style="margin: 0 0 1.5rem 0; color: #666; font-family: 'Inter', sans-serif; line-height: 1.5;">
            ${isMobile ? 
                'Tap the button below to open Instagram and view the highlights on @emptynestmomlife.' : 
                'Click the button below to visit @emptynestmomlife on Instagram where you can view the highlights.'}
        </p>
        <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
            <button onclick="openInstagramProfile()" style="
                background: linear-gradient(45deg, #E4405F, #C13584);
                color: white;
                border: none;
                padding: 12px 24px;
                border-radius: 0;
                font-family: 'Inter', sans-serif;
                font-weight: 600;
                cursor: pointer;
                transition: transform 0.2s ease;
            " onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
                ${isMobile ? '📱 Open Instagram App' : '🌐 Visit Instagram'}
            </button>
            <button onclick="closeInstagramModal()" style="
                background: transparent;
                color: #666;
                border: 2px solid #E8E5E1;
                padding: 12px 24px;
                border-radius: 0;
                font-family: 'Inter', sans-serif;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
            " onmouseover="this.style.borderColor='#C8C5C0'; this.style.color='#2C2C2C'" onmouseout="this.style.borderColor='#E8E5E1'; this.style.color='#666'">
                Cancel
            </button>
        </div>
    `;

    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);

    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeOut {
            from { opacity: 1; transform: scale(1); }
            to { opacity: 0; transform: scale(0.9); }
        }
    `;
    document.head.appendChild(style);

    // Close on overlay click
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeInstagramModal();
        }
    });

    // Close on escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            closeInstagramModal();
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
}

function openInstagramProfile() {
    const profileUrl = 'https://www.instagram.com/emptynestmomlife/';
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Try Instagram app first on mobile
        const appProfileUrl = 'instagram://user?username=emptynestmomlife';
        window.location.href = appProfileUrl;
        
        // Fallback to web after delay
        setTimeout(() => {
            window.open(profileUrl, '_blank', 'noopener,noreferrer');
        }, 1500);
    } else {
        // Open web version on desktop
        window.open(profileUrl, '_blank', 'noopener,noreferrer');
    }
    
    closeInstagramModal();
}

function closeInstagramModal() {
    const modal = document.querySelector('.instagram-redirect-modal-overlay');
    if (modal) {
        modal.style.animation = 'fadeOut 0.2s ease';
        setTimeout(() => {
            modal.remove();
        }, 200);
    }
}

// New Nest Approved Copy Code Functionality
function copyCodeToClipboard(code, buttonElement) {
    // Use modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(() => {
            showCopyFeedbackModern(buttonElement, code);
        }).catch(err => {
            console.error('Failed to copy using clipboard API:', err);
            fallbackCopyCode(code, buttonElement);
        });
    } else {
        fallbackCopyCode(code, buttonElement);
    }
}

function fallbackCopyCode(code, buttonElement) {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = code;
    textarea.style.position = 'fixed';
    textarea.style.left = '-999999px';
    textarea.style.top = '-999999px';
    document.body.appendChild(textarea);
    
    textarea.focus();
    textarea.select();
    
    try {
        document.execCommand('copy');
        showCopyFeedbackModern(buttonElement, code);
    } catch (err) {
        console.error('Failed to copy code:', err);
        alert(`Copy failed. Please manually copy: ${code}`);
    }
    
    document.body.removeChild(textarea);
}

function showCopyFeedbackModern(buttonElement, code) {
    // Add visual feedback to button
    const originalContent = buttonElement.innerHTML;
    buttonElement.classList.add('copied');
    
    setTimeout(() => {
        buttonElement.classList.remove('copied');
    }, 2000);
    
    // Show modern toast notification
    showModernToast(`Copied "${code}" to clipboard!`);
}

function showModernToast(message) {
    // Remove existing toasts
    document.querySelectorAll('.modern-toast').forEach(toast => toast.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'modern-toast';
    toast.innerHTML = `
        <div class="toast-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        </div>
        <span class="toast-message">${message}</span>
    `;
    
    // Style the toast
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--text-primary);
        color: var(--white);
        padding: 16px 20px;
        border-radius: var(--border-radius-lg);
        font-family: var(--font-family-sans);
        font-size: var(--font-size-sm);
        font-weight: 500;
        box-shadow: var(--card-shadow-hover);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        gap: 8px;
        max-width: 300px;
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

/**
 * NEST APPROVED CONTENT MANAGEMENT SYSTEM
 * Flexible data-driven approach for managing storefronts, partnerships, and perks
 */

// STRATEGIC CONTENT TIERS DATA MODEL FOR NEST APPROVED SECTION
const NEST_APPROVED_DATA = [
    // STOREFRONTS
    {
        id: 'amazon-storefront',
        type: 'storefront',
        brand_name: 'Amazon Storefront',
        logo_image: 'https://page.gensparksite.com/v1/base64_upload/b7bba47e2acf94df2efb5738909abc7e',
        category: 'Lifestyle',
        description_short: 'My tried-and-true favorites for every room and occasion',
        link_url: 'https://www.amazon.com/shop/emptynestmomlife',
        discount_code: null,
        featured: true,
        personal_note: 'From kitchen essentials to travel must-haves, I\'ve curated collections of products that have truly elevated my daily life.',
        status: 'active',
        date_added: '2024-01-15'
    },
    {
        id: 'shopmy-storefront',
        type: 'storefront',
        brand_name: 'ShopMy',
        logo_image: 'https://page.gensparksite.com/v1/base64_upload/01cb95f12d1a3aba6065f8f5124ed549',
        category: 'Lifestyle',
        description_short: 'Weekly finds and current obsessions, updated regularly',
        link_url: 'https://shopmy.us/shop/krandle',
        discount_code: null,
        featured: true,
        personal_note: 'Discover my latest discoveries and seasonal favorites. I update these collections weekly with fresh finds and current trends.',
        status: 'active',
        date_added: '2024-02-01'
    },
    
    // TIER 1 - PARTNERSHIP HERO (Always Visible)
    {
        id: 'just-ingredients-hero',
        type: 'partnership',
        brand_name: 'Just Ingredients',
        logo_image: 'https://page.gensparksite.com/v1/base64_upload/c1a18cf147a836de7902d6f5daf814fa',
        category: 'Wellness & Health',
        description_short: 'Clean wellness staples I use daily—from protein to shampoo',
        link_url: 'https://justingredients.com',
        discount_code: 'EMPTYNESTMOMLIFE',
        featured: true,
        tier: 'hero',
        personal_note: 'Clean wellness staples I use daily—from protein to shampoo',
        status: 'active',
        date_added: '2024-03-15'
    },
    
    // TIER 2 - FEATURED PERKS (Default View - Show Only These 6)
    {
        id: 'omnilux-led-featured',
        type: 'perk',
        brand_name: 'Omnilux LED',
        logo_image: null,
        category: 'Wellness & Health',
        description_short: 'Professional red light therapy that actually works',
        link_url: 'https://omniluxled.com/',
        discount_code: 'OMNILUX15',
        featured: true,
        tier: 'featured',
        personal_note: 'Professional red light therapy that actually works',
        status: 'active',
        date_added: '2024-09-20'
    },
    {
        id: 'branch-basics-featured',
        type: 'perk',
        brand_name: 'Branch Basics',
        logo_image: null,
        category: 'Home & Kitchen',
        description_short: 'Non-toxic cleaning that truly performs',
        link_url: 'https://branchbasics.com/',
        discount_code: 'EMPTYNEST10',
        featured: true,
        tier: 'featured',
        personal_note: 'Non-toxic cleaning that truly performs',
        status: 'active',
        date_added: '2024-09-15'
    },
    {
        id: 'sleep-with-me-beauty-featured',
        type: 'perk',
        brand_name: 'Sleep with Me Beauty',
        logo_image: null,
        category: 'Beauty & Style',
        description_short: 'Silk pillowcases for healthier hair and skin',
        link_url: 'https://sleepwithmebeauty.com/',
        discount_code: 'NESTLIFE15',
        featured: true,
        tier: 'featured',
        personal_note: 'Silk pillowcases for healthier hair and skin',
        status: 'active',
        date_added: '2024-09-12'
    },
    {
        id: 'armra-colostrum-featured',
        type: 'perk',
        brand_name: 'ARMRA Colostrum',
        logo_image: null,
        category: 'Wellness & Health',
        description_short: 'Daily immune support I swear by',
        link_url: 'https://tryarmra.com/',
        discount_code: 'ARMRA10',
        featured: true,
        tier: 'featured',
        personal_note: 'Daily immune support I swear by',
        status: 'active',
        date_added: '2024-09-10'
    },
    {
        id: 'beautycounter-featured',
        type: 'perk',
        brand_name: 'Beautycounter',
        logo_image: null,
        category: 'Beauty & Style',
        description_short: 'Clean makeup I trust completely',
        link_url: 'https://beautycounter.com/',
        discount_code: 'CLEANBEAUTY15',
        featured: true,
        tier: 'featured',
        personal_note: 'Clean makeup I trust completely',
        status: 'active',
        date_added: '2024-09-08'
    },
    {
        id: 'purity-coffee-featured',
        type: 'perk',
        brand_name: 'Purity Coffee',
        logo_image: null,
        category: 'Lifestyle',
        description_short: 'The cleanest, best-tasting coffee',
        link_url: 'https://puritycoffee.com/',
        discount_code: 'PURITY10',
        featured: true,
        tier: 'featured',
        personal_note: 'The cleanest, best-tasting coffee',
        status: 'active',
        date_added: '2024-09-05'
    },
    
    // TIER 3 - ADDITIONAL CODES (Hidden Behind "Show More Perks" Button)
    {
        id: 'clean-monday-meals-additional',
        type: 'perk',
        brand_name: 'Clean Monday Meals',
        logo_image: null,
        category: 'Lifestyle',
        description_short: 'Healthy meal delivery made simple',
        link_url: 'https://cleanmondaymeals.com/',
        discount_code: 'NESTMEALS15',
        featured: false,
        tier: 'additional',
        personal_note: 'Healthy meal delivery made simple',
        status: 'active',
        date_added: '2024-08-28'
    },
    {
        id: 'ryze-superfoods-additional',
        type: 'perk',
        brand_name: 'Ryze Superfoods',
        logo_image: null,
        category: 'Wellness & Health',
        description_short: 'Mushroom coffee without the jitters',
        link_url: 'https://ryzeup.com/',
        discount_code: 'RYZE15',
        featured: false,
        tier: 'additional',
        personal_note: 'Mushroom coffee without the jitters',
        status: 'active',
        date_added: '2024-08-25'
    },
    {
        id: 'queen-of-thrones-additional',
        type: 'perk',
        brand_name: 'Queen of Thrones',
        logo_image: null,
        category: 'Beauty & Style',
        description_short: 'Wellness tools for better sleep',
        link_url: 'https://queenofthrones.com/',
        discount_code: 'QUEENOFT10',
        featured: false,
        tier: 'additional',
        personal_note: 'Wellness tools for better sleep',
        status: 'active',
        date_added: '2024-08-20'
    },
    {
        id: 'clearly-filtered-additional',
        type: 'perk',
        brand_name: 'Clearly Filtered',
        logo_image: null,
        category: 'Home & Kitchen',
        description_short: 'Water that tastes amazing',
        link_url: 'https://clearlyfiltered.com/',
        discount_code: 'CLEARLY10',
        featured: false,
        tier: 'additional',
        personal_note: 'Water that tastes amazing',
        status: 'active',
        date_added: '2024-08-15'
    },
    
    // ADDITIONAL STRATEGIC CONTENT FOR NEST APPROVED - TIER 3 EXPANSION
    {
        id: 'thrive-market-additional',
        type: 'perk',
        brand_name: 'Thrive Market',
        logo_image: null,
        category: 'Wellness & Health',
        description_short: 'Organic groceries delivered to your door',
        link_url: 'https://thrivemarket.com/',
        discount_code: 'THRIVE25',
        featured: false,
        tier: 'additional',
        personal_note: 'Shopping for organic staples has never been easier',
        status: 'active',
        date_added: '2024-08-10'
    },
    {
        id: 'seed-probiotics-additional',
        type: 'perk',
        brand_name: 'SEED Probiotics',
        logo_image: null,
        category: 'Wellness & Health',
        description_short: 'Science-backed daily probiotic',
        link_url: 'https://seed.com/',
        discount_code: 'SEED15',
        featured: false,
        tier: 'additional',
        personal_note: 'The first probiotic that actually made a difference in my digestive health',
        status: 'active',
        date_added: '2024-08-05'
    },
    {
        id: 'our-place-additional',
        type: 'perk',
        brand_name: 'Our Place',
        logo_image: null,
        category: 'Home & Kitchen',
        description_short: 'Beautiful, non-toxic cookware',
        link_url: 'https://fromourplace.com/',
        discount_code: 'OURPLACE10',
        featured: false,
        tier: 'additional',
        personal_note: 'Cookware that performs beautifully and looks stunning on display',
        status: 'active',
        date_added: '2024-07-25'
    },
    {
        id: 'dae-hair-additional',
        type: 'perk',
        brand_name: 'Dae Hair',
        logo_image: null,
        category: 'Beauty & Style',
        description_short: 'Clean hair care that actually works',
        link_url: 'https://daehair.com/',
        discount_code: 'DAE20',
        featured: false,
        tier: 'additional',
        personal_note: 'Finally found hair products that are both clean and effective',
        status: 'active',
        date_added: '2024-07-10'
    },
    {
        id: 'allbirds-additional',
        type: 'perk',
        brand_name: 'Allbirds',
        logo_image: null,
        category: 'Lifestyle',
        description_short: 'Comfortable, sustainable shoes',
        link_url: 'https://allbirds.com/',
        discount_code: 'ALLBIRDS15',
        featured: false,
        tier: 'additional',
        personal_note: 'The most comfortable shoes for everyday adventures',
        status: 'active',
        date_added: '2024-06-25'
    }
];

// Enhanced Nest Approved Filtering and Sorting with Data Management
class NestApprovedManager {
    constructor() {
        this.currentFilter = 'featured'; // Start with Featured view
        this.currentSort = 'featured';
        this.data = NEST_APPROVED_DATA.filter(item => item.status === 'active');
        this.isShowingAll = false; // Track expanded state
        this.maxInitialCards = 6; // Show max 6 Featured cards initially
        this.maxInitialCardsMobile = 4; // Show max 4 Featured cards on mobile
        this.totalFeaturedCards = 6; // Total Featured cards available
        this.totalAdditionalCards = 4; // Total Additional cards available
        this.init();
    }

    init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setup());
        } else {
            this.setup();
        }
    }

    setup() {
        this.validateData();
        this.renderContent();
        this.setupFilterPills();
        this.setupSortDropdown();
        this.setupAriaLiveRegion();
        this.setupShowMoreButton();
        this.applyInitialFiltering(); // Apply featured filter on load
    }

    // Validate data integrity
    validateData() {
        const requiredFields = ['id', 'type', 'brand_name', 'category', 'description_short', 'link_url', 'status'];
        
        this.data = this.data.filter(item => {
            const isValid = requiredFields.every(field => item[field] !== undefined && item[field] !== null);
            if (!isValid) {
                console.warn('Invalid Nest Approved entry:', item);
                return false;
            }
            return true;
        });
    }

    // Main content rendering method
    renderContent() {
        this.renderStorefronts();
        this.renderPartnerships();
        this.renderPerks();
    }

    // Render storefronts in curated collections section
    renderStorefronts() {
        const storefronts = this.data.filter(item => item.type === 'storefront');
        const container = document.querySelector('.storefront-cards');
        
        if (!container || storefronts.length === 0) return;

        container.innerHTML = '';
        
        storefronts.forEach(storefront => {
            const element = this.createStorefrontCard(storefront);
            container.appendChild(element);
        });
    }

    // Render partnerships as featured cards
    renderPartnerships() {
        const partnerships = this.data.filter(item => item.type === 'partnership');
        const container = document.querySelector('.featured-partnership');
        
        if (!container || partnerships.length === 0) return;

        // For now, render the first partnership as featured
        const partnership = partnerships[0];
        container.innerHTML = '';
        
        const element = this.createPartnershipCard(partnership);
        container.appendChild(element);
    }

    // Render perks in discount codes grid
    renderPerks() {
        const perks = this.data.filter(item => item.type === 'perk');
        const container = document.getElementById('discountCodesGrid');
        
        if (!container) return;

        // Keep any existing non-dynamic content and append perks
        const existingCards = container.querySelectorAll('.discount-card:not([data-dynamic])');
        container.innerHTML = '';
        
        // Re-add existing static cards
        existingCards.forEach(card => container.appendChild(card));
        
        // Add dynamic perk cards
        perks.forEach(perk => {
            const element = this.createPerkCard(perk);
            container.appendChild(element);
        });
    }

    setupAriaLiveRegion() {
        // Create aria-live region for screen reader announcements
        if (!document.getElementById('filter-announcements')) {
            const ariaLive = document.createElement('div');
            ariaLive.setAttribute('aria-live', 'polite');
            ariaLive.setAttribute('aria-atomic', 'true');
            ariaLive.className = 'sr-only';
            ariaLive.id = 'filter-announcements';
            document.body.appendChild(ariaLive);
        }
    }

    // Create storefront card element
    createStorefrontCard(storefront) {
        const card = document.createElement('div');
        card.className = 'storefront-card';
        card.setAttribute('data-dynamic', 'true');
        card.setAttribute('data-id', storefront.id);

        card.innerHTML = `
            <div class="card-badge">Storefront</div>
            <div class="storefront-content">
                <div class="storefront-logo">
                    ${storefront.logo_image ? 
                        `<img src="${storefront.logo_image}" alt="${storefront.brand_name}" class="logo-image">` :
                        `<div class="brand-initial-logo">${storefront.brand_name.charAt(0)}</div>`
                    }
                </div>
                <div class="storefront-text">
                    <h4 class="storefront-name">${storefront.brand_name}</h4>
                    <p class="storefront-description">"${storefront.description_short}"</p>
                    <p class="storefront-note">${storefront.personal_note}</p>
                </div>
            </div>
            <a href="${storefront.link_url}" target="_blank" rel="noopener" class="storefront-btn">Shop Collection</a>
        `;

        return card;
    }

    // Create partnership card element
    createPartnershipCard(partnership) {
        const card = document.createElement('div');
        card.className = 'partnership-content-wrapper';
        card.setAttribute('data-dynamic', 'true');
        card.setAttribute('data-id', partnership.id);

        const discountSection = partnership.discount_code ? `
            <div class="partnership-action">
                <div class="discount-code-display">
                    <label for="${partnership.id}-code">Exclusive Discount Code:</label>
                    <div class="code-input-group">
                        <input type="text" id="${partnership.id}-code" value="${partnership.discount_code}" readonly class="code-input">
                        <button onclick="copyCodeToClipboard('${partnership.discount_code}', this)" class="copy-code-btn">
                            <span class="copy-text">Copy Code</span>
                            <span class="copied-text">Copied!</span>
                        </button>
                    </div>
                </div>
                <a href="${partnership.link_url}" target="_blank" rel="noopener" class="shop-now-btn">Shop Now</a>
            </div>
        ` : `
            <div class="partnership-action">
                <a href="${partnership.link_url}" target="_blank" rel="noopener" class="shop-now-btn">Learn More</a>
            </div>
        `;

        card.innerHTML = `
            <div class="partnership-badge">Partnership</div>
            <div class="partnership-content">
                <div class="partnership-logo">
                    ${partnership.logo_image ? 
                        `<img src="${partnership.logo_image}" alt="${partnership.brand_name}" class="logo-image">` :
                        `<div class="brand-initial-logo">${partnership.brand_name.charAt(0)}</div>`
                    }
                </div>
                <div class="partnership-text">
                    <h4 class="partnership-name">${partnership.brand_name}</h4>
                    <div class="partnership-testimonial">
                        <p>"${partnership.personal_note}"</p>
                        <p class="testimonial-signature">— Kellie</p>
                    </div>
                </div>
            </div>
            ${discountSection}
        `;

        return card;
    }

    // Create perk card element
    createPerkCard(perk) {
        const card = document.createElement('div');
        card.className = 'discount-card';
        card.setAttribute('data-dynamic', 'true');
        card.setAttribute('data-id', perk.id);
        card.setAttribute('data-category', this.getCategorySlug(perk.category));
        card.setAttribute('data-name', perk.brand_name);
        card.setAttribute('data-date', perk.date_added);
        card.setAttribute('data-featured', perk.featured.toString());

        const actionSection = perk.discount_code ? `
            <div class="code-section">
                <div class="code-display">
                    <input type="text" value="${perk.discount_code}" readonly class="code-field">
                    <button onclick="enhancedCopyCode('${perk.discount_code}', this)" class="copy-btn" aria-label="Copy discount code">
                        <span class="copy-text"><i class="fas fa-copy"></i></span>
                        <span class="copied-text">Copied!</span>
                    </button>
                </div>
            </div>
        ` : perk.discount_link ? `
            <div class="code-section">
                <a href="${perk.discount_link}" target="_blank" rel="noopener" class="access-link-btn">Get Special Access</a>
            </div>
        ` : `
            <div class="code-section">
                <span class="no-code-text">Visit store for offers</span>
            </div>
        `;

        card.innerHTML = `
            <div class="card-badge perk-badge">Perk</div>
            <div class="card-header">
                <div class="brand-logo-small">
                    ${perk.logo_image ? 
                        `<img src="${perk.logo_image}" alt="${perk.brand_name}" class="brand-logo-img">` :
                        `<span class="brand-initial">${perk.brand_name.charAt(0)}</span>`
                    }
                </div>
                <div class="brand-info">
                    <h5 class="brand-name">${perk.brand_name}</h5>
                    <div class="category-tag ${this.getCategorySlug(perk.category)}">${perk.category}</div>
                </div>
            </div>
            <div class="offer-description">${perk.description_short}</div>
            <div class="personal-note">"${perk.personal_note}"</div>
            ${actionSection}
            <a href="${perk.link_url}" target="_blank" rel="noopener" class="shop-now-small">Shop Now</a>
        `;

        return card;
    }

    // Convert category name to slug for CSS classes
    getCategorySlug(category) {
        return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    // Add new entry dynamically
    addEntry(entry) {
        // Validate entry
        const requiredFields = ['id', 'type', 'brand_name', 'category', 'description_short', 'link_url'];
        const isValid = requiredFields.every(field => entry[field] !== undefined && entry[field] !== null);
        
        if (!isValid) {
            console.error('Invalid entry data:', entry);
            return false;
        }

        // Set defaults
        entry.status = entry.status || 'active';
        entry.featured = entry.featured || false;
        entry.date_added = entry.date_added || new Date().toISOString().split('T')[0];
        
        // Add to data array
        this.data.push(entry);
        
        // Re-render the appropriate section
        switch (entry.type) {
            case 'storefront':
                this.renderStorefronts();
                break;
            case 'partnership':
                this.renderPartnerships();
                break;
            case 'perk':
                this.renderPerks();
                this.cacheCards(); // Re-cache for filtering
                this.filterCards(this.currentFilter); // Re-apply current filter
                break;
        }
        
        return true;
    }

    // Remove entry dynamically
    removeEntry(entryId) {
        const index = this.data.findIndex(item => item.id === entryId);
        if (index === -1) return false;

        const entry = this.data[index];
        this.data.splice(index, 1);
        
        // Remove from DOM
        const element = document.querySelector(`[data-id="${entryId}"]`);
        if (element) {
            element.remove();
        }
        
        // Re-cache if it was a perk
        if (entry.type === 'perk') {
            this.cacheCards();
            this.filterCards(this.currentFilter);
        }
        
        return true;
    }

    // Update entry status (hide/show)
    updateEntryStatus(entryId, status) {
        const entry = this.data.find(item => item.id === entryId);
        if (!entry) return false;
        
        entry.status = status;
        
        if (status === 'active') {
            // Re-render to show
            this.renderContent();
            if (entry.type === 'perk') {
                this.cacheCards();
                this.filterCards(this.currentFilter);
            }
        } else {
            // Hide by removing from DOM
            const element = document.querySelector(`[data-id="${entryId}"]`);
            if (element) {
                element.remove();
            }
            if (entry.type === 'perk') {
                this.cacheCards();
                this.filterCards(this.currentFilter);
            }
        }
        
        return true;
    }

    setupFilterPills() {
        const filterPills = document.querySelectorAll('.filter-pill');
        filterPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                const filter = e.target.getAttribute('data-filter');
                this.setActiveFilter(filter);
                this.filterCards(filter);
            });
        });
    }

    setupSortDropdown() {
        const sortDropdown = document.getElementById('sortSelect');
        if (sortDropdown) {
            sortDropdown.addEventListener('change', (e) => {
                this.currentSort = e.target.value;
                this.sortCards(this.currentSort);
            });
        }
    }

    cacheCards() {
        const grid = document.getElementById('discountCodesGrid');
        if (grid) {
            this.cards = Array.from(grid.querySelectorAll('.discount-card')).map(card => ({
                element: card,
                category: card.getAttribute('data-category'),
                name: card.getAttribute('data-name'),
                date: new Date(card.getAttribute('data-date') || Date.now()),
                featured: card.getAttribute('data-featured') === 'true'
            }));
        }
    }

    setupCardHoverEffects() {
        // Enhanced hover effects are handled by CSS
        // Re-cache cards after rendering
        this.cacheCards();
        this.cards.forEach(cardData => {
            cardData.element.classList.add('visible');
        });
    }

    setActiveFilter(filter) {
        // Update active state on filter pills
        document.querySelectorAll('.filter-pill').forEach(pill => {
            pill.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        this.currentFilter = filter;
    }

    filterCards(filter) {
        const grid = document.getElementById('discountCodesGrid');
        if (!grid) return;

        // Add filtering class for transition
        grid.classList.add('filtering');

        let visibleCount = 0;
        this.cards.forEach(cardData => {
            const shouldShow = filter === 'all' || cardData.category === filter;
            
            if (shouldShow) {
                cardData.element.classList.remove('hidden');
                cardData.element.classList.add('visible');
                visibleCount++;
            } else {
                cardData.element.classList.add('hidden');
                cardData.element.classList.remove('visible');
            }
        });

        // Remove filtering class after transition
        setTimeout(() => {
            grid.classList.remove('filtering');
        }, 400);

        // Announce to screen readers
        const announcement = filter === 'all' 
            ? `Showing all ${visibleCount} discount codes`
            : `Showing ${visibleCount} codes in ${this.getCategoryDisplayName(filter)} category`;
        
        this.announceToScreenReader(announcement);
    }

    sortCards(sortType) {
        const grid = document.getElementById('discountCodesGrid');
        if (!grid) return;

        let sortedCards = [...this.cards];

        switch (sortType) {
            case 'featured':
                sortedCards.sort((a, b) => {
                    if (a.featured && !b.featured) return -1;
                    if (!a.featured && b.featured) return 1;
                    return b.date - a.date; // Secondary sort by date
                });
                break;
            case 'newest':
                sortedCards.sort((a, b) => b.date - a.date);
                break;
            case 'alphabetical':
                sortedCards.sort((a, b) => a.name.localeCompare(b.name));
                break;
        }

        // Reorder DOM elements
        sortedCards.forEach((cardData, index) => {
            grid.appendChild(cardData.element);
        });

        // Re-apply current filter
        this.filterCards(this.currentFilter);

        // Announce to screen readers
        const sortDisplayName = {
            'featured': 'featured first',
            'newest': 'newest first',
            'alphabetical': 'alphabetically'
        }[sortType];
        
        this.announceToScreenReader(`Codes sorted ${sortDisplayName}`);
    }

    getCategoryDisplayName(category) {
        const names = {
            'wellness': 'Wellness & Health',
            'home': 'Home & Kitchen',
            'beauty': 'Beauty & Style',
            'lifestyle': 'Lifestyle'
        };
        return names[category] || category;
    }

    announceToScreenReader(message) {
        const announcer = document.getElementById('filter-announcements');
        if (announcer) {
            announcer.textContent = message;
        }
    }

    // PHASE B: Enhanced Filtering Functionality

    applyInitialFiltering() {
        // Cache all cards first
        this.cacheCards();
        
        // Set initial filter to "Featured" and update UI
        this.setActiveFilter('featured');
        
        // Show only Tier 2 (Featured) cards initially, hide Tier 3 (Additional)
        this.showStrategicTier('featured');
        
        // Update results counter
        this.updateResultsCounter();
    }

    setupShowMoreButton() {
        // Find or create the show more button container
        let showMoreContainer = document.querySelector('.show-more-container');
        if (!showMoreContainer) {
            showMoreContainer = document.createElement('div');
            showMoreContainer.className = 'show-more-container';
            
            const grid = document.getElementById('discountCodesGrid');
            if (grid) {
                grid.parentNode.insertBefore(showMoreContainer, grid.nextSibling);
            }
        }

        // Create show more button
        showMoreContainer.innerHTML = `
            <button class="show-more-btn" onclick="window.nestApprovedManager.toggleShowMore()">
                <span class="show-more-text">Show More Perks</span>
                <span class="show-less-text">Show Less</span>
                <svg class="show-more-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6,9 12,15 18,9"></polyline>
                </svg>
            </button>
        `;

        // Create results counter
        let counterContainer = document.querySelector('.results-counter');
        if (!counterContainer) {
            counterContainer = document.createElement('div');
            counterContainer.className = 'results-counter';
            showMoreContainer.parentNode.insertBefore(counterContainer, showMoreContainer);
        }
    }

    filterCardsByFeatured(limitToFeatured = false) {
        if (!this.cards) this.cacheCards();

        const grid = document.getElementById('discountCodesGrid');
        if (!grid) return;

        // Add filtering animation
        grid.classList.add('filtering');

        let visibleCards = [];
        let hiddenCards = [];

        this.cards.forEach((cardData, index) => {
            const isFeatured = cardData.featured;
            const shouldShow = !limitToFeatured || isFeatured;
            
            if (shouldShow && (!limitToFeatured || visibleCards.length < this.maxInitialCards)) {
                visibleCards.push(cardData);
                cardData.element.classList.remove('hidden');
                cardData.element.classList.add('visible');
                cardData.element.style.animationDelay = `${index * 50}ms`;
            } else {
                hiddenCards.push(cardData);
                cardData.element.classList.add('hidden');
                cardData.element.classList.remove('visible');
            }
        });

        // Update state
        this.currentVisibleCount = visibleCards.length;
        this.currentHiddenCount = hiddenCards.length;

        // Remove filtering animation
        setTimeout(() => {
            grid.classList.remove('filtering');
        }, 400);

        // Update show more button visibility
        this.updateShowMoreButton();
        
        // Announce to screen readers
        const message = limitToFeatured ? 
            `Showing ${visibleCards.length} featured perks` :
            `Showing all ${visibleCards.length} perks`;
        this.announceToScreenReader(message);
    }

    toggleShowMore() {
        this.isShowingAll = !this.isShowingAll;
        
        if (this.currentFilter === 'featured') {
            if (this.isShowingAll) {
                this.showStrategicTier('all'); // Show both Featured and Additional
            } else {
                this.showStrategicTier('featured'); // Show only Featured
            }
        } else if (this.currentFilter === 'all') {
            this.filterCards('all');
            if (!this.isShowingAll) {
                this.limitVisibleCards();
            }
        } else {
            this.filterCards(this.currentFilter);
            if (!this.isShowingAll) {
                this.limitVisibleCards();
            }
        }
        
        this.updateResultsCounter();
    }

    limitVisibleCards() {
        if (!this.cards) return;

        let visibleCount = 0;
        this.cards.forEach(cardData => {
            if (cardData.element.classList.contains('visible') && visibleCount >= this.maxInitialCards) {
                cardData.element.classList.add('hidden');
                cardData.element.classList.remove('visible');
            } else if (cardData.element.classList.contains('visible')) {
                visibleCount++;
            }
        });

        this.currentVisibleCount = visibleCount;
    }

    updateShowMoreButton() {
        const showMoreBtn = document.querySelector('.show-more-btn');
        if (!showMoreBtn) return;

        const hasHiddenCards = this.currentHiddenCount > 0;
        
        if (hasHiddenCards) {
            showMoreBtn.style.display = 'flex';
            showMoreBtn.classList.toggle('expanded', this.isShowingAll);
        } else {
            showMoreBtn.style.display = 'none';
        }
    }

    updateResultsCounter() {
        const counterContainer = document.querySelector('.results-counter');
        if (!counterContainer) return;

        const totalFeatured = this.totalFeaturedCards;
        const totalAdditional = this.totalAdditionalCards;
        const totalCards = totalFeatured + totalAdditional;
        
        let counterText = '';
        if (this.currentFilter === 'featured' && !this.isShowingAll) {
            counterText = `Showing ${totalFeatured} of ${totalCards} perks`;
        } else if (this.currentFilter === 'featured' && this.isShowingAll) {
            counterText = `Showing all ${totalCards} perks`;
        } else if (this.currentFilter !== 'all' && this.currentFilter !== 'featured') {
            const categoryName = this.getCategoryDisplayName(this.currentFilter);
            const visibleCards = this.currentVisibleCount || 0;
            const categoryTotal = this.cards ? this.cards.filter(card => card.category === this.currentFilter).length : 0;
            counterText = `Showing ${visibleCards} of ${categoryTotal} ${categoryName} perks`;
        } else {
            counterText = `Showing all ${totalCards} perks`;
        }

        counterContainer.innerHTML = `
            <div class="counter-text">${counterText}</div>
            ${this.currentFilter !== 'all' && this.currentFilter !== 'featured' ? 
                `<button class="clear-filters-btn" onclick="window.nestApprovedManager.clearFilters()">
                    <span>Clear Filters</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>` : ''}
        `;
    }

    clearFilters() {
        this.isShowingAll = false;
        this.setActiveFilter('featured');
        this.showStrategicTier('featured');
        this.updateResultsCounter();
    }

    // Override the existing filterCards method with enhanced functionality
    filterCards(filter) {
        const grid = document.getElementById('discountCodesGrid');
        if (!grid) return;

        // Add filtering class for transition
        grid.classList.add('filtering');

        let visibleCount = 0;
        let categoryCount = 0;

        this.cards.forEach((cardData, index) => {
            const shouldShow = filter === 'all' || cardData.category === filter;
            
            if (shouldShow) {
                categoryCount++;
                const shouldDisplay = this.isShowingAll || visibleCount < this.maxInitialCards;
                
                if (shouldDisplay) {
                    cardData.element.classList.remove('hidden');
                    cardData.element.classList.add('visible');
                    cardData.element.style.animationDelay = `${visibleCount * 50}ms`;
                    visibleCount++;
                } else {
                    cardData.element.classList.add('hidden');
                    cardData.element.classList.remove('visible');
                }
            } else {
                cardData.element.classList.add('hidden');
                cardData.element.classList.remove('visible');
            }
        });

        this.currentVisibleCount = visibleCount;
        this.currentHiddenCount = categoryCount - visibleCount;

        // Remove filtering class after transition
        setTimeout(() => {
            grid.classList.remove('filtering');
        }, 400);

        // Update show more button and counter
        this.updateShowMoreButton();
        this.updateResultsCounter();

        // Show "no codes found" if no matches
        this.handleEmptyResults(filter, categoryCount);

        // Announce to screen readers
        const announcement = filter === 'all' 
            ? `Showing ${visibleCount} of ${this.cards.length} discount codes`
            : categoryCount === 0
            ? `No codes found in ${this.getCategoryDisplayName(filter)} category`
            : `Showing ${visibleCount} of ${categoryCount} codes in ${this.getCategoryDisplayName(filter)} category`;
        
        this.announceToScreenReader(announcement);
    }

    handleEmptyResults(filter, resultCount) {
        let emptyMessage = document.querySelector('.empty-results-message');
        
        if (resultCount === 0 && filter !== 'all' && filter !== 'featured') {
            if (!emptyMessage) {
                emptyMessage = document.createElement('div');
                emptyMessage.className = 'empty-results-message';
                
                const grid = document.getElementById('discountCodesGrid');
                if (grid) {
                    grid.parentNode.insertBefore(emptyMessage, grid.nextSibling);
                }
            }

            const categoryName = this.getCategoryDisplayName(filter);
            emptyMessage.innerHTML = `
                <div class="empty-results-content">
                    <div class="empty-results-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <circle cx="11" cy="11" r="8"/>
                            <path d="M21 21l-4.35-4.35"/>
                        </svg>
                    </div>
                    <h4>No ${categoryName} codes found</h4>
                    <p>We don't currently have any discount codes in this category.</p>
                    <div class="empty-results-suggestions">
                        <p>Try browsing:</p>
                        <div class="suggestion-links">
                            <button onclick="window.nestApprovedManager.setActiveFilter('featured'); window.nestApprovedManager.filterCardsByFeatured(true);" class="suggestion-btn">Featured Perks</button>
                            <button onclick="window.nestApprovedManager.setActiveFilter('all'); window.nestApprovedManager.filterCards('all');" class="suggestion-btn">All Categories</button>
                        </div>
                    </div>
                </div>
            `;
            emptyMessage.style.display = 'block';
        } else if (emptyMessage) {
            emptyMessage.style.display = 'none';
        }
    }

    // Override setupFilterPills with enhanced functionality
    setupFilterPills() {
        const filterPills = document.querySelectorAll('.filter-pill');
        filterPills.forEach(pill => {
            pill.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = e.target.getAttribute('data-filter');
                
                // Add loading state
                pill.classList.add('loading');
                
                setTimeout(() => {
                    pill.classList.remove('loading');
                    this.setActiveFilter(filter);
                    this.isShowingAll = false; // Reset expansion state
                    
                    if (filter === 'featured') {
                        this.filterCardsByFeatured(true);
                    } else {
                        this.filterCards(filter);
                    }
                }, 150); // Small delay for visual feedback
            });

            // Add hover effects for better UX
            pill.addEventListener('mouseenter', () => {
                if (!pill.classList.contains('active')) {
                    pill.classList.add('hover');
                }
            });

            pill.addEventListener('mouseleave', () => {
                pill.classList.remove('hover');
            });
        });
    }

    // Strategic Tier Management Methods
    showStrategicTier(tier) {
        const featuredCards = document.querySelectorAll(".featured-card");
        const additionalSection = document.querySelector(".additional-codes-section");
        
        if (tier === "featured") {
            // Show only Featured cards (Tier 2)
            featuredCards.forEach(card => {
                card.style.display = "block";
                card.classList.add("visible");
                card.classList.remove("hidden");
            });
            
            // Hide Additional codes section (Tier 3)
            if (additionalSection) {
                additionalSection.style.display = "none";
            }
            
            this.currentVisibleCount = this.totalFeaturedCards;
            this.currentHiddenCount = this.totalAdditionalCards;
            
        } else if (tier === "all") {
            // Show Featured cards (Tier 2)
            featuredCards.forEach(card => {
                card.style.display = "block";
                card.classList.add("visible");
                card.classList.remove("hidden");
            });
            
            // Show Additional codes section (Tier 3) with animation
            if (additionalSection) {
                additionalSection.style.display = "block";
                
                // Animate additional cards in
                const additionalCards = additionalSection.querySelectorAll(".additional-card");
                additionalCards.forEach((card, index) => {
                    card.style.animationDelay = `${index * 100}ms`;
                    card.classList.add("visible");
                    card.classList.remove("hidden");
                });
            }
            
            this.currentVisibleCount = this.totalFeaturedCards + this.totalAdditionalCards;
            this.currentHiddenCount = 0;
        }
        
        // Apply mobile responsiveness
        this.applyMobileResponsiveness();
        
        // Update show more button
        this.updateShowMoreButton();
        
        // Announce to screen readers
        const message = tier === "featured" ? 
            `Showing ${this.totalFeaturedCards} featured perks` :
            `Showing all ${this.totalFeaturedCards + this.totalAdditionalCards} perks`;
        this.announceToScreenReader(message);
    }

    // Enhanced mobile responsiveness for Featured cards
    applyMobileResponsiveness() {
        const isMobile = window.innerWidth <= 768;
        const featuredCards = document.querySelectorAll(".featured-card");
        
        if (isMobile && !this.isShowingAll && this.currentFilter === "featured") {
            // Show only 4 Featured cards on mobile initially
            featuredCards.forEach((card, index) => {
                if (index >= this.maxInitialCardsMobile) {
                    card.style.display = "none";
                } else {
                    card.style.display = "block";
                }
            });
            this.currentVisibleCount = Math.min(this.maxInitialCardsMobile, this.totalFeaturedCards);
        } else if (!isMobile || this.isShowingAll) {
            // Desktop or expanded view - show all Featured cards
            featuredCards.forEach(card => {
                card.style.display = "block";
            });
            if (this.currentFilter === "featured") {
                this.currentVisibleCount = this.totalFeaturedCards;
            }
        }
    }
}

// Enhanced Copy Code Functionality
function enhancedCopyCode(code, buttonElement) {
    // Use modern clipboard API if available
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(() => {
            showEnhancedCopyFeedback(buttonElement, code);
        }).catch(err => {
            console.error('Failed to copy using clipboard API:', err);
            fallbackCopyCode(code, buttonElement);
        });
    } else {
        fallbackCopyCode(code, buttonElement);
    }
}

function showEnhancedCopyFeedback(buttonElement, code) {
    // Add visual feedback to button
    buttonElement.classList.add('copied');
    
    // Revert after 2 seconds
    setTimeout(() => {
        buttonElement.classList.remove('copied');
    }, 2000);
    
    // Announce to screen readers
    const announcer = document.getElementById('filter-announcements');
    if (announcer) {
        announcer.textContent = `Discount code ${code} copied to clipboard`;
    }
    
    // Show modern toast notification
    showEnhancedToast(`Copied "${code}" to clipboard!`);
}

function showEnhancedToast(message) {
    // Remove existing toasts
    document.querySelectorAll('.modern-toast').forEach(toast => toast.remove());
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'modern-toast';
    toast.innerHTML = `
        <div class="toast-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"></polyline>
            </svg>
        </div>
        <span class="toast-message">${message}</span>
    `;
    
    // Style the toast
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--text-primary);
        color: var(--white);
        padding: 16px 20px;
        border-radius: var(--border-radius-lg);
        font-family: var(--font-family-sans);
        font-size: var(--font-size-sm);
        font-weight: 500;
        box-shadow: var(--card-shadow-hover);
        z-index: 10000;
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        display: flex;
        align-items: center;
        gap: 8px;
        max-width: 300px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100px)';
        setTimeout(() => {
            if (toast.parentNode) {
                document.body.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Initialize Nest Approved Manager - Moved to DOMContentLoaded block

// Initialize highlights functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add escape key listener for modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeHighlightsModal();
        }
    });
    
    // Ensure modal elements exist
    const modal = document.getElementById('highlightsModal');
    if (modal) {
        console.log('Instagram Highlights functionality initialized');
    }
    
    // Initialize Enhanced Nest Approved Content Management System
    window.nestApprovedManager = new NestApprovedManager();
    
    // Global functions for content management (accessible from browser console for testing)
    window.addNestApprovedEntry = function(entry) {
        console.log('Adding entry:', entry);
        return window.nestApprovedManager.addEntry(entry);
    };

    window.removeNestApprovedEntry = function(entryId) {
        console.log('Removing entry:', entryId);
        return window.nestApprovedManager.removeEntry(entryId);
    };

    window.updateNestApprovedStatus = function(entryId, status) {
        console.log('Updating entry status:', entryId, status);
        return window.nestApprovedManager.updateEntryStatus(entryId, status);
    };

    // Development helpers (can be removed in production)
    window.NEST_APPROVED_DATA = NEST_APPROVED_DATA;
    window.nestManager = window.nestApprovedManager;
    
    console.log('Enhanced Nest Approved functionality initialized');
});

// Community Perks Collapsible Section
function toggleCommunityPerks() {
    const content = document.getElementById('perksContent');
    const icon = document.getElementById('perksToggleIcon');
    const header = document.querySelector('.perks-toggle-header');
    
    if (!content || !icon) return;
    
    const isOpen = content.classList.contains('open');
    
    if (isOpen) {
        content.classList.remove('open');
        icon.style.transform = 'rotate(0deg)';
        header.classList.remove('active');
    } else {
        content.classList.add('open');
        icon.style.transform = 'rotate(180deg)';
        header.classList.add('active');
        
        // Re-cache cards and apply current filter after opening
        setTimeout(() => {
            if (window.nestManager) {
                window.nestManager.cacheCards();
                window.nestManager.filterCards(window.nestManager.currentFilter);
            }
        }, 300);
    }
}

// Enhanced copy function for compact buttons
function copyCodeToClipboard(code, buttonElement) {
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(code).then(() => {
            showCompactCopyFeedback(buttonElement, code);
        }).catch(err => {
            console.error('Failed to copy:', err);
            fallbackCopyCode(code, buttonElement);
        });
    } else {
        fallbackCopyCode(code, buttonElement);
    }
}

function showCompactCopyFeedback(buttonElement, code) {
    // Add visual feedback
    buttonElement.classList.add('copied');
    
    setTimeout(() => {
        buttonElement.classList.remove('copied');
    }, 2000);
    
    // Show toast notification
    showEnhancedToast(`Copied "${code}" to clipboard!`);
}
// Nest Approved Manager is initialized in the DOMContentLoaded block above

// ===================================
// DISCOUNT CODES CATEGORY FILTERING
// ===================================

class DiscountCodesManager {
    constructor() {
        this.currentCategory = 'featured';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.showCategory('featured');
    }

    setupEventListeners() {
        const categoryBtns = document.querySelectorAll('.category-btn');
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const category = e.target.getAttribute('data-category');
                this.switchCategory(category, e.target);
            });
        });
    }

    switchCategory(category, clickedBtn) {
        // Update active button
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        clickedBtn.classList.add('active');

        // Show codes for selected category
        this.showCategory(category);
        this.currentCategory = category;
    }

    showCategory(category) {
        const allItems = document.querySelectorAll('.discount-code-item');
        
        allItems.forEach(item => {
            const itemCategories = item.getAttribute('data-category').split(' ');
            
            if (category === 'featured') {
                // Show only items that have 'featured' category
                if (itemCategories.includes('featured')) {
                    item.style.display = 'block';
                    this.animateIn(item);
                } else {
                    item.style.display = 'none';
                }
            } else {
                // Show items that match the selected category (but not featured-only items)
                if (itemCategories.includes(category) && !itemCategories.includes('featured')) {
                    item.style.display = 'block';
                    this.animateIn(item);
                } else {
                    item.style.display = 'none';
                }
            }
        });
    }

    animateIn(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.3s ease';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Initialize discount codes manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on a page with discount codes
    if (document.querySelector('.discount-codes-grid')) {
        window.discountCodesManager = new DiscountCodesManager();
    }
});

// ====== ENHANCED DISCOUNT CODES SYSTEM (NAMESPACED) ======

// Enhanced Discount Codes Manager - Separate from existing system
const EnhancedDiscountSystem = {
    isAdditionalCodesVisible: false,
    activeFilter: 'featured',
    
    init() {
        this.initializeFilterButtons();
        this.setupKeyboardNavigation();
        // Initialize with featured codes showing by default
        setTimeout(() => {
            this.filterCodes('featured');
        }, 100);
        console.log('Enhanced discount codes system initialized successfully');
    },
    
    initializeFilterButtons() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const category = btn.textContent.toLowerCase().includes('all') ? 'all' : 
                               btn.textContent.toLowerCase().replace(/\s+/g, '');
                this.filterCodes(category);
            });
        });
    },
    

    
    setupKeyboardNavigation() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isAdditionalCodesVisible) {
                this.toggleAdditionalCodes();
            }
        });
    },
    
    toggleAdditionalCodes() {
        const additionalGrid = document.getElementById('additionalCodesGrid');
        const showMoreBtn = document.querySelector('.show-more-btn .btn-text');
        const btnIcon = document.querySelector('.show-more-btn .btn-icon');
        
        if (!additionalGrid || !showMoreBtn) return;
        
        this.isAdditionalCodesVisible = !this.isAdditionalCodesVisible;
        
        if (this.isAdditionalCodesVisible) {
            // Show additional codes
            additionalGrid.style.display = 'grid';
            setTimeout(() => {
                additionalGrid.classList.add('visible');
            }, 50);
            
            showMoreBtn.textContent = 'Show Less Codes';
            if (btnIcon) {
                btnIcon.style.transform = 'rotate(180deg)';
            }
            
            // Scroll to additional codes after animation
            setTimeout(() => {
                additionalGrid.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'nearest' 
                });
            }, 300);
        } else {
            // Hide additional codes
            additionalGrid.classList.remove('visible');
            setTimeout(() => {
                additionalGrid.style.display = 'none';
            }, 500);
            
            showMoreBtn.textContent = 'Show More Codes';
            if (btnIcon) {
                btnIcon.style.transform = 'rotate(0deg)';
            }
        }
        
        // Re-apply current filter to new visible codes
        if (this.activeFilter !== 'all') {
            setTimeout(() => {
                this.filterCodes(this.activeFilter);
            }, 100);
        }
    },
    
    filterCodes(category) {
        this.activeFilter = category;
        
        // Update active filter button
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if ((category === 'all' && btn.textContent.includes('All Codes')) ||
                (category === 'featured' && btn.textContent.includes('Featured Codes')) ||
                (category !== 'all' && category !== 'featured' && btn.textContent.toLowerCase().includes(category))) {
                btn.classList.add('active');
            }
        });
        
        // Get all code cards (both featured and additional)
        const featuredCards = document.querySelectorAll('.featured-codes-grid .code-card[data-category]');
        const additionalCards = document.querySelectorAll('.additional-codes-grid .code-card[data-category]');
        const allCards = [...featuredCards, ...additionalCards];
        
        // Handle grid visibility based on category
        const featuredGrid = document.querySelector('.featured-codes-grid');
        const additionalGrid = document.querySelector('.additional-codes-grid');
        
        if (category === 'featured') {
            // Featured filter: show featured grid, hide additional grid
            if (featuredGrid) {
                featuredGrid.style.display = 'grid';
                featuredGrid.style.opacity = '1';
            }
            if (additionalGrid) {
                additionalGrid.style.display = 'none';
                additionalGrid.style.opacity = '0';
            }
        } else {
            // All other filters: show both grids and filter individual cards
            if (featuredGrid) {
                featuredGrid.style.display = 'grid';
                featuredGrid.style.opacity = '1';
            }
            if (additionalGrid) {
                additionalGrid.style.display = 'grid';
                additionalGrid.style.opacity = '1';
            }
        }
        
        allCards.forEach((card, index) => {
            const cardCategory = card.getAttribute('data-category');
            let shouldShow = false;
            
            if (category === 'all') {
                shouldShow = true;
            } else if (category === 'featured') {
                // Show only the 4 featured codes (this should be redundant due to grid hiding above)
                shouldShow = card.closest('.featured-codes-grid') !== null;
            } else {
                // Show specific category
                shouldShow = cardCategory === category;
            }
            
            // Add staggered animation delay
            card.style.transitionDelay = `${index * 50}ms`;
            
            if (shouldShow) {
                card.classList.remove('filter-hidden');
                card.classList.add('filter-visible');
                card.style.display = 'block';
            } else {
                card.classList.add('filter-hidden');
                card.classList.remove('filter-visible');
                // Don't set display:none immediately to allow transition
                setTimeout(() => {
                    if (card.classList.contains('filter-hidden')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
        
        // Update results count
        setTimeout(() => {
            this.updateResultsCount(category);
        }, 350);
    },
    
    updateResultsCount(category) {
        const visibleCards = document.querySelectorAll('.code-card.filter-visible:not([style*="display: none"])');
        
        // Remove existing count display
        const existingCount = document.querySelector('.filter-results-count');
        if (existingCount) {
            existingCount.remove();
        }
        
        // Add new count display if filtering
        if (category !== 'all') {
            const filterControls = document.querySelector('.discount-filter-controls');
            if (filterControls && visibleCards.length > 0) {
                const countDisplay = document.createElement('div');
                countDisplay.className = 'filter-results-count';
                const displayText = category === 'featured' ? 'featured' : category;
                countDisplay.innerHTML = `
                    <span class="count-text">
                        Showing ${visibleCards.length} ${displayText} ${visibleCards.length === 1 ? 'code' : 'codes'}
                    </span>
                `;
                filterControls.appendChild(countDisplay);
            }
        }
    }
};

// Global functions for onclick handlers in HTML
function toggleAdditionalCodes() {
    EnhancedDiscountSystem.toggleAdditionalCodes();
}

function filterDiscountCodes(category) {
    EnhancedDiscountSystem.filterCodes(category);
}

// Enhanced copy to clipboard with better user feedback
function copyCodeToClipboard(code, button) {
    if (!code || !button) return;
    
    // Create temporary textarea for copying
    const tempInput = document.createElement('textarea');
    tempInput.value = code;
    document.body.appendChild(tempInput);
    tempInput.select();
    
    try {
        // Try modern clipboard API first
        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard.writeText(code).then(() => {
                showCopyFeedback(button, true);
            }).catch(() => {
                // Fallback to execCommand
                const success = document.execCommand('copy');
                showCopyFeedback(button, success);
            });
        } else {
            // Fallback to execCommand
            const success = document.execCommand('copy');
            showCopyFeedback(button, success);
        }
    } catch (err) {
        showCopyFeedback(button, false);
        console.error('Copy failed:', err);
    } finally {
        document.body.removeChild(tempInput);
    }
}

// Show visual feedback for copy action
function showCopyFeedback(button, success) {
    const originalText = button.querySelector('.code-text').textContent;
    const originalIcon = button.querySelector('.copy-icon').textContent;
    
    if (success) {
        // Success feedback
        button.classList.add('copied');
        button.querySelector('.code-text').textContent = 'COPIED!';
        button.querySelector('.copy-icon').textContent = '✓';
        
        // Create floating success message
        createFloatingMessage('Code copied to clipboard!', 'success');
        
        // Reset after delay
        setTimeout(() => {
            button.classList.remove('copied');
            button.querySelector('.code-text').textContent = originalText;
            button.querySelector('.copy-icon').textContent = originalIcon;
        }, 2000);
    } else {
        // Error feedback
        button.classList.add('copy-error');
        button.querySelector('.copy-icon').textContent = '✗';
        
        createFloatingMessage('Copy failed. Please try again.', 'error');
        
        // Reset after delay
        setTimeout(() => {
            button.classList.remove('copy-error');
            button.querySelector('.copy-icon').textContent = originalIcon;
        }, 2000);
    }
}

// Create floating notification message
function createFloatingMessage(message, type = 'success') {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.floating-message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageEl = document.createElement('div');
    messageEl.className = `floating-message ${type}`;
    messageEl.textContent = message;
    
    // Style the message
    Object.assign(messageEl.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        background: type === 'success' ? '#28a745' : '#dc3545',
        color: 'white',
        padding: '12px 20px',
        borderRadius: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '10000',
        fontSize: '14px',
        fontWeight: '500',
        transform: 'translateX(100%)',
        opacity: '0',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(messageEl);
    
    // Animate in
    setTimeout(() => {
        messageEl.style.transform = 'translateX(0)';
        messageEl.style.opacity = '1';
    }, 10);
    
    // Animate out and remove
    setTimeout(() => {
        messageEl.style.transform = 'translateX(100%)';
        messageEl.style.opacity = '0';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 3000);
}

// Initialize enhanced discount codes system
document.addEventListener('DOMContentLoaded', () => {
    // Wait a bit to ensure other systems are initialized first
    setTimeout(() => {
        if (document.querySelector('.discount-codes-system')) {
            EnhancedDiscountSystem.init();
        }
    }, 100);
});
