export default function Lang () {
  const lang = localStorage.getItem('lang')
  let firstButton = '',
      secondButton = '';
  if (lang === 'ru') firstButton = ' lang-button_active'
  if (lang === 'en') secondButton = ' lang-button_active'

  return (`
    <div class="lang__buttons">
      <button class="lang-button lang-button-ru${firstButton}">Ru</button>
      <button class="lang-button lang-button-en${secondButton}">En</button>
    </div>
  `)
}