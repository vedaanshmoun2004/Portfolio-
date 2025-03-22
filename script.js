// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Navbar scroll effect
const nav = document.querySelector('nav');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        nav.classList.remove('scroll-up');
    }
    
    if (currentScroll > lastScroll && !nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-up');
        nav.classList.add('scroll-down');
    }
    
    if (currentScroll < lastScroll && nav.classList.contains('scroll-down')) {
        nav.classList.remove('scroll-down');
        nav.classList.add('scroll-up');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Projects data
const projects = [
    {
        title: 'iOS Social App',
        description: 'A modern social networking app built with Swift and SwiftUI',
        tags: ['Swift', 'SwiftUI', 'Firebase']
    },
    {
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with real-time updates',
        tags: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'Task Management App',
        description: 'iOS productivity app with cloud sync',
        tags: ['Swift', 'Core Data', 'CloudKit']
    }
];

// Dynamically create project cards
const projectsGrid = document.querySelector('.projects-grid');
projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.innerHTML = `
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    projectsGrid.appendChild(projectCard);
});

// GSAP Animations
// Hero section animations
gsap.from('.glitch', {
    duration: 1,
    y: 100,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.5
});

gsap.from('.title', {
    duration: 1,
    y: 50,
    opacity: 0,
    ease: 'power4.out',
    delay: 0.8
});

// Scroll animations
gsap.utils.toArray('.skill-category').forEach(category => {
    gsap.from(category, {
        scrollTrigger: {
            trigger: category,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power4.out'
    });
});

gsap.utils.toArray('.project-card').forEach((card, i) => {
    gsap.from(card, {
        scrollTrigger: {
            trigger: card,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 100,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power4.out'
    });
});

// Contact form animations
const contactElements = document.querySelectorAll('.contact-content > *');
contactElements.forEach((element, i) => {
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse'
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: i * 0.2,
        ease: 'power4.out'
    });
});

// Form handling
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Message sent successfully!');
    contactForm.reset();
}); 