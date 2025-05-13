import { toggleTheme } from '../utils/theme.js';
import { navigateTo } from '../utils/navigation.js';

export function renderHeader(container) {
  if (!container) return;
  
  container.innerHTML = `
    <div class="header-container">
      <div class="logo">
        <img src="./assets/logo.svg" alt="Days Without Internet Logo" />
        <h1>Days Without Internet</h1>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#hero" class="nav-link active" data-target="hero">Home</a></li>
          <li><a href="#features" class="nav-link" data-target="features">Activities</a></li>
          <li><a href="#tracker" class="nav-link" data-target="tracker">Tracker</a></li>
          <li><a href="#resources" class="nav-link" data-target="resources">Resources</a></li>
        </ul>
      </nav>
      <div class="theme-toggle">
        <button id="theme-toggle-btn" aria-label="Toggle dark mode">
          <svg class="sun-icon" viewBox="0 0 24 24">
            <path d="M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5S14.76,7,12,7L12,7z M2,13h2c0.55,0,1-0.45,1-1s-0.45-1-1-1H2 c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13h2c0.55,0,1-0.45,1-1s-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2 c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1 S11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0 s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06 c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41 c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36 c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path>
          </svg>
          <svg class="moon-icon" viewBox="0 0 24 24">
            <path d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path>
          </svg>
        </button>
      </div>
      <div class="mobile-menu-toggle">
        <button id="mobile-menu-btn" aria-label="Toggle navigation menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  `;
  
  // Add event listeners
  container.querySelector('#theme-toggle-btn').addEventListener('click', toggleTheme);
  
  const mobileMenuBtn = container.querySelector('#mobile-menu-btn');
  const mainNav = container.querySelector('.main-nav');
  
  mobileMenuBtn.addEventListener('click', () => {
    mainNav.classList.toggle('open');
    mobileMenuBtn.classList.toggle('open');
  });
  
  // Add navigation event listeners
  const navLinks = container.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Remove active class from all links
      navLinks.forEach(link => link.classList.remove('active'));
      
      // Add active class to clicked link
      link.classList.add('active');
      
      // Close mobile menu if open
      mainNav.classList.remove('open');
      mobileMenuBtn.classList.remove('open');
      
      // Navigate to section
      navigateTo(link.dataset.target);
    });
  });
}