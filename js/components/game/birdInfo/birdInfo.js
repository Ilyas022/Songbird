import birdsData from "../../../birdsData.js";
import birdsDataEn from "../../../birdsDataEn.js";
import Player from "../../player.js";

const lang = localStorage.getItem('lang')
let birds

if (lang === null) {
  localStorage.setItem('birdsDataRu', JSON.stringify(birdsData))
  localStorage.setItem('birdsDataEn', JSON.stringify(birdsDataEn))
  birds = JSON.parse(localStorage.getItem('birdsDataRu'))
} 
if (lang === 'ru') birds = JSON.parse(localStorage.getItem('birdsDataRu'))

if (lang === 'en') birds = JSON.parse(localStorage.getItem('birdsDataEn'))
export let bird;
export function BirdInfo (props, image = './img/bird-plug.png" alt=', name = '******') {
  const randomBird = Math.floor(0 + Math.random() * (5 + 1 - 0));
  props.randomBird = randomBird
  let src;
  if (props.state) {
    src = birds[props.stage][randomBird]
  bird = src
  const birdsSong = src.audio
  props.soundSrc = birdsSong
  }
  return (`
  <div class="bird-info">
  <div class="bird-info__wrapper">
    <div class="bird-info__picture bird-picture">
      <img class="bird-picture__img" src="${image}"">
    </div>
    <div class="bird-info__body">
      <span class="bird-info__name bird-name">
        ${name}
      </span>
      ${Player()}
    </div>
  </div>
  
  
</div>
  `)
}