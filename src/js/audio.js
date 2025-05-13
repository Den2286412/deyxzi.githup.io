// Audio functionality for DayZ Offline Website

// Audio files (encoded as base64 data URIs for offline use)
const audioFiles = {
  ambience: 'data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAATAAADY29tbWVudABCaW5nAAAAL1RJVDIAAAAUAAADSUQzAwAAAAEAAANUWUVSAAAABQAAA3llYXIAVENPTgAAAA8AAANjb21tZW50ABBpbmcAVENPTQAAAA8AAANnZW5yZQAQaW5nAFRDT00AAAAPAAADY29tbWVudABCaW5nAAAAL1RXWEMAAAAUAAADYXJ0aXN0ABBpbmcAVENPTQAAABcAAANjb21wb3NlcgBQaW5nIAAAAAAAVENPTQAAABYAAANhbGJ1bQBQaW5nAEFsYnVtAAAAAAAA',
  click: 'data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAATAAADY29tbWVudABCaW5nAAAAL1RJVDIAAAAUAAADSUQzAwAAAAEAAANUWUVSAAAABQAAA3llYXIAVENPTgAAAA8AAANjb21tZW50ABBpbmcAVENPTQAAAA8AAANnZW5yZQAQaW5nAFRDT00AAAAPAAADY29tbWVudABCaW5nAAAAL1RXWEMAAAAUAAADYXJ0aXN0ABBpbmcAVENPTQAAABcAAANjb21wb3NlcgBQaW5nIAAAAAAAVENPTQAAABYAAANhbGJ1bQBQaW5nAEFsYnVtAAAAAAAA',
  notification: 'data:audio/mp3;base64,SUQzBAAAAAABEVRYWFgAAAATAAADY29tbWVudABCaW5nAAAAL1RJVDIAAAAUAAADSUQzAwAAAAEAAANUWUVSAAAABQAAA3llYXIAVENPTgAAAA8AAANjb21tZW50ABBpbmcAVENPTQAAAA8AAANnZW5yZQAQaW5nAFRDT00AAAAPAAADY29tbWVudABCaW5nAAAAL1RXWEMAAAAUAAADYXJ0aXN0ABBpbmcAVENPTQAAABcAAANjb21wb3NlcgBQaW5nIAAAAAAAVENPTQAAABYAAANhbGJ1bQBQaW5nAEFsYnVtAAAAAAAA'
};

// Audio elements
let ambienceAudio;
let clickAudio;
let notificationAudio;

// Audio state
let audioEnabled = true;

// Initialize audio
function initAudio() {
  // Create audio elements
  ambienceAudio = new Audio(audioFiles.ambience);
  clickAudio = new Audio(audioFiles.click);
  notificationAudio = new Audio(audioFiles.notification);
  
  // Set audio properties
  ambienceAudio.loop = true;
  ambienceAudio.volume = 0.1;
  
  clickAudio.volume = 0.2;
  notificationAudio.volume = 0.3;
  
  // Check if audio is enabled in localStorage
  const savedAudioState = localStorage.getItem('audioEnabled');
  if (savedAudioState !== null) {
    audioEnabled = savedAudioState === 'true';
  }
  
  // Update sound toggle button
  updateSoundToggleButton();
  
  // Add event listener to sound toggle button
  const soundToggle = document.getElementById('sound-toggle');
  soundToggle.addEventListener('click', toggleAudio);
  
  // Play ambience if enabled
  if (audioEnabled) {
    playAmbience();
  }
  
  // Add click sound to buttons
  addClickSoundsToButtons();
}

// Play ambience sound
function playAmbience() {
  if (audioEnabled) {
    ambienceAudio.play().catch(error => {
      console.log('Autoplay prevented. User interaction required to play audio.');
    });
  }
}

// Play click sound
function playClickSound() {
  if (audioEnabled) {
    // Clone the audio to allow multiple simultaneous plays
    const clickSound = clickAudio.cloneNode();
    clickSound.play();
  }
}

// Play notification sound
function playNotificationSound() {
  if (audioEnabled) {
    notificationAudio.play();
  }
}

// Toggle audio
function toggleAudio() {
  audioEnabled = !audioEnabled;
  
  // Update localStorage
  localStorage.setItem('audioEnabled', audioEnabled.toString());
  
  // Update sound toggle button
  updateSoundToggleButton();
  
  // Play or pause ambience
  if (audioEnabled) {
    playAmbience();
    showNotification('Sound enabled');
  } else {
    ambienceAudio.pause();
    showNotification('Sound disabled');
  }
}

// Update sound toggle button appearance
function updateSoundToggleButton() {
  const soundIcon = document.querySelector('.sound-icon');
  if (audioEnabled) {
    soundIcon.classList.remove('off');
    soundIcon.classList.add('on');
  } else {
    soundIcon.classList.remove('on');
    soundIcon.classList.add('off');
  }
}

// Add click sounds to buttons
function addClickSoundsToButtons() {
  const buttons = document.querySelectorAll('button, .nav-links a, .card, .weapon-card');
  
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      playClickSound();
    });
  });
}

// Show notification
function showNotification(message) {
  const notification = document.getElementById('notification');
  const notificationMessage = document.getElementById('notification-message');
  
  notificationMessage.textContent = message;
  notification.classList.add('show');
  
  // Play notification sound
  playNotificationSound();
  
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}

// Export functions
export { initAudio, playClickSound, playNotificationSound };