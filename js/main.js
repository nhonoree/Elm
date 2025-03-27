// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('open');
    
    // Animate Links
    links.forEach(link => {
        link.classList.toggle('fade');
    });
    
    // Hamburger Animation
    hamburger.classList.toggle('toggle');
});

// Close mobile nav when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('toggle');
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Sticky Navigation on scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
});

// Video Modal (optional)
// You can expand this to create a lightbox for videos
const videoItems = document.querySelectorAll('.video-item iframe');

videoItems.forEach(video => {
    video.addEventListener('click', () => {
        video.requestFullscreen();
    });
});