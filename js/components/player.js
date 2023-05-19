export default function Player (props) {
  let id = 1;

  if (window.location.pathname.split('/').includes('index.html')) {
    props.numOfAboutPlayers++
    id = props.numOfAboutPlayers
  } else {
    document.querySelector('.player-1') ? id = 2 : id = 1
  }

  
  return (`
    <div class="player player-${id}">
      <div class="player__play-button play-button"></div>
      <div class="player__body">
        <div class="player__timebar timebar">
          <div class="timebar__inner">
            <progress id="timebar" max="100" value="0"></progress>
            <div class="player-time">
              <span class="player-time__current current-time">0:00</span>
              <span class="player-time__total total-time">0:00</span>
          </div>
          </div>
          
          <input id="volbar" type="range" min="0" max="1" step="0.1">
        </div>
        
        
      </div>
      
    </div>
  `)
}