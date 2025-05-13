export function renderFooter(container) {
  if (!container) return;
  
  const currentYear = new Date().getFullYear();
  
  container.innerHTML = `
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section footer-logo">
          <img src="./assets/logo.svg" alt="DayZ Offline Logo" class="footer-logo-img">
          <h3>DayZ Offline Guide</h3>
          <p>Your comprehensive resource for playing DayZ without internet</p>
        </div>
        
        <div class="footer-section footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#hero" class="footer-link" data-target="hero">Home</a></li>
            <li><a href="#features" class="footer-link" data-target="features">Survival Guide</a></li>
            <li><a href="#tracker" class="footer-link" data-target="tracker">Day Tracker</a></li>
            <li><a href="#resources" class="footer-link" data-target="resources">Resources</a></li>
          </ul>
        </div>
        
        <div class="footer-section footer-topics">
          <h4>Survival Topics</h4>
          <ul>
            <li><a href="#" class="topic-link" data-topic="food">Food & Water</a></li>
            <li><a href="#" class="topic-link" data-topic="shelter">Shelter Building</a></li>
            <li><a href="#" class="topic-link" data-topic="zombies">Infected Combat</a></li>
            <li><a href="#" class="topic-link" data-topic="gear">Gear Guide</a></li>
          </ul>
        </div>
      </div>
      
      <div class="footer-disclaimer">
        <p>This is an unofficial guide created by fans for educational purposes only.</p>
        <p>DayZ is a trademark of Bohemia Interactive. This site is not affiliated with Bohemia Interactive.</p>
        <p>&copy; ${currentYear} DayZ Offline Guide. All rights reserved.</p>
      </div>
    </div>
  `;
  
  // Add event listeners for navigation
  const footerLinks = container.querySelectorAll('.footer-link');
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.dataset.target;
      document.querySelector(`a[data-target="${target}"]`).click();
    });
  });
  
  // Add event listeners for topic links
  const topicLinks = container.querySelectorAll('.topic-link');
  topicLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = link.dataset.topic;
      
      // Show the information for the selected topic
      showTopicInfo(topic);
    });
  });
  
  // Function to show topic information in a modal
  function showTopicInfo(topic) {
    const topicData = {
      food: {
        title: 'Food & Water Guide',
        content: `
          <h4>Finding Food</h4>
          <ul>
            <li>Check houses for canned food and fruit</li>
            <li>Hunt animals: deer, chicken, cows, and pigs</li>
            <li>Fish in ponds and ocean with crafted fishing rod</li>
            <li>Forage for apples, pears, mushrooms, and berries</li>
          </ul>
          <h4>Water Sources</h4>
          <ul>
            <li>Wells in towns are the safest water source</li>
            <li>Purify pond and river water with chlorine tablets</li>
            <li>Collect rainwater with containers</li>
          </ul>
        `
      },
      shelter: {
        title: 'Shelter Building Guide',
        content: `
          <h4>Temporary Shelters</h4>
          <ul>
            <li>Existing buildings are the easiest shelter option</li>
            <li>Improvised shelters using tarps and sticks</li>
            <li>Underground stashes for secure storage</li>
          </ul>
          <h4>Permanent Base Building</h4>
          <ul>
            <li>Gather tools: hammer, nails, saw, shovel</li>
            <li>Choose a hidden, defensible location</li>
            <li>Fence perimeter first for security</li>
            <li>Add watchtowers for better visibility</li>
            <li>Create multiple locked areas for valuable storage</li>
          </ul>
        `
      },
      zombies: {
        title: 'Infected Combat Guide',
        content: `
          <h4>Avoiding Zombies</h4>
          <ul>
            <li>Crouch-walk to reduce noise</li>
            <li>Maintain distance from zombie clusters</li>
            <li>Use buildings and obstacles to break line of sight</li>
            <li>Throw items to distract zombies</li>
          </ul>
          <h4>Fighting Zombies</h4>
          <ul>
            <li>Aim for headshots with ranged weapons</li>
            <li>Use doorways to fight one zombie at a time</li>
            <li>Heavy melee weapons (sledgehammer, axe) can one-hit kill</li>
            <li>Back up between strikes to avoid counterattacks</li>
          </ul>
        `
      },
      gear: {
        title: 'Essential Gear Guide',
        content: `
          <h4>Starting Gear Priority</h4>
          <ol>
            <li>Knife (hunting, kitchen, or improvised)</li>
            <li>Water container (bottle or canteen)</li>
            <li>Backpack for increased inventory</li>
            <li>Medical supplies (bandages, disinfectant)</li>
            <li>Reliable melee weapon (axe, crowbar)</li>
          </ol>
          <h4>Mid-Game Gear</h4>
          <ul>
            <li>Firearm with ammunition</li>
            <li>Cooking pot for better food preparation</li>
            <li>Hunting scope for spotting animals/threats</li>
            <li>Protective clothing (military, hunting)</li>
            <li>Navigation tools (compass, map)</li>
          </ul>
        `
      }
    };
    
    const selectedTopic = topicData[topic];
    if (!selectedTopic) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${selectedTopic.title}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          ${selectedTopic.content}
        </div>
      </div>
    `;
    
    document.body.appendChild(modal);
    
    // Prevent scrolling on the body when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add event listener to close button
    modal.querySelector('.modal-close').addEventListener('click', () => {
      document.body.removeChild(modal);
      document.body.style.overflow = '';
    });
    
    // Close modal when clicking outside of modal content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
      }
    });
  }
}