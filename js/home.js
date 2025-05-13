// Home Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initHeroParallax();
  initFeatureCards();
  animateStatistics();
});

// Parallax Effect for Hero Section
function initHeroParallax() {
  const hero = document.querySelector('.hero');
  
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      const heroHeight = hero.offsetHeight;
      
      // Only apply parallax if user is within the hero section
      if (scrollY <= heroHeight) {
        // Adjust the background position based on scroll
        const yPos = scrollY * 0.5;
        hero.style.backgroundPosition = `center calc(50% + ${yPos}px)`;
      }
    });
  }
}

// Feature Cards Animation
function initFeatureCards() {
  const featureCards = document.querySelectorAll('.feature-card');
  
  if (featureCards.length) {
    // Detect when cards enter viewport
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Add animation with staggered delay
          setTimeout(() => {
            entry.target.classList.add('animated');
          }, index * 150);
          
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2 // Trigger when 20% of the element is visible
    });
    
    // Observe each feature card
    featureCards.forEach(card => {
      observer.observe(card);
      
      // Add hover effects
      card.addEventListener('mouseenter', () => {
        card.classList.add('hovered');
      });
      
      card.addEventListener('mouseleave', () => {
        card.classList.remove('hovered');
      });
    });
  }
}

// Animate Statistics Counter
function animateStatistics() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  if (statNumbers.length) {
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start counter animation when stats are visible
          const statElement = entry.target;
          const targetValue = parseFloat(statElement.textContent.replace(/[^0-9.]/g, ''));
          const suffix = statElement.textContent.replace(/[0-9.]/g, '');
          const duration = 2000; // Animation duration in milliseconds
          const framesPerSecond = 60;
          const totalFrames = duration / 1000 * framesPerSecond;
          let currentFrame = 0;
          let currentValue = 0;
          
          // Clear any existing content
          statElement.textContent = '0';
          
          // Start animation
          const counterAnimation = setInterval(() => {
            currentFrame++;
            
            // Calculate current value based on easing function
            const progress = currentFrame / totalFrames;
            const easedProgress = easeOutCubic(progress);
            currentValue = targetValue * easedProgress;
            
            // Update element text
            statElement.textContent = formatNumber(currentValue) + suffix;
            
            // Stop animation when complete
            if (currentFrame >= totalFrames) {
              clearInterval(counterAnimation);
              statElement.textContent = formatNumber(targetValue) + suffix;
            }
          }, 1000 / framesPerSecond);
          
          // Unobserve after animation starts
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.7 // Trigger when 70% of the element is visible
    });
    
    // Observe each stat number
    statNumbers.forEach(stat => {
      observer.observe(stat);
    });
  }
}

// Utility Functions
function easeOutCubic(x) {
  // Cubic easing function: acceleration until halfway, then deceleration
  return 1 - Math.pow(1 - x, 3);
}

function formatNumber(num) {
  // Format number with commas or simplify large numbers
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  } else if (num >= 1000) {
    return (num / 1000).toFixed(0) + 'K';
  } else {
    return Math.round(num).toString();
  }
}

// Update news section with latest content
function updateLatestNews() {
  const newsContainer = document.querySelector('.updates-container');
  
  if (newsContainer) {
    // This would typically fetch from an API, but for this static site
    // we're just adding some animation effects
    const newsCards = newsContainer.querySelectorAll('.update-card');
    
    newsCards.forEach((card, index) => {
      // Add staggered fade-in animation
      setTimeout(() => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
          card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      }, index * 200);
    });
  }
}