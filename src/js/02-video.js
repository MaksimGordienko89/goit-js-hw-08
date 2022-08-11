import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

var throttle = require('lodash.throttle');
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let savedTime;

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay(data) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  console.log(localStorage.getItem('videoplayer-current-time'));
}

savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) {
  player.setCurrentTime(JSON.parse(savedTime).seconds);
}
