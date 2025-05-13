// Notifications functionality for DayZ Offline Website

// Show notification
function showNotification(message, duration = 3000) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  
  // Set notification message
  notificationMessage.textContent = message;
  
  // Show notification
  notification.classList.add('show');
  
  // Play notification sound (via the audio module)
  playNotificationSound();
  
  // Hide notification after duration
  setTimeout(() => {
    notification.classList.remove('show');
  }, duration);
}

// Play notification sound
function playNotificationSound() {
  // This function is imported from audio.js
  // Implementation is handled by the audio module
  const audioModule = window.audioModule;
  
  if (audioModule && typeof audioModule.playNotificationSound === 'function') {
    audioModule.playNotificationSound();
  }
}

// Export functions
export { showNotification };