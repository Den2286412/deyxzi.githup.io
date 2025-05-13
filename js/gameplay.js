// Gameplay Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initGameplayTabs();
  initGameMechanicsTabs();
  initFaqAccordion();
});

// Gameplay Tabs Functionality
function initGameplayTabs() {
  const tabsContainer = document.querySelector('.mechanics-tabs');
  
  if (tabsContainer) {
    const tabButtons = tabsContainer.querySelectorAll('.tab-btn');
    const tabContents = tabsContainer.querySelectorAll('.tab-content');
    
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
          // Add fade-in animation to the active content
          activeContent.style.opacity = '0';
          activeContent.classList.add('active');
          
          setTimeout(() => {
            activeContent.style.transition = 'opacity 0.3s ease';
            activeContent.style.opacity = '1';
          }, 50);
        }
      });
    });
  }
}

// Game Mechanics Tabs
function initGameMechanicsTabs() {
  const mechanicsTabsContainer = document.querySelector('.game-mechanics .mechanics-tabs');
  
  if (mechanicsTabsContainer) {
    const tabButtons = mechanicsTabsContainer.querySelectorAll('.tab-btn');
    const tabContents = mechanicsTabsContainer.querySelectorAll('.tab-content');
    
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
          // Add fade-in animation to the active content with sliding effect
          activeContent.style.opacity = '0';
          activeContent.style.transform = 'translateX(20px)';
          activeContent.classList.add('active');
          
          setTimeout(() => {
            activeContent.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            activeContent.style.opacity = '1';
            activeContent.style.transform = 'translateX(0)';
          }, 50);
        }
      });
    });
  }
}

// FAQ Accordion Functionality
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    if (question && answer && toggle) {
      // Initialize all answers as closed
      answer.style.maxHeight = '0';
      answer.style.overflow = 'hidden';
      answer.style.transition = 'max-height 0.3s ease';
      
      question.addEventListener('click', () => {
        // Toggle active class
        item.classList.toggle('active');
        
        // Update toggle icon and answer visibility
        if (item.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          toggle.textContent = '-';
        } else {
          answer.style.maxHeight = '0';
          toggle.textContent = '+';
        }
        
        // Close other open items
        faqItems.forEach(otherItem => {
          if (otherItem !== item && otherItem.classList.contains('active')) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            const otherToggle = otherItem.querySelector('.faq-toggle');
            
            if (otherAnswer && otherToggle) {
              otherAnswer.style.maxHeight = '0';
              otherToggle.textContent = '+';
            }
          }
        });
      });
    }
  });
}

// Parallax effect for page banner
window.addEventListener('scroll', () => {
  const banner = document.getElementById('gameplay-banner');
  
  if (banner) {
    const scrollPosition = window.scrollY;
    const bannerHeight = banner.offsetHeight;
    
    // Only apply parallax if user is within the banner section
    if (scrollPosition <= bannerHeight) {
      const yPos = scrollPosition * 0.4;
      banner.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
    }
  }
});

// Animate gameplay features when they come into view
document.addEventListener('DOMContentLoaded', () => {
  const features = document.querySelectorAll('.gameplay-features .feature');
  
  if (features.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 150);
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
    
    features.forEach((feature, index) => {
      // Set initial state for animation
      feature.style.opacity = '0';
      feature.style.transform = 'translateY(20px)';
      feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      
      observer.observe(feature);
    });
  }
});