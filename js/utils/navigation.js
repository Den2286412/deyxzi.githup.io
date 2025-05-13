// Smooth scroll to the target section
export function navigateTo(targetId) {
  const targetSection = document.getElementById(targetId);
  if (!targetSection) return;
  
  const headerHeight = document.querySelector('#main-header').offsetHeight;
  const targetPosition = targetSection.offsetTop - headerHeight;
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth'
  });
  
  // Update URL hash without scrolling (prevents double scroll)
  history.pushState(null, null, `#${targetId}`);
  
  // Highlight the current section in the navigation
  updateActiveNavLink(targetId);
}

// Update the active navigation link
export function updateActiveNavLink(targetId) {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    if (link.dataset.target === targetId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Setup scroll spy to highlight the current section in navigation
export function initScrollSpy() {
  const sections = document.querySelectorAll('main > section');
  const headerHeight = document.querySelector('#main-header').offsetHeight;
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - headerHeight - 50; // 50px offset for better UX
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    if (current) {
      updateActiveNavLink(current);
      
      // Update URL hash without scrolling
      if (history.replaceState) {
        history.replaceState(null, null, `#${current}`);
      }
    }
  });
}