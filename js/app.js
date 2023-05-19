import birdsData from "./birdsData.js";
import birdsDataEn from "./birdsDataEn.js";
import {chooseHandler} from "./chooseHandler.js";
import Page from "./components/page.js";
import LangHandler from "./langHandler.js";
import { NextButtonHandler } from "./nextButtonHandler.js";
import PlayerHandler from "./playerHandler.js";
import quizTypes from "./quizTypes.js";

let lang = localStorage.getItem('lang');
let quizTypesData = JSON.parse(localStorage.getItem('quizTypes'));
const enTrans = JSON.parse(localStorage.getItem('birdsDataEn'))
const ruTrans = JSON.parse(localStorage.getItem('birdsDataRu'))

if (lang === null) {
  localStorage.setItem('lang', 'ru')
}

if (enTrans === null && ruTrans === null) {
  localStorage.setItem('birdsDataEn', JSON.stringify(birdsDataEn))
  localStorage.setItem('birdsDataRu', JSON.stringify(birdsData))
}

if(quizTypesData === null) localStorage.setItem('quizTypes', JSON.stringify(quizTypes))


const state = {
  state: true,
  rightChoice: false,
  stage: 0,
  score: 5,
  scoreCounter: 0,
  soundSrc: '',
  choosedBirdSrc: '',
  numOfAboutPlayers: 0,
  playingVoice: '',
  playing: false,
  numOfBird: '',
  prevBird: '',
}



  document.querySelector('.wrapper').insertAdjacentHTML('afterbegin', Page(state))
  const url = window.location.pathname.split('/')
if (url.includes('game.html')) {
  chooseHandler(state)
  NextButtonHandler(state)
  PlayerHandler(state.soundSrc, state)
  LangHandler(state)
} else {
  LangHandler(state)
  document.querySelectorAll('.score-counter').forEach(counter => counter.outerHTML = '')
  const gallery = document.querySelector('.gallery')
  gallery.addEventListener('click', (e) => {
    if (e.target.classList.contains('about-play-button')) {
      const numberOfBird = parseInt(e.target.parentNode.classList[1].split('-')[1]) - 1;
      
      if (state.playing && state.numOfBird === numberOfBird) {
        state.playingVoice.pause()
        state.playing = false
        e.target.style.backgroundColor = 'red'
        return
      }
      if (state.playing && state.numOfBird !== numberOfBird) {
        state.playingVoice.pause()
        state.playing = false
        state.prevBird.style.backgroundColor = 'red'
      }
      if (state.numOfBird === numberOfBird && state.playing === false) {
        state.playingVoice.play()
        state.playing = true
        e.target.style.backgroundColor = 'green'
        return
      }
      let voice;
      if (numberOfBird <= 6) {
        voice = new Audio(birdsData[0][numberOfBird].audio)
        
      } else if (numberOfBird > 6) {
        const numOfClass = Math.trunc(numberOfBird / 6)
        const birdNum = numberOfBird % 6
        voice = new Audio(birdsData[numOfClass][birdNum].audio)
      }
      voice.play()
      state.prevBird = e.target
      e.target.style.backgroundColor = 'green'
      state.playing = true
      state.numOfBird = numberOfBird
      state.playingVoice = voice
    }
  })
}



