export const videoPlayerInit = () => {

  const videoPlayer = document.querySelector('.video-player'),
        buttonPlay = document.querySelector('.video-button__play'),
        buttonStop = document.querySelector('.video-button__stop'),
        timePassed = document.querySelector('.video-time__passed'),
        videoProgress = document.querySelector('.video-progress'),
        timeTotal = document.querySelector('.video-time__total'),
        videoVolume = document.querySelector('.video-volume'),
        videoFullscreen = document.querySelector('.video-fullscreen');
      

        const toggleIcon = () => {
          if (videoPlayer.paused) {
            buttonPlay.classList.remove('fa-pause');
            buttonPlay.classList.add('fa-play');
          } else {
            buttonPlay.classList.add('fa-pause');
            buttonPlay.classList.remove('fa-play');
          }
        };


        
const togglePlay = () =>{
  if (videoPlayer.paused){
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
  toggleIcon();
};

const stopPlay = () => {
  videoPlayer.pause();
  videoPlayer.currentTime = 0;
};
  
const addZero = n => n < 10 ? '0' + n : n;



         videoPlayer.addEventListener('click', togglePlay);
         buttonPlay.addEventListener('click', togglePlay);

         videoPlayer.addEventListener('play', toggleIcon);
         videoPlayer.addEventListener('pause', toggleIcon);

         buttonStop.addEventListener('click', stopPlay);

         videoPlayer.addEventListener('timeupdate', () => {
            const currentTime = videoPlayer.currentTime;
            const duration = videoPlayer.duration;

            let minutePassed = Math.floor(currentTime / 60);
            let secondsPassed = Math.floor(currentTime % 60);

            let minuteTotal = Math.floor(duration / 60);
            let secondsTotal = Math.floor(duration % 60);

            timePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
            timeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

            videoProgress.value = (currentTime / duration * 100);
         });

         videoProgress.addEventListener('change', () => {
          const duration = videoPlayer.duration;
          const value = videoProgress.value;

          videoPlayer.currentTime = (value * duration) / 100;
         });

         videoFullscreen.addEventListener('click', () => {
           videoPlayer.requestFullscreen();
         });

         videoVolume.addEventListener('input', () =>{
          videoPlayer.volume = videoVolume.value / 100;
         });
         videoPlayer.volume = 0.75;
         videoVolume.value = videoPlayer.volume * 100;
};