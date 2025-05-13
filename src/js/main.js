// Main JavaScript file for DayZ Offline Website

// Import modules
import { initThemeToggle } from './theme.js';
import { initAudio } from './audio.js';
import { initNavigation } from './navigation.js';
import { initMap } from './map.js';
import { showNotification } from './notifications.js';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize loading screen
  initLoadingScreen();
  
  // Initialize components
  initThemeToggle();
  initAudio();
  initNavigation();
  initMap();
  
  // Add event listeners to CTA buttons
  document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', (e) => {
      const targetSection = e.target.getAttribute('data-section');
      if (targetSection) {
        navigateToSection(targetSection);
      }
    });
  });
  
  // Show welcome notification
  setTimeout(() => {
    showNotification('Welcome to the DayZ Survival Guide! Toggle day/night mode with the button in the top right.');
  }, 2000);
});

// Initialize loading screen
function initLoadingScreen() {
  const loadingScreen = document.querySelector('.loading-screen');
  const progressBar = document.querySelector('.loading-progress');
  
  // Simulate loading progress
  let progress = 0;
  const interval = setInterval(() => {
    progress += 1;
    progressBar.style.width = `${progress}%`;
    
    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loadingScreen.classList.add('hidden');
      }, 500);
    }
  }, 30);
}

// Navigate to section
function navigateToSection(sectionId) {
  // Get all sections
  const sections = document.querySelectorAll('.section');
  
  // Remove active class from all sections
  sections.forEach(section => {
    section.classList.remove('active');
  });
  
  // Add active class to target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
    
    // Update active navigation link
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${sectionId}`) {
        link.classList.add('active');
      }
    });
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// Export functions
export { navigateToSection };