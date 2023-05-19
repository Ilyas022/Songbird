import { chooseHandler } from "./chooseHandler.js";
import Gallery from "./components/about/greeting/gallery/gallery.js";
import BirdVoices from "./components/game/birdContent/birdVoices/birdVoices.js";
import { BirdInfo } from "./components/game/birdInfo/birdInfo.js";
import { QuizType } from "./components/game/quizType/quizType.js";
import PlayerHandler from "./playerHandler.js";


export default function LangHandler (state) {
  const ruButton = document.querySelector('.lang-button-ru'),
        enButton = document.querySelector('.lang-button-en'),
        url = window.location.pathname.split('/');
       
  ruButton.addEventListener('click', (e) => {
    const lang = localStorage.getItem('lang')
    if (lang === 'ru') return
    if (lang === 'en') {
      enButton.classList.remove('lang-button_active')
      ruButton.classList.add('lang-button_active')
      localStorage.setItem('lang', 'ru')
      if (url.includes('game.html') && !document.querySelector('.bird-win')) {
        if (state['player-1']) state['player-1'].pause()
     
      const birdsData = JSON.parse(localStorage.getItem('birdsDataRu'))
      const quizType = document.querySelector('.quiz-type')
      const birdName = document.querySelector('.bird-name')
      const description = document.querySelector('.description')
      if (state.rightChoice) birdName.innerHTML = birdsData[state.stage][state.randomBird].name
      if (state.choosedBirdSrc === '') {
        description.firstElementChild.innerHTML = 'Послушайте плеер.</br>Выберите птицу из списка'
      }
      if (state.choosedBirdSrc !== '') {
        const choosedBirdSrc = JSON.parse(state.choosedBirdSrc)
        const currentBird = birdsData[choosedBirdSrc.index][choosedBirdSrc.i]
        description.innerHTML = ''
        description.innerHTML = BirdInfo(currentBird, currentBird.image, currentBird.name)
        const birdInfoWrapper = document.querySelectorAll('.bird-info__wrapper')[1]
        birdInfoWrapper.classList.add('coll')
        birdInfoWrapper.insertAdjacentHTML('beforeend', `<p class="bird-description__species">${currentBird.species}</p>`)
        birdInfoWrapper.insertAdjacentHTML('beforeend', `<p class="bird-description__text">${currentBird.description}</p>`)
        PlayerHandler(currentBird.audio, state)
      } 
      quizType.innerHTML = ''
      quizType.outerHTML = QuizType()
      const voicesItems = document.querySelectorAll('.voices-item__name')
      voicesItems.forEach((item, index) => {
        item.textContent = birdsData[state.stage][index].name
      })
      }
      if (document.querySelector('.bird-win')) {
        document.querySelector('.bird-win__title').textContent = "Поздравляем!"
        const scoreCounter = document.querySelector('.score-counter__score').textContent 
        document.querySelector('.bird-win__result').textContent = `Вы прошли викторину и набрали ${scoreCounter} из 30 возможных баллов!`
      }
      if (url.includes('index.html') || window.location.pathname === '/' || url.includes('Songbird')) {
        if (state.playingVoice) state.playingVoice.pause()
        const birdsData = JSON.parse(localStorage.getItem('birdsDataRu'))
        document.querySelector('.greeting-text__pres').innerHTML = 'Songbird - это развивающая игра, которая позволяет познакомиться с огромным многообразием птиц, их основными типами и наиболее встречающимися представителями.'
        document.querySelector('.birds-gallery').outerHTML = ''
        document.querySelector('.greeting').insertAdjacentHTML('afterend', Gallery(state))
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
    } 
  })

  enButton.addEventListener('click', (e) => {
    const lang = localStorage.getItem('lang')
    if (lang === 'en') return
    if (lang === 'ru') {
      ruButton.classList.remove('lang-button_active')
      enButton.classList.add('lang-button_active')
        localStorage.setItem('lang', 'en')
      if (url.includes('game.html') && !document.querySelector('.bird-win')) {
        if (state['player-1']) state['player-1'].pause()
        const birdsData = JSON.parse(localStorage.getItem('birdsDataEn'))
        const quizType = document.querySelector('.quiz-type')
        const birdName = document.querySelector('.bird-name')
        const description = document.querySelector('.description')
        if (state.rightChoice) birdName.innerHTML = birdsData[state.stage][state.randomBird].name
        if (state.choosedBirdSrc === '') {
          description.firstElementChild.innerHTML = 'Listen to the player.</br>Select a bird from the list'
        }
        if (state.choosedBirdSrc !== '') {
          const choosedBirdSrc = JSON.parse(state.choosedBirdSrc)
          const currentBird = birdsData[choosedBirdSrc.index][choosedBirdSrc.i]
          description.innerHTML = ''
          description.innerHTML = BirdInfo(currentBird, currentBird.image, currentBird.name)
          const birdInfoWrapper = document.querySelectorAll('.bird-info__wrapper')[1]
          birdInfoWrapper.classList.add('coll')
          birdInfoWrapper.insertAdjacentHTML('beforeend', `<p class="bird-description__species">${currentBird.species}</p>`)
          birdInfoWrapper.insertAdjacentHTML('beforeend', `<p class="bird-description__text">${currentBird.description}</p>`)
          PlayerHandler(currentBird.audio, state)
        } 
        quizType.innerHTML = ''
        quizType.outerHTML = QuizType()
        const voicesItems = document.querySelectorAll('.voices-item__name')
        voicesItems.forEach((item, index) => {
          item.textContent = birdsData[state.stage][index].name
        })
      }
      if (document.querySelector('.bird-win')) {
        document.querySelector('.bird-win__title').textContent = "Congratulations!"
        const scoreCounter = document.querySelector('.score-counter__score').textContent 
        document.querySelector('.bird-win__result').textContent = `You passed the quiz and scored ${scoreCounter} out of 30 possible points!`
        document.querySelector('.bird-win__button').textContent = `Try again!`
      }
      if (url.includes('index.html') || window.location.pathname === '/' || url.includes('Songbird')) {
        if (state.playingVoice) state.playingVoice.pause()
        const birdsData = JSON.parse(localStorage.getItem('birdsDataEn'))
        document.querySelector('.greeting-text__pres').innerHTML = 'Songbird - is an educational game that allows you to get acquainted with a huge variety of birds, their main types and the most common representatives.'
        document.querySelector('.birds-gallery').outerHTML = ''
        document.querySelector('.greeting').insertAdjacentHTML('afterend', Gallery(state))
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
    } 
  })
}


