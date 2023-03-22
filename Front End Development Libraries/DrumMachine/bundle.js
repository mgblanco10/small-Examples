const audioElements = document.querySelectorAll('audio');
const volumeControl = document.querySelector('input[type="range"]');

const drumPads = document.querySelectorAll('.drum-pad');
const display = document.querySelector('#display');

drumPads.forEach(pad => {
  pad.addEventListener('click', function() {
    const soundName = this.id.replace('-', ' '); 
    display.textContent = soundName; 
  });
});

audioElements.forEach(audioElement => {
    const buttonElement = audioElement.parentElement;
    buttonElement.addEventListener('click', () => {
      audioElement.currentTime = 0;
      audioElement.play();
    });
  });

  volumeControl.addEventListener('input', () => {
    const volume = volumeControl.value;
    audioElements.forEach(audioElement => {
      audioElement.volume = volume;
    });
  });

  function init() {
    const audioElements = document.querySelectorAll('audio');
    const volumeControl = document.querySelector('input[type="range"]');
  
    audioElements.forEach(audioElement => {
      const buttonElement = audioElement.parentElement;
      buttonElement.addEventListener('click', () => {
        audioElement.currentTime = 0;
        audioElement.play();
      });
    });
  
    volumeControl.addEventListener('input', () => {
      const volume = volumeControl.value;
      audioElements.forEach(audioElement => {
        audioElement.volume = volume;
      });
    });
  }
  
  window.addEventListener('DOMContentLoaded', init);
  