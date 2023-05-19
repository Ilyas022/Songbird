import { bird, BirdInfo } from "./components/game/birdInfo/birdInfo.js";
import PlayerHandler from "./playerHandler.js";



export function chooseHandler (props) {


const rightAnswer = new Audio('./files/sounds/right-answer.mp3'),
      wrongAnswer = new Audio('./files/sounds/wrong-answer.mp3')
  const variants = document.querySelectorAll('.voices-item')
  variants.forEach(variant => {
    const changeName = document.querySelector('.bird-name')
    const changeImg = document.querySelector('.bird-picture__img')
    const description = document.querySelector('.description')
    variant.addEventListener('click', (e) => {
      const lang = localStorage.getItem('lang')
      let birdsData
      if (lang === null || lang === 'ru') birdsData = JSON.parse(localStorage.getItem('birdsDataRu'))

      if (lang === 'en') birdsData = JSON.parse(localStorage.getItem('birdsDataEn'))

      if (variant.textContent !== birdsData[props.stage][props.randomBird].name && !props.rightChoice) {
        e.currentTarget.firstElementChild.classList.add('voices-item__icon_wrong')
        wrongAnswer.play()
        props.score--
      }
      if (variant.textContent === birdsData[props.stage][props.randomBird].name && !props.rightChoice) {
        document.querySelector('.bird-content__button').classList.remove('inactive')
        e.currentTarget.firstElementChild.classList.add('voices-item__icon_right')
        props['player-0'].pause()
        rightAnswer.play()
        props.rightChoice = true
        props.scoreCounter += props.score
        document.querySelector('.score-counter__score').textContent = props.scoreCounter

        changeName.textContent = variant.textContent
        changeImg.src = bird.image
        description.textContent = bird.description
      }
      
    }, {once: true})
    variant.addEventListener('click', (e) => {
      const lang = localStorage.getItem('lang')
      let birdsData
      if (lang === null || lang === 'ru') birdsData = JSON.parse(localStorage.getItem('birdsDataRu'))

      if (lang === 'en') birdsData = JSON.parse(localStorage.getItem('birdsDataEn'))

      if (props['player-1']) props['player-1'].pause()
      let currentBird;
        birdsData.forEach((type, index) => {
          let i = 0;
          for (let bird in type) {
            if (type[bird].name === variant.textContent) {
              currentBird = type[bird]
              props.choosedBirdSrc = JSON.stringify({index: [index], i: [i]}) 
            } 
            i++
          }
        })
      description.innerHTML = ''
      description.innerHTML = BirdInfo(currentBird, currentBird.image, currentBird.name)
      const birdInfoWrapper = document.querySelectorAll('.bird-info__wrapper')[1]
      birdInfoWrapper.classList.add('coll')
      birdInfoWrapper.insertAdjacentHTML('beforeend', `<p class="bird-description__species">${currentBird.species}</p>`)
      birdInfoWrapper.insertAdjacentHTML('beforeend', `<p class="bird-description__text">${currentBird.description}</p>`)
      PlayerHandler(currentBird.audio, props)
    })
  })
}
