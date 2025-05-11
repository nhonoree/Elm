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

// this is for typing effect of Elmshaven choir
// this is for typing effect of Elmshaven choir
document.addEventListener('DOMContentLoaded', function () {
    const text = "Welcome to Elmshaven Choir";
    const typingSpeed = 100; // typing speed in milliseconds
    const pauseTime = 2000; // pause time after finishing typing
    let index = 0;
    let typingElement = document.getElementById('typewriter-text');
  
    function typeText() {
        // Clear the text before starting if there's any previous text
        typingElement.innerText = '';
        index = 0; // Reset index so typing starts from the beginning
  
        // Function to type the text one character at a time
        function typeNextChar() {
            if (index < text.length) {
                typingElement.innerText += text.charAt(index);
                index++;
                setTimeout(typeNextChar, typingSpeed); // Continue typing
            } else {
                // After typing is complete, wait for a pause before restarting
                setTimeout(typeText, pauseTime); // Restart typing after pause
            }
        }
  
        typeNextChar(); // Start the typing effect
    }
  
    typeText(); // Call the function once to start typing when the page loads
  });
  
// Close mobile nav when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('toggle');
    });
});
<script>
    function toggleMenu() {
        const nav = document.getElementById("navLinks");
        nav.classList.toggle("active");
    }
</script>

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
// Highlight current page link
document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.href === window.location.href) {
        link.classList.add('active');
    }
});