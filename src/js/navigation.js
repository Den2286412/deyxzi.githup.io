// Navigation functionality for DayZ Offline Website

// Initialize navigation
function initNavigation() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('.nav-links a');
  
  // Add event listeners to navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Get the target section ID from the href attribute
      const targetId = link.getAttribute('href').substring(1);
      
      // Navigate to the section
      navigateToSection(targetId);
    });
  });
  
  // Set initial active section based on URL hash or default to home
  const initialSectionId = window.location.hash ? window.location.hash.substring(1) : 'home';
  navigateToSection(initialSectionId);
  
  // Add event listener for browser navigation
  window.addEventListener('popstate', () => {
    const sectionId = window.location.hash ? window.location.hash.substring(1) : 'home';
    navigateToSection(sectionId, false);
  });
}

// Navigate to section
function navigateToSection(sectionId, updateHistory = true) {
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
    
    // Update browser history
    if (updateHistory) {
      history.pushState(null, null, `#${sectionId}`);
    }
    
    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Show section transition notification
    const sectionName = targetSection.querySelector('.section-title').textContent;
    showNotification(`Navigated to ${sectionName}`);
  }
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  
  notificationMessage.textContent = message;
  notification.classList.add('show');
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Export functions
export { initNavigation, navigateToSection };