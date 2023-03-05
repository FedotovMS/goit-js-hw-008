import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on('timeupdate', function (data) {
  const currentTime = data.seconds;

  localStorage.setItem('videoTime', currentTime);
});

const savedTime = localStorage.getItem('videoTime');
if (savedTime !== null) {
  player.setCurrentTime(savedTime);
}
