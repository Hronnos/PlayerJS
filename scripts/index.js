import {radioPlayerInit} from './radioPlayer.js';
import {videoPlayerInit} from './videoPlayer.js';
import {musicPlayerInit} from './musicPlayer.js';

const playerBtn = document.querySelectorAll('.player-btn'),
      playerBlock = document.querySelectorAll('.player-block'),
      temp = document.querySelector('.temp');



const deactPlayer = () => {
  temp.style.display = 'none';
  playerBtn.forEach((item) => item.classList.remove('active'));
  playerBlock.forEach((item) => item.classList.remove('active'));
};


playerBtn.forEach((btn, i) => btn.addEventListener('click', () => {
      deactPlayer();
      btn.classList.add('active');
      playerBlock[i].classList.add('active');
    }));


radioPlayerInit();
videoPlayerInit();
musicPlayerInit();


