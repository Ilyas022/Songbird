import quizTypes from "../../../quizTypes.js"



export function QuizType () {
  const lang = localStorage.getItem('lang')
  quizTypes
  let types
  if (lang === null) {
    localStorage.setItem('quizTypes', JSON.stringify(quizTypes))
    types = quizTypes[0]
  }
  if (lang === null || lang === 'ru') types = JSON.parse(localStorage.getItem('quizTypes'))[0]

  else if (lang === 'en') types = JSON.parse(localStorage.getItem('quizTypes'))[1]
  let birdTypes = ''
  types.forEach((type, index) => {
    if (index === 0) {
      birdTypes += `<li class="quiz-type__item quiz-type_active">${type}</li>`
    } else {
      birdTypes += `<li class="quiz-type__item">${type}</li>`
    }
  })

  return (`
    <ul class="quiz-type">
      ${birdTypes}
    </ul>
  `)
}