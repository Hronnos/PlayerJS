export const musicPlayerInit = () => {
  let audio = document.querySelector('.audio-player');
  const audioImg = document.querySelector('.audio-img');

  
  const audioBack= document.querySelector('.audio-button__prev');
  const audioPlay = document.querySelector('.audio-button__play');
  const audioForw = document.querySelector('.audio-button__next');
  const  audioProgress = document.querySelector('.audio-progress');
  const timeTotal = document.querySelector('.audio-time__total');
  const  timePassed = document.querySelector('.audio-time__passed');
  const  auProgTiming = document.querySelector('.audio-progress__timing');



  const audioVolume = document.querySelector('.audio-volume');
  

  const urlImg = document.querySelector('.audio-img').src;
  audioImg.src = urlImg;

  const toggleIcon = () => {
    if (audio.paused) {
      audio.classList.remove('play');
      audioPlay.classList.remove('fa-pause');
      audioPlay.classList.add('fa-play');
    } else {
      audio.classList.add('play');
      audioPlay.classList.add('fa-pause');
      audioPlay.classList.remove('fa-play');
    }
  };

 
  const addZero = n => n < 10 ? '0' + n : n;

  audioPlay.addEventListener('click', () =>{
    if (audio.paused){
      audio.play();
    } else {
      audio.pause();
    }
    toggleIcon();
  });

  audio.addEventListener('timeupdate', () => {
    const currentTime =  audio.currentTime;
    const duration =  audio.duration;

    let minutePassed = Math.floor(currentTime / 60);
    let secondsPassed = Math.floor(currentTime % 60);

    let minuteTotal = Math.floor(duration / 60);
    let secondsTotal = Math.floor(duration % 60);

    timePassed.textContent = `${addZero(minutePassed)}:${addZero(secondsPassed)}`;
    timeTotal.textContent = `${addZero(minuteTotal)}:${addZero(secondsTotal)}`;

    audioProgress.value = (currentTime / duration * 100);

    audio.addEventListener("timeupdate", () => {
      auProgTiming.style.width = audioProgress.value + "%";
    });
 });

 audioProgress.addEventListener('change', () => {
  const duration = audio.duration;
  const value = audioProgress.value;

  audio.currentTime = (value * duration) / 100;
 });

audioVolume.addEventListener('input', () =>{
  audio.volume = audioVolume.value / 100;
 });
 audio.volume = 0.75;
 audioVolume.value = audio.volume * 100;


 function audioChangeTime(e) { //Перематываем

  var mouseX = Math.floor(e.pageX - audioProgress.offsetLeft);
  
  var progress = mouseX / (audioProgress.offsetWidth / 100);
  
  audio.currentTime = audio.duration * (progress / 100);

  }
  audioProgress.addEventListener('click',audioChangeTime);


  audioForw.addEventListener('click', () =>{
    
  });
};