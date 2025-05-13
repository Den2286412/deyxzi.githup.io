export function renderHero(container) {
  if (!container) return;
  
  container.innerHTML = `
    <div class="hero-container">
      <div class="hero-content">
        <h1 class="hero-title">Rediscover Life Without Internet</h1>
        <p class="hero-subtitle">A guide to meaningful offline experiences in a connected world</p>
        <div class="hero-cta">
          <button id="start-journey-btn" class="btn btn-primary">Start Your Journey</button>
          <button id="learn-more-btn" class="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="illustration">
          <svg viewBox="0 0 500 400" class="hero-svg">
            <path d="M213.1,276.6c-32.6-32.6-63.6-66.2-104.3-90.4c-12.3-7.3-24.5-10.1-38.3-13.4c-44.6-13.3-70.5,43.4-28.1,66.4
            c28.3,15.3,60.3,23.5,84.2,46.7c15.7,15.2,24.9,35.8,38.6,52.5c17.9,21.9,41.6,26.2,66.8,16.9c16.7-6.1,32.8-15.3,43.7-29.7
            c10.4-13.8,8.9-36.3-7.8-45.3C247.7,267.7,226.5,276.5,213.1,276.6z" fill="#3B82F6" opacity="0.3"/>
            <circle cx="259.5" cy="137.4" r="84.5" fill="#F97316" opacity="0.2"/>
            <path d="M290.9,236.3c22.9,0,45.9,0,68.8,0c13.5,0,29.5,3.6,41.9-3.2c4.1-2.3,6.3-8.6,3.6-12.7c-3-4.6-9.1-3.5-13.9-3.5
            c-19.2,0-38.5,0-57.7,0c-11.2,0-22.4,0-33.6,0c-9.3,0-18.7-0.5-28,0c-9.7,0.5-15.8,8.8-10.8,17.4
            C264.2,240.2,282,236.3,290.9,236.3z" fill="#14B8A6" opacity="0.2"/>
          </svg>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  container.querySelector('#start-journey-btn').addEventListener('click', () => {
    document.querySelector('a[data-target="tracker"]').click();
  });
  
  container.querySelector('#learn-more-btn').addEventListener('click', () => {
    document.querySelector('a[data-target="features"]').click();
  });
}