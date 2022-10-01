const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
console.log(skipButtons)
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
        playerbtn.textContent = '▶️';
    }else{
        playerbtn.textContent = '⏸️';
    }
}
const playback = (e) => {
    let speed = e.target.dataset.skip;
   video.currentTime +=parseFloat(speed);
    
    
}


const handleRange = (e) => {
    const value = e.target.value;
    const change = e.target.name;
    video[change] = value;
}
const handleProgress = (e) => {
   const progress = video.currentTime / video.duration * 100;
    progressBar.style.flexBasis = `${progress}%`;

}

const scrub = (e) => {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime;
}

skipButtons.forEach((item) => {

    item.addEventListener('click', playback)
})
ranges.forEach((item) => {

    item.addEventListener('change', handleRange)
    item.addEventListener('mousemove', handleRange)
})

video.addEventListener('timeupdate', handleProgress)

playerbtn.addEventListener('click', playVideo);
video.addEventListener('click', playVideo);
video.addEventListener('play', updateBtn);
video.addEventListener('pause', updateBtn);
progress.addEventListener('click', scrub)

let mouseDown = false;
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e))
progress.addEventListener('mousedown', () => {
    mouseDown = true
})
progress.addEventListener('mouseup', () => {
    mouseDown = false
})

