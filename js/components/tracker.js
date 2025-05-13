export function renderTracker(container) {
  if (!container) return;
  
  // Get saved data from localStorage
  const savedDays = localStorage.getItem('offlineDays') ? parseInt(localStorage.getItem('offlineDays')) : 0;
  const savedStreak = localStorage.getItem('offlineStreak') ? parseInt(localStorage.getItem('offlineStreak')) : 0;
  const lastCheckin = localStorage.getItem('lastCheckin') ? new Date(localStorage.getItem('lastCheckin')) : null;
  
  // Calculate current streak
  let currentStreak = savedStreak;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  
  if (lastCheckin) {
    const lastDate = new Date(lastCheckin);
    lastDate.setHours(0, 0, 0, 0);
    
    // Calculate the difference in days
    const timeDiff = today.getTime() - lastDate.getTime();
    const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    
    // If last check-in was yesterday, keep the streak
    // If it was today, don't increment since we'll do that on button click
    // If it was more than 1 day ago, reset streak
    if (dayDiff > 1) {
      currentStreak = 0;
    }
  }
  
  container.innerHTML = `
    <div class="tracker-container">
      <div class="section-header">
        <h2>Offline Day Tracker</h2>
        <p>Record your journey of disconnecting from the internet</p>
      </div>
      
      <div class="tracker-content">
        <div class="tracker-stats">
          <div class="tracker-stat">
            <div class="stat-value">${savedDays}</div>
            <div class="stat-label">Total Days</div>
          </div>
          <div class="tracker-stat">
            <div class="stat-value">${currentStreak}</div>
            <div class="stat-label">Current Streak</div>
          </div>
          <div class="tracker-stat">
            <div class="stat-value">${lastCheckin ? formatDate(lastCheckin) : 'Never'}</div>
            <div class="stat-label">Last Check-in</div>
          </div>
        </div>
        
        <div class="tracker-actions">
          <button id="checkin-btn" class="btn btn-primary">Check-in Today</button>
          <button id="reset-btn" class="btn btn-danger">Reset Tracker</button>
        </div>
        
        <div class="tracker-calendar">
          <h3>30-Day View</h3>
          <div class="calendar-grid">
            ${generateCalendarDays(30, lastCheckin)}
          </div>
        </div>
        
        <div class="tracker-tips">
          <h3>Staying Offline Tips</h3>
          <ul>
            <li>Set aside specific times for offline activities</li>
            <li>Keep your phone in another room while playing DayZ</li>
            <li>Use airplane mode to avoid distractions</li>
            <li>Tell friends and family about your offline hours</li>
            <li>Prepare offline resources and guides beforehand</li>
          </ul>
        </div>
      </div>
    </div>
  `;
  
  // Add event listeners
  const checkinBtn = container.querySelector('#checkin-btn');
  const resetBtn = container.querySelector('#reset-btn');
  
  checkinBtn.addEventListener('click', () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Check if already checked in today
    if (lastCheckin) {
      const lastDate = new Date(lastCheckin);
      lastDate.setHours(0, 0, 0, 0);
      
      if (lastDate.getTime() === today.getTime()) {
        alert('You have already checked in today!');
        return;
      }
      
      // Check if consecutive day
      const timeDiff = today.getTime() - lastDate.getTime();
      const dayDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
      
      if (dayDiff === 1) {
        // Consecutive day
        currentStreak++;
      } else if (dayDiff > 1) {
        // Streak broken
        currentStreak = 1;
      }
    } else {
      currentStreak = 1;
    }
    
    // Update localStorage
    const newTotal = savedDays + 1;
    localStorage.setItem('offlineDays', newTotal);
    localStorage.setItem('offlineStreak', currentStreak);
    localStorage.setItem('lastCheckin', today.toISOString());
    
    // Re-render tracker
    renderTracker(container);
  });
  
  resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset your tracker? This will delete all your progress.')) {
      localStorage.removeItem('offlineDays');
      localStorage.removeItem('offlineStreak');
      localStorage.removeItem('lastCheckin');
      renderTracker(container);
    }
  });
  
  // Helper functions
  function formatDate(date) {
    const options = { month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  }
  
  function generateCalendarDays(numDays, lastCheckin) {
    let calendarHTML = '';
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Create array of checked-in dates
    const checkinDates = [];
    if (lastCheckin) {
      let currentDate = new Date(lastCheckin);
      currentDate.setHours(0, 0, 0, 0);
      
      for (let i = 0; i < currentStreak; i++) {
        checkinDates.push(new Date(currentDate).toDateString());
        currentDate.setDate(currentDate.getDate() - 1);
      }
    }
    
    // Generate calendar days
    for (let i = 0; i < numDays; i++) {
      const date = new Date();
      date.setDate(today.getDate() - i);
      date.setHours(0, 0, 0, 0);
      
      const dateString = date.toDateString();
      const isCheckedIn = checkinDates.includes(dateString);
      const isToday = date.getTime() === today.getTime();
      
      let className = 'calendar-day';
      if (isCheckedIn) className += ' checked-in';
      if (isToday) className += ' today';
      
      calendarHTML += `
        <div class="${className}">
          <div class="day-date">${formatDate(date)}</div>
          <div class="day-status">${isCheckedIn ? '✓' : ''}</div>
        </div>
      `;
    }
    
    return calendarHTML;
  }
}