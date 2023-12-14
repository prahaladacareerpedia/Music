const audio = document.querySelector('.songs');
const playPauseButton = document.getElementById('pause');
const forwardButton = document.getElementById('forward');
const backButton = document.getElementById('back');
const startTimeDisplay = document.getElementById('startTime');
const endTimeDisplay = document.getElementById('endTime');
const progressBar = document.querySelector('.childBar');

// Array of song file names
const songs = [
  "Harivarasanam.mp3",
  "Zara Zara Bahekta Hai Music Version Raining~ New WhatsApp Status #shorts #arijitsingh #viral #sad [TubeRipper.com].mp3", // Replace with your other song file names
   "kushi bgm ringtone #pspk bhoomika [TubeRipper.com].mp3",
   "Full screen video life of ram songJaanu movieWhatsapp status [TubeRipper.com].m4a",
   "Full screen video life of ram songJaanu movieWhatsapp status [TubeRipper.com].m4a",
   "A.R.Rahman Best Ringtone Sakhi song bgm Pachchadanamey ringtone [TubeRipper.com].mp3",
   "[iSongs.info] 07 - Slokam.mp3",
   "[iSongs.info] 04 - Dekho Dekho Gabbar Singh.mp3",
   "[iSongs.info] 03 - Akasam Ammayaithe.mp3",
   "[iSongs.info] 02 - Aaradugula Bullet.mp3",
   "[iSongs.info] 01 - Aale Bale.mp3"


];


function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
}

audio.addEventListener('timeupdate', () => {
  startTimeDisplay.textContent = formatTime(audio.currentTime);
  endTimeDisplay.textContent = formatTime(audio.duration);
  const progress = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = `${progress}%`;
});

let currentSongIndex = 0;



playPauseButton.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    playPauseButton.src = './pause.png';
  } else {
    audio.pause();
    playPauseButton.src = './play-button-arrowhead.png';
  }
});

forwardButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = `./songs/${songs[currentSongIndex]}`;
  audio.play();
  playPauseButton.src = './pause.png';
});

backButton.addEventListener('click', () => {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  audio.src = `./songs/${songs[currentSongIndex]}`;
  audio.play();
  playPauseButton.src = './pause.png';
});

audio.addEventListener('timeupdate', () => {
  startTimeDisplay.textContent = formatTime(audio.currentTime);
  endTimeDisplay.textContent = formatTime(audio.duration);
});

audio.addEventListener('ended', () => {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  audio.src = `./songs/${songs[currentSongIndex]}`;
  audio.play();
  playPauseButton.src = './pause.png';
});
