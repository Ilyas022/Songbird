export default function WinPage (props) {
  const lang = localStorage.getItem('lang')
  let firstButton = '',
      secondButton = '';
  if (lang === 'ru') {
    return (`
    <div class="bird-win">
      <div class="bird-win__text">
        <h1 class="bird-win__title title">Поздравляем!</h1>
        <p class="bird-win__result result">Вы прошли викторину и набрали ${props.scoreCounter} из 30 возможных баллов</p>
        
      </div>
      <div class="bird-win__button button">Попробовать ещё раз!</div>
      
    </div>
  `)
  }
  if (lang === 'en') {

  }
  return (`
    <div class="bird-win">
      <div class="bird-win__text">
        <h1 class="bird-win__title title">Congratulations!</h1>
        <p class="bird-win__result result">You passed the quiz and scored ${props.scoreCounter} out of 30 possible points!</p>
        
      </div>
      <div class="bird-win__button button">Try again!</div>
      
    </div>
  `)
}