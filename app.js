
const audio = document.querySelector('.songs');
const playPauseButton = document.getElementById('pause');
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');


playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.src = './pause.png'; 
  } else {
    audio.pause();
    playPauseButton.src = './play.png'; 
  }
});


forwardButton.addEventListener('click', () => {
  audio.currentTime += 10; 
});


backButton.addEventListener('click', () => {
  audio.currentTime -= 10; 
});
