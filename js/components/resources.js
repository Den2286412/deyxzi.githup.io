export function renderResources(container) {
  if (!container) return;
  
  const resourcesData = [
    {
      id: 'maps',
      title: 'Offline Maps',
      description: 'Detailed maps of Chernarus to help you navigate without online guides.',
      icon: '🗺️',
      content: `
        <div class="resource-section">
          <h4>Chernarus Map Guide</h4>
          <p>This comprehensive map shows all major cities, military installations, and points of interest. Use it to plan your routes and find specific locations.</p>
          <div class="map-container">
            <img src="./assets/map-placeholder.jpg" alt="Chernarus Map" class="resource-image" />
          </div>
          <p>Major landmarks:</p>
          <ul>
            <li>NWAF (Northwest Airfield) - Best military loot</li>
            <li>Tisy Military Base - End-game gear</li>
            <li>Cherno and Elektro - Coastal spawn cities</li>
            <li>Green Mountain - Central landmark</li>
            <li>Deer Isle - Alternative map (if installed)</li>
          </ul>
        </div>
      `
    },
    {
      id: 'items',
      title: 'Item Database',
      description: 'Reference guide for all important items and their uses in DayZ.',
      icon: '🎒',
      content: `
        <div class="resource-section">
          <h4>Essential Items</h4>
          <p>These items are crucial for survival and should be prioritized when looting:</p>
          
          <div class="item-table">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Category</th>
                  <th>Usage</th>
                  <th>Rarity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Knife</td>
                  <td>Tool</td>
                  <td>Skinning animals, opening cans, crafting</td>
                  <td>Common</td>
                </tr>
                <tr>
                  <td>Canteen/Bottle</td>
                  <td>Food & Water</td>
                  <td>Storing clean water</td>
                  <td>Common</td>
                </tr>
                <tr>
                  <td>Tetracycline</td>
                  <td>Medical</td>
                  <td>Curing most diseases</td>
                  <td>Uncommon</td>
                </tr>
                <tr>
                  <td>Gun Cleaning Kit</td>
                  <td>Weapon</td>
                  <td>Maintaining weapon condition</td>
                  <td>Uncommon</td>
                </tr>
                <tr>
                  <td>Chlorine Tablets</td>
                  <td>Food & Water</td>
                  <td>Purifying water</td>
                  <td>Uncommon</td>
                </tr>
                <tr>
                  <td>NVG (Night Vision)</td>
                  <td>Equipment</td>
                  <td>Night visibility</td>
                  <td>Rare</td>
                </tr>
                <tr>
                  <td>Plate Carrier</td>
                  <td>Clothing</td>
                  <td>Best torso protection</td>
                  <td>Rare</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `
    },
    {
      id: 'zombies',
      title: 'Zombie Survival',
      description: 'Tactics for dealing with infected in offline mode.',
      icon: '🧟',
      content: `
        <div class="resource-section">
          <h4>Infected Behavior Patterns</h4>
          <p>Understanding zombie behavior is key to survival in DayZ, even in offline mode.</p>
          
          <h5>Detection Methods</h5>
          <ul>
            <li><strong>Sight:</strong> Zombies have limited vision but can spot you from 50-100m in daylight if directly in their line of sight.</li>
            <li><strong>Sound:</strong> Running, gunshots, and other loud noises will attract zombies from a considerable distance.</li>
            <li><strong>Proximity:</strong> Getting too close will always alert them, regardless of stealth.</li>
          </ul>
          
          <h5>Combat Tactics</h5>
          <ul>
            <li><strong>Silent Weapons:</strong> Use knives, axes, or other melee weapons to avoid attracting more zombies.</li>
            <li><strong>Stealth Kills:</strong> Approach from behind while crouched for a one-hit kill with sharp weapons.</li>
            <li><strong>Buildings:</strong> Use doors and narrow spaces to fight zombies one at a time.</li>
            <li><strong>Hit and Run:</strong> Strike once or twice, then back up to avoid their attacks, then repeat.</li>
          </ul>
        </div>
      `
    },
    {
      id: 'mods',
      title: 'Offline Mods',
      description: 'Essential mods that enhance the offline DayZ experience.',
      icon: '🔧',
      content: `
        <div class="resource-section">
          <h4>Recommended Offline Mods</h4>
          <p>These mods significantly improve the offline DayZ experience and don't require internet after installation:</p>
          
          <ul class="mod-list">
            <li>
              <strong>DayZ Community Offline Mode</strong>
              <p>The essential mod that allows you to play DayZ without internet. Features admin tools and customizable settings.</p>
            </li>
            <li>
              <strong>CF</strong>
              <p>Community Framework required for many mods to function properly.</p>
            </li>
            <li>
              <strong>Expansion</strong>
              <p>Massive content mod adding vehicles, base building, and more features.</p>
            </li>
            <li>
              <strong>MuchStuffPack</strong>
              <p>Adds hundreds of new items, weapons, and crafting recipes.</p>
            </li>
            <li>
              <strong>Trader</strong>
              <p>Adds AI traders and a trading system, useful even in offline mode.</p>
            </li>
            <li>
              <strong>BuilderItems</strong>
              <p>Enhanced base building options with more types of structures.</p>
            </li>
          </ul>
          
          <p class="mod-note">Note: All mods must be installed while you have internet access, but will function offline thereafter.</p>
        </div>
      `
    }
  ];
  
  container.innerHTML = `
    <div class="resources-container">
      <div class="section-header">
        <h2>Offline Resources</h2>
        <p>Essential reference materials for your DayZ journey</p>
      </div>
      
      <div class="resources-tabs">
        <div class="tabs-header">
          ${resourcesData.map((resource, index) => `
            <button class="tab-btn ${index === 0 ? 'active' : ''}" data-id="${resource.id}">
              <span class="tab-icon">${resource.icon}</span>
              <span class="tab-label">${resource.title}</span>
            </button>
          `).join('')}
        </div>
        
        <div class="tabs-content">
          ${resourcesData.map((resource, index) => `
            <div class="tab-panel ${index === 0 ? 'active' : ''}" id="panel-${resource.id}">
              <h3>${resource.title}</h3>
              <p class="resource-description">${resource.description}</p>
              ${resource.content}
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners to tab buttons
  const tabButtons = container.querySelectorAll('.tab-btn');
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      container.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button and corresponding panel
      button.classList.add('active');
      const panelId = `panel-${button.dataset.id}`;
      container.querySelector(`#${panelId}`).classList.add('active');
    });
  });
}