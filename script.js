document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileBtn && navMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking a link
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Reveal Animations using Intersection Observer
    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // Check if element has a delay
                const delay = entry.target.style.getPropertyValue('--delay');
                if (delay) {
                    entry.target.style.transitionDelay = delay;
                }
                
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Parallax effect for the background blobs
    const backgroundEffects = document.querySelector('.background-effects');
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        if (backgroundEffects) {
            // Very subtle move
            backgroundEffects.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
    // Scrolling Testimonials Logic
    const testimonialsData = [
        {
            text: "Growthpilot1 transformed our online presence. The 3D website they built is not just beautiful, it's a lead-generating machine. Our conversion rate jumped by 40% in the first month.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
            name: "Briana Patton",
            role: "E-commerce Founder"
        },
        {
            text: "The AI Voice Agent they implemented handles all our after-hours calls perfectly. It's like having a top-tier sales rep working 24/7. Our appointment rate has tripled.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
            name: "Bilal Ahmed",
            role: "Real Estate Director"
        },
        {
            text: "Their Meta Ads strategy is laser-focused. We've seen a 4.5x ROAS and a massive drop in our Customer Acquisition Cost. They don't just run ads; they engineer growth.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
            name: "Saman Malik",
            role: "SaaS Marketing Head"
        },
        {
            text: "If you want a website that actually stands out, go with Growthpilot1. Their interactive 3D elements are mind-blowing. Our users spend 3x more time on our site now.",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
            name: "Omar Raza",
            role: "Tech Startup CEO"
        },
        {
            text: "Professional, data-driven, and incredibly fast. They delivered a custom AI solution that streamlined our lead qualification process entirely. Highly recommend.",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
            name: "Zainab Hussain",
            role: "Project Manager"
        },
        {
            text: "Working with them was the best decision for our brand. They understand performance marketing better than any agency we've used before. Our ROI is at an all-time high.",
            image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
            name: "Aliza Khan",
            role: "D2C Brand Owner"
        },
        {
            text: "The level of technical expertise they bring is insane. From high-performance web dev to complex AI integrations, they handled everything flawlessly.",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
            name: "Farhan Siddiqui",
            role: "CTO"
        },
        {
            text: "They don't just build websites; they build business engines. Our new platform is faster, sleeker, and most importantly, it converts like crazy.",
            image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&q=80",
            name: "Sana Sheikh",
            role: "Retail Chain Manager"
        },
        {
            text: "The automated lead nurturing systems they set up saved our team hundreds of hours. We're now closing deals faster than ever before.",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80",
            name: "Hassan Ali",
            role: "Consultancy Partner"
        }
    ];

    const col1 = document.getElementById('testimonial-col-1');
    const col2 = document.getElementById('testimonial-col-2');
    const col3 = document.getElementById('testimonial-col-3');

    if (col1 && col2 && col3) {
        const createCardHTML = (t) => `
            <div class="scrolling-testi-card">
                <div class="testi-card-text">${t.text}</div>
                <div class="testi-card-author">
                    <img src="${t.image}" alt="${t.name}">
                    <div class="testi-card-info">
                        <div class="testi-card-name">${t.name}</div>
                        <div class="testi-card-role">${t.role}</div>
                    </div>
                </div>
            </div>
        `;

        // Split into 3 columns
        const split1 = testimonialsData.slice(0, 3);
        const split2 = testimonialsData.slice(3, 6);
        const split3 = testimonialsData.slice(6, 9);

        const populateCol = (col, data) => {
            // We duplicate the array to allow infinite seamless scrolling
            const html = [...data, ...data].map(createCardHTML).join('');
            col.innerHTML = html;
        };

        populateCol(col1, split1);
        populateCol(col2, split2);
        populateCol(col3, split3);
    }
});
