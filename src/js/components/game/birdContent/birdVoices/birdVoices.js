export default function BirdVoices (index = 0) {
const lang = localStorage.getItem('lang')
let birdsData
if (lang === null || lang === 'ru') birdsData = JSON.parse(localStorage.getItem('birdsDataRu'))

if (lang === 'en') birdsData = JSON.parse(localStorage.getItem('birdsDataEn'))
  const voicesList = document.createElement('ul');
  voicesList.classList.add('bird-content__voices', 'voices')

  birdsData[index].forEach((bird => {
    const listItem = document.createElement('li')
    listItem.classList.add('voices-item')

    const icon = document.createElement('span');
    icon.classList.add('voices-item__icon');

    const birdName = document.createElement('span');
    birdName.classList.add('voices-item__name');
     
    birdName.append(bird.name)
    listItem.append(icon, birdName)
    voicesList.append(listItem)
  }))
  return (`
    <div class="bird-content__voices-wrapper">
      ${voicesList.outerHTML}
    </div>
    
  `)
}