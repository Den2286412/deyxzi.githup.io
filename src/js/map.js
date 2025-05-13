// Map functionality for DayZ Offline Website

// Map locations data
const mapLocations = [
  {
    id: 'cherno',
    name: 'Chernogorsk',
    type: 'city',
    description: 'A major coastal city with high loot density but also high risk from other players.',
    coordinates: { x: 35, y: 70 },
    lootRating: 4,
    dangerRating: 5,
    tips: 'Check supermarkets for food and police stations for weapons.'
  },
  {
    id: 'elektro',
    name: 'Elektrozavodsk',
    type: 'city',
    description: 'Another coastal city popular with fresh spawns. Good for basic supplies.',
    coordinates: { x: 65, y: 75 },
    lootRating: 4,
    dangerRating: 4,
    tips: 'Watch for snipers on the hills overlooking the city.'
  },
  {
    id: 'nwaf',
    name: 'Northwest Airfield',
    type: 'military',
    description: 'Military airfield with high-tier loot and extremely dangerous player encounters.',
    coordinates: { x: 25, y: 25 },
    lootRating: 5,
    dangerRating: 5,
    tips: 'Approach with extreme caution. Scout before entering.'
  },
  {
    id: 'tisy',
    name: 'Tisy Military Base',
    type: 'military',
    description: 'Remote military base with top-tier equipment.',
    coordinates: { x: 15, y: 15 },
    lootRating: 5,
    dangerRating: 4,
    tips: 'Check the underground bunkers for rare weapons and attachments.'
  },
  {
    id: 'berezino',
    name: 'Berezino',
    type: 'city',
    description: 'Large city on the east coast with a hospital and police station.',
    coordinates: { x: 85, y: 45 },
    lootRating: 3,
    dangerRating: 3,
    tips: 'The hospital is a good place to find medical supplies.'
  },
  {
    id: 'kamyshovo',
    name: 'Kamyshovo',
    type: 'water',
    description: 'Small coastal town with a water pump.',
    coordinates: { x: 75, y: 85 },
    lootRating: 2,
    dangerRating: 3,
    tips: 'The water pump is safe to drink from without purification.'
  },
  {
    id: 'severograd',
    name: 'Severograd',
    type: 'city',
    description: 'Large northern city with residential and industrial areas.',
    coordinates: { x: 45, y: 15 },
    lootRating: 3,
    dangerRating: 2,
    tips: 'Less frequented than coastal cities, good for mid-game looting.'
  },
  {
    id: 'chernayaPolana',
    name: 'Chernaya Polana Hospital',
    type: 'medical',
    description: 'Small town with a hospital in the northeast.',
    coordinates: { x: 80, y: 20 },
    lootRating: 3,
    dangerRating: 2,
    tips: 'One of the best places to find medical supplies outside major cities.'
  }
];

// Initialize map
function initMap() {
  const map = document.getElementById('interactive-map');
  const locationInfo = document.getElementById('location-info');
  
  // Create markers for each location
  mapLocations.forEach(location => {
    createMapMarker(location, map, locationInfo);
  });
}

// Create map marker
function createMapMarker(location, map, locationInfo) {
  // Create marker element
  const marker = document.createElement('div');
  marker.className = `map-marker ${location.type}`;
  
  // Set marker position
  marker.style.left = `${location.coordinates.x}%`;
  marker.style.top = `${location.coordinates.y}%`;
  
  // Add marker attributes
  marker.setAttribute('data-location-id', location.id);
  marker.title = location.name;
  
  // Add event listener to marker
  marker.addEventListener('click', () => {
    // Update location info
    updateLocationInfo(location, locationInfo);
    
    // Remove active class from all markers
    document.querySelectorAll('.map-marker').forEach(m => {
      m.classList.remove('active', 'pulsing');
    });
    
    // Add active class to clicked marker
    marker.classList.add('active', 'pulsing');
    
    // Play click sound
    playClickSound();
    
    // Show notification
    showNotification(`Selected ${location.name}`);
  });
  
  // Add marker to map
  map.appendChild(marker);
}

// Update location info
function updateLocationInfo(location, locationInfo) {
  // Create rating stars
  const lootStars = createRatingStars(location.lootRating);
  const dangerStars = createRatingStars(location.dangerRating);
  
  // Update location info HTML
  locationInfo.innerHTML = `
    <h3>${location.name}</h3>
    <p>${location.description}</p>
    <div class="location-ratings">
      <div class="rating">
        <span class="rating-label">Loot:</span>
        <span class="rating-stars">${lootStars}</span>
      </div>
      <div class="rating">
        <span class="rating-label">Danger:</span>
        <span class="rating-stars">${dangerStars}</span>
      </div>
    </div>
    <div class="location-tip">
      <h4>Survivor Tip:</h4>
      <p>${location.tips}</p>
    </div>
  `;
}

// Create rating stars
function createRatingStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '★';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

// Play click sound
function playClickSound() {
  // This function is imported from audio.js
  // Implementation is handled by the audio module
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
export { initMap };