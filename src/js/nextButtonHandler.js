import { chooseHandler } from "./chooseHandler.js";
import birdDescription from "./components/game/birdContent/birdDescription/birdDescription.js";
import BirdVoices from "./components/game/birdContent/birdVoices/birdVoices.js";
import { BirdInfo } from "./components/game/birdInfo/birdInfo.js";
import Main from "./components/game/main.js";
import WinPage from "./components/game/winPage/winPage.js";
import PlayerHandler from "./playerHandler.js";


export function NextButtonHandler (props) {
  const nextButton = document.querySelector('.bird-content__button')
  nextButton.addEventListener('click', (e) => {
    document.querySelector('.bird-content__button').classList.add('inactive')
    if (!props.rightChoice) return
    if (props.stage === 5) {
      props['player-1'].pause()
      props['player-0'].pause()
      const quizContainer = document.querySelector('.quiz__bird')
      quizContainer.innerHTML = WinPage(props)
      if (props.scoreCounter === 30) {
        document.querySelector('.bird-win__button').style.display = 'none'
      }
      props.choosedBirdSrc = ''
      props.stage = 0
      props.rightChoice = false
      props.scoreCounter = 0
      props.score = 5
      const tryAgainButton = document.querySelector('.bird-win__button')
      tryAgainButton.addEventListener('click', (e) => {

        const quiz = document.querySelector('.quiz')
        quiz.innerHTML = Main(props)
        PlayerHandler(props.soundSrc, props)
        chooseHandler(props)
        NextButtonHandler(props)
        const score = document.querySelector('.score-counter__score')
        score.textContent = 0
      })
        return
    }
    
    props['player-1'].pause()
    props['player-0'].pause()
    props.stage++
    const voices = document.querySelector('.bird-content__voices-wrapper')
    const description = document.querySelector('.bird-content__description-wrapper')
    const birdInfo = document.querySelector('.bird-info')

    voices.outerHTML = BirdVoices(props.stage)
    description.outerHTML = birdDescription()
    birdInfo.innerHTML = ''
    birdInfo.outerHTML = BirdInfo(props)
    PlayerHandler(props.soundSrc, props)
    props.rightChoice = false
    chooseHandler(props)
    props.score = 5
    const quizType = document.querySelector('.quiz-type_active')
    quizType.classList.remove('quiz-type_active')
    quizType.nextElementSibling.classList.add('quiz-type_active')
  })
}
