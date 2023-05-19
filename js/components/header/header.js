import Lang from "./lang/lang.js"
import Logo from "./logo/logo.js"
import Nav from "./nav/nav.js"
import ScoreCounter from "./scoreCounter/scoreCounter.js"


export default function Header () {
  return (`
  <header class="header">
    <div class="header__container _container">
    ${Logo()}
    ${Nav()}
    ${Lang()}
    ${ScoreCounter()}
    </div>
  </header>
  `)
}

