export default function Gallery (props) {
  const lang = localStorage.getItem('lang')
  let birdsData
  if (lang === null || lang === 'ru') birdsData = JSON.parse(localStorage.getItem('birdsDataRu'))

  if (lang === 'en') birdsData = JSON.parse(localStorage.getItem('birdsDataEn'))
  let cards = ''
  let playerId = 1
  birdsData.forEach(type => {
    for (let bird in type) {
      const card = 
      `
        <div class="gallery-card">
          <div class="gallery-card__image">
            <img class="gallery-card__img" src="${type[bird].image}">
          </div>
          <h3 class="gallery-card__name">${type[bird].name}</h3>
          <p class="gallery-card__species">${type[bird].species}</p>
          <div class="gallery-card__sound"></div>
          <div class="gallery-card__hover">
            <div class="gallery-card__player player-${playerId}">
              <div class="player__play-button about-play-button">Play</div>
            </div>
            <p class="gallery-card__description">${type[bird].description}</p>
          </div>
          
        </div>
      `
      playerId++
      cards += card
    }
  })
  return (
    `
  <div class="story__birds-gallery birds-gallery">
    <div class="birds-gallery__container _container">
      <div class="birds-gallery__body">
        <h2 class="birds-gallery__title sub-title">Gallery of birds</h2>
        <div class="gallery">
          ${cards}
        </div>
      </div>
    </div>
  </div>
  `
  )
}