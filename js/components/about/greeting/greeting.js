export default function Greeting () {
  const lang = localStorage.getItem('lang')
    if (lang === 'ru') {
      return (`
    <div class="story__greeting greeting">
      <div class="greeting__container _container">
        <div class="greeting__body">
          <div class="greeting-text">
            <h1 class="greeting-text__title title">Songbird</h1>
            <p class="greeting-text__pres text">
              Songbird - это развивающая игра, которая позволяет познакомиться с огромным многообразием птиц, их основными типами и наиболее встречающимися представителями.
            </p>
          </div>
          <div class="greeting-image">
            <img class="greeting-image__img" src="./img/parrot.webp"></img>
          </div>
        </div>
        
      </div>
    </div>
    }
  
  `)}
    if (lang === 'en') {
      return (`
        <div class="story__greeting greeting">
          <div class="greeting__container _container">
            <div class="greeting__body">
              <div class="greeting-text">
                <h1 class="greeting-text__title title">Songbird</h1>
                <p class="greeting-text__pres text">
                  Songbird - is an educational game that allows you to get acquainted with a huge variety of birds, their main types and the most common representatives.
                </p>
              </div>
              <div class="greeting-image">
                <img class="greeting-image__img" src="./img/parrot.webp"></img>
              </div>
            </div>
          </div>
        </div>
      `)}
}