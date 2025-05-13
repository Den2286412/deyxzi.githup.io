export function renderFeatures(container) {
  if (!container) return;
  
  const featuresData = [
    {
      id: 'survival',
      title: 'Survival Basics',
      description: 'Essential skills for staying alive in the harsh world of DayZ when playing offline.',
      icon: '🔥',
      details: `
        <h4>Key Survival Tips</h4>
        <ul>
          <li>Find food and water immediately after spawning</li>
          <li>Learn to hunt and cook meat safely</li>
          <li>Avoid zombies when possible to conserve resources</li>
          <li>Manage your inventory efficiently</li>
          <li>Treat injuries and illnesses promptly</li>
        </ul>
        <h4>Recommended Gear</h4>
        <p>Prioritize finding a backpack, knife, water bottle, and matches early in your gameplay.</p>
      `
    },
    {
      id: 'base',
      title: 'Base Building',
      description: 'Establish a secure shelter to protect yourself and your resources in the offline world.',
      icon: '🏠',
      details: `
        <h4>Base Building Essentials</h4>
        <ul>
          <li>Choose locations away from common spawn points</li>
          <li>Gather tools: hammer, nails, saw, and shovel</li>
          <li>Start with a simple fence and expand gradually</li>
          <li>Create storage for organizing your items</li>
          <li>Set up rainwater collection systems</li>
        </ul>
        <h4>Security Tips</h4>
        <p>Even in offline mode, securing your base with multiple layers of walls and locks is important for immersion.</p>
      `
    },
    {
      id: 'crafting',
      title: 'Crafting Guide',
      description: 'Learn to create essential tools and items from basic materials found throughout Chernarus.',
      icon: '⚒️',
      details: `
        <h4>Basic Crafting Recipes</h4>
        <ul>
          <li>Improvised backpack: burlap sack + rope</li>
          <li>Hand drill kit: stick + bark</li>
          <li>Fishing rod: long stick + rope + hook</li>
          <li>Bone knife: bone + stone</li>
          <li>Leather clothes: animal pelts + garden lime</li>
        </ul>
        <h4>Advanced Crafting</h4>
        <p>Focus on creating a full set of leather clothing for best insulation against the cold.</p>
      `
    },
    {
      id: 'hunting',
      title: 'Hunting & Fishing',
      description: 'Sustainable food sources for long-term survival in your offline adventures.',
      icon: '🏹',
      details: `
        <h4>Hunting Techniques</h4>
        <ul>
          <li>Track animal footprints for efficient hunting</li>
          <li>Use a bow for silent kills that won't attract zombies</li>
          <li>Learn to quarter animals to maximize meat collection</li>
          <li>Cook all meat thoroughly to avoid illness</li>
          <li>Store extra meat by smoking or drying it</li>
        </ul>
        <h4>Fishing Tips</h4>
        <p>Fishing provides a reliable food source with minimal risk. Craft a fishing rod and dig for worms near water sources.</p>
      `
    },
    {
      id: 'medical',
      title: 'Medical Care',
      description: 'Treat injuries and illnesses to maintain your health in the apocalypse.',
      icon: '🩹',
      details: `
        <h4>Common Medical Issues</h4>
        <ul>
          <li>Blood loss: Use bandages or rags to stop bleeding</li>
          <li>Broken bones: Craft splints from sticks and rags</li>
          <li>Illness: Tetracycline antibiotics for most diseases</li>
          <li>Disinfection: Use alcohol tincture on wounds</li>
          <li>Blood transfusion: For severe blood loss (need matching blood type)</li>
        </ul>
        <h4>Prevention</h4>
        <p>Stay warm, dry, and well-fed to maintain a strong immune system and prevent illness.</p>
      `
    },
    {
      id: 'navigation',
      title: 'Navigation',
      description: 'Find your way around Chernarus without online maps or guides.',
      icon: '🧭',
      details: `
        <h4>Orientation Basics</h4>
        <ul>
          <li>The sun rises in the east and sets in the west</li>
          <li>Follow the coast to find major cities</li>
          <li>Look for landmarks like radio towers and mountains</li>
          <li>Learn to read in-game maps and road signs</li>
          <li>Use a compass whenever possible</li>
        </ul>
        <h4>Important Locations</h4>
        <p>Military bases offer the best loot but are dangerous. Towns like Elektro and Cherno have good civilian loot.</p>
      `
    }
  ];
  
  container.innerHTML = `
    <div class="features-container">
      <div class="section-header">
        <h2>Survival Guide</h2>
        <p>Essential knowledge for thriving in DayZ offline mode</p>
      </div>
      <div class="features-grid">
        ${featuresData.map(feature => `
          <div class="feature-card" id="${feature.id}">
            <div class="feature-icon">${feature.icon}</div>
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
            <button class="feature-btn" data-id="${feature.id}">Learn more</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
  
  // Add event listeners to feature buttons
  const featureButtons = container.querySelectorAll('.feature-btn');
  featureButtons.forEach(button => {
    button.addEventListener('click', () => {
      const featureId = button.dataset.id;
      showFeatureDetails(featureId, featuresData);
    });
  });
  
  // Function to show feature details
  function showFeatureDetails(featureId, featuresData) {
    const feature = featuresData.find(f => f.id === featureId);
    if (!feature) return;
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <div class="modal-header">
          <h3>${feature.title}</h3>
          <button class="modal-close">&times;</button>
        </div>
        <div class="modal-body">
          <div class="feature-icon large">${feature.icon}</div>
          <p>${feature.description}</p>
          ${feature.details}
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