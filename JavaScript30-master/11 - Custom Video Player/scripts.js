const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const playerbtn = document.querySelector('.player__button');



let play = false;
const playVideo = () => {
    
   if(video.paused){
    video.play()
   }else{
    video.pause()
   }
    
}
const updateBtn = () => {
    const Play = '&#9616;&#9616;'
    if(video.paused){
        playerbtn.textContent = 'played'
    }else{
        playerbtn.textContent = play;
    }
}

playerbtn.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);

