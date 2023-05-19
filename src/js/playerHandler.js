export default function PlayerHandler (src, props) {
  let playerNumber
  document.querySelector('.player-2') ? playerNumber = 1 : playerNumber = 0
  let playButton = document.querySelectorAll('.play-button')[playerNumber],
        timebar = document.querySelectorAll('#timebar')[playerNumber],
        volbar = document.querySelectorAll('#volbar')[playerNumber],
        currentTime = document.querySelectorAll('.current-time')[playerNumber],
        totalTime = document.querySelectorAll('.total-time')[playerNumber],
        birdVoice = new Audio(src);
        
birdVoice.oncanplay = function () {
  let min = Math.floor(birdVoice.duration / 60),
      sec = Math.floor(birdVoice.duration % 60);
  props[`player-${playerNumber}`] = birdVoice
  
  if (sec < 10) {
    sec = `0${sec}`
  }
  totalTime.innerHTML = `${min}:${sec}`
}

playButton.addEventListener('click', (e) => {
  if (birdVoice.paused) {
    birdVoice.play()
  } else {
    birdVoice.pause()
  }
})

timebar.addEventListener('click', function (e) {
  const width = this.offsetWidth

  let clickCoord = e.offsetX;
  this.value = 100 * clickCoord / width

  birdVoice.currentTime = birdVoice.duration * (clickCoord / width)
})

birdVoice.addEventListener('timeupdate', function (e) {
  let dur = birdVoice.duration,
      curTime = birdVoice.currentTime;
      
  timebar.value = curTime * 100 / dur

  let min = Math.floor(curTime / 60),
      sec = Math.floor(curTime % 60);
  
  if (sec < 10) {
    sec = `0${sec}`
  }

  currentTime.innerHTML = `${min}:${sec}`
})

volbar.addEventListener('input', function (e) {
  const volume = this.value
  birdVoice.volume = volume
})
return birdVoice
}
