// main.js - Consolidated and organized version

// ===== GLOBAL VARIABLES =====
const currentYear = new Date().getFullYear();

// ===== UTILITY FUNCTIONS =====
function debounce(func, wait = 100) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}

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



// ===== CORE FUNCTIONALITY =====

// 1. MOBILE NAVIGATION
function setupMobileNavigation() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links li');

  if (!hamburger || !navLinks) return;

  // Click handler for hamburger
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('toggle');
    
    // Animate links
    links.forEach(link => {
      link.classList.toggle('fade');
    });
  });

  // Close menu when link is clicked
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('toggle');
    });
  });

  // Alternative toggle function (if needed)
  window.toggleMenu = function() {
    const nav = document.getElementById("navLinks");
    if (nav) nav.classList.toggle("active");
  };
}

// 2. SMOOTH SCROLLING
function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// 3. STICKY NAVIGATION
function setupStickyNavigation() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  function updateStickyNav() {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  }

  window.addEventListener('scroll', debounce(updateStickyNav));
  updateStickyNav(); // Initialize on load
}

// 4. VIDEO HANDLING
function setupVideoModals() {
  const videoItems = document.querySelectorAll('.video-item iframe');
  
  videoItems.forEach(video => {
    video.addEventListener('click', () => {
      // Try fullscreen first, fallback to modal if needed
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
      }
      // Add modal implementation here if needed
    });
  });
}

