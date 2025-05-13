// Weapons Page Specific JavaScript

document.addEventListener('DOMContentLoaded', () => {
  initWeaponsFilter();
  initCombatTabs();
  animateWeaponCards();
});

// Weapons Category Filter
function initWeaponsFilter() {
  const categoryButtons = document.querySelectorAll('.weapons-categories .category-btn');
  const weaponCards = document.querySelectorAll('.weapon-card');
  
  if (categoryButtons.length && weaponCards.length) {
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Remove active class from all buttons
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // Get selected category
        const selectedCategory = button.getAttribute('data-category');
        
        // Filter weapon cards
        weaponCards.forEach(card => {
          const cardCategory = card.getAttribute('data-category');
          
          if (selectedCategory === 'all' || selectedCategory === cardCategory) {
            // Show card with animation
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 50);
          } else {
            // Hide card with animation
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
}

// Combat Strategy Tabs
function initCombatTabs() {
  const tabsContainer = document.querySelector('.combat-tabs');
  
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

// Animate Weapon Cards on Scroll
function animateWeaponCards() {
  const weaponCards = document.querySelectorAll('.weapon-card');
  
  if (weaponCards.length) {
    // Set initial state for all weapon cards
    weaponCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Create intersection observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Staggered animation for each card
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          
          // Unobserve after animation
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
    
    // Observe each weapon card
    weaponCards.forEach(card => {
      observer.observe(card);
    });
  }
}

// Weapon Attachment Cards Animation
document.addEventListener('DOMContentLoaded', () => {
  const attachmentCards = document.querySelectorAll('.attachment-card');
  
  if (attachmentCards.length) {
    attachmentCards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * 100);
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    
    attachmentCards.forEach(card => {
      observer.observe(card);
    });
  }
});

// Ammo Table Animation
document.addEventListener('DOMContentLoaded', () => {
  const ammoTable = document.querySelector('.ammo-table');
  
  if (ammoTable) {
    // Set initial state
    ammoTable.style.opacity = '0';
    ammoTable.style.transform = 'translateY(20px)';
    ammoTable.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          
          // Animate table rows
          const rows = entry.target.querySelectorAll('tbody tr');
          rows.forEach((row, index) => {
            row.style.opacity = '0';
            row.style.transform = 'translateX(-10px)';
            row.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            
            setTimeout(() => {
              row.style.opacity = '1';
              row.style.transform = 'translateX(0)';
            }, 100 + (index * 50));
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.3
    });
    
    observer.observe(ammoTable);
  }
});

// Parallax effect for page banner
window.addEventListener('scroll', () => {
  const banner = document.getElementById('weapons-banner');
  
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

// Weapon Info Hover Effect
document.addEventListener('DOMContentLoaded', () => {
  const weaponCards = document.querySelectorAll('.weapon-card');
  
  weaponCards.forEach(card => {
    const image = card.querySelector('.weapon-image');
    const info = card.querySelector('.weapon-info');
    
    if (image && info) {
      card.addEventListener('mouseenter', () => {
        info.style.transform = 'translateY(-10px)';
      });
      
      card.addEventListener('mouseleave', () => {
        info.style.transform = 'translateY(0)';
      });
    }
  });
});