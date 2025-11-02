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