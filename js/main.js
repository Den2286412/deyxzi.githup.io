// Main JavaScript File for DayZ Website

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const header = document.getElementById('main-header');
const dropdowns = document.querySelectorAll('.dropdown');

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollEvents();
  initTabs();
  initFaqItems();
});

// Navigation Functions
function initNavigation() {
  // Mobile Menu Toggle
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('open');
      navMenu.classList.toggle('open');
      document.body.classList.toggle('nav-open');
    });
  }

  // Mobile Dropdown Handling
  if (window.innerWidth <= 768) {
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      
      toggle.addEventListener('click', (e) => {
        e.preventDefault();
        dropdown.classList.toggle('active');
      });
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      const isClickInside = navToggle.contains(e.target) || navMenu.contains(e.target);
      
      if (!isClickInside) {
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.classList.remove('nav-open');
      }
    }
  });
}

// Scroll Events
function initScrollEvents() {
  // Header Scroll Effect
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Smooth Scroll for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href !== '#' && href !== '') {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

// Tabs Functionality
function initTabs() {
  document.querySelectorAll('.tabs-nav').forEach(tabsNav => {
    const tabButtons = tabsNav.querySelectorAll('.tab-btn');
    const tabContents = tabsNav.parentElement.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        const activeContent = document.getElementById(tabId);
        
        if (activeContent) {
          activeContent.classList.add('active');
        }
      });
    });
  });
}

// FAQ Accordion
function initFaqItems() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    if (question && answer && toggle) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
        
        if (item.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          toggle.textContent = '-';
        } else {
          answer.style.maxHeight = '0';
          toggle.textContent = '+';
        }
      });
    }
  });
}

// Utility Functions
function animateElement(element, animationClass, delay = 0) {
  setTimeout(() => {
    element.classList.add(animationClass);
  }, delay);
}

// Preload Images
function preloadImages(sources) {
  sources.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}