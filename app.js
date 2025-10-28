// Project data
const projectsData = [
    {
        title: 'Modern Fireplace Lounge',
        category: 'Residential Living Room',
        description: 'Sophisticated living space featuring a modern fireplace and elegant pendant lighting.',
        image: 'https://images.unsplash.com/photo-1581784878214-8d5596b98a01?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NjE1NjM2MjB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
        title: 'Sunset Luxury Living',
        category: 'High-End Residential',
        description: 'Contemporary living room with breathtaking sunset views and premium furnishings.',
        image: 'https://images.unsplash.com/photo-1564078516393-cf04bd966897?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NjE1NjM2MjB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
        title: 'Modern Culinary Space',
        category: 'Kitchen Design',
        description: 'Sleek kitchen design with clean lines, natural light, and modern appliances.',
        image: 'https://images.unsplash.com/photo-1581783458534-001a466b5487?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NjE1NjM2MjB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
        title: 'Contemporary Haven',
        category: 'Residential Living',
        description: 'Warm contemporary living space with brown leather accents and sophisticated styling.',
        image: 'https://images.unsplash.com/photo-1599696848652-f0ff23bc911f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1NzZ8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHx8fDE3NjE1NjM2MjB8MA&ixlib=rb-4.1.0&q=85'
    },
    {
        title: 'Luxury Modern Estate',
        category: 'Premium Residential',
        description: 'Expansive luxury interior showcasing modern design principles and premium finishes.',
        image: 'https://images.pexels.com/photos/30790460/pexels-photo-30790460.jpeg'
    },
    {
        title: 'Premium Design Space',
        category: 'Contemporary Interior',
        description: 'Sophisticated interior design with attention to detail and elegant aesthetics.',
        image: 'https://images.pexels.com/photos/34454013/pexels-photo-34454013.jpeg'
    }
];

// Header scroll effect
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');

mobileMenuBtn.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Parallax effect for hero
let heroBackground = document.querySelector('.hero-bg');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (heroBackground) {
        heroBackground.style.transform = `translateY(${scrollY * 0.5}px)`;
    }
});

// Scroll animations with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all animated elements
document.querySelectorAll('.scroll-animate, .scroll-animate-scale').forEach(el => {
    observer.observe(el);
});

// Scroll to section function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Project lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxCategory = document.getElementById('lightboxCategory');
const lightboxDescription = document.getElementById('lightboxDescription');
const lightboxClose = document.querySelector('.lightbox-close');

document.querySelectorAll('.project-card').forEach((card, index) => {
    card.addEventListener('click', () => {
        const project = projectsData[index];
        lightboxImage.src = project.image;
        lightboxTitle.textContent = project.title;
        lightboxCategory.textContent = project.category;
        lightboxDescription.textContent = project.description;
        lightbox.classList.add('active');
    });
});

lightboxClose.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Close lightbox with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
    }
});

// Toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type} show`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        phone: contactForm.phone.value,
        message: contactForm.message.value,
        timestamp: new Date().toISOString()
    };
    
    // Store in localStorage
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Show success message
    showToast('Message sent successfully! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input[type="email"]').value;
    const subscriptions = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
    subscriptions.push({ email, timestamp: new Date().toISOString() });
    localStorage.setItem('newsletterSubscriptions', JSON.stringify(subscriptions));
    
    showToast('Thank you for subscribing to our newsletter!');
    newsletterForm.reset();
});

// Initial animations on page load
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});