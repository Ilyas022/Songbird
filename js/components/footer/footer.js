import Logo from "../header/logo/logo.js";
import Nav from "../header/nav/nav.js";
import ScoreCounter from "../header/scoreCounter/scoreCounter.js";

export default function Footer () {
  return (`
    <div class="footer">
      <div class="footer__container _container">
        ${Logo('footer')}
        <ul class="socials footer__socials">
          <li class="socials__item">
            <a class="socials__link" href="https://github.com/Ilyas022" target="_blank"><img class="socials__icon gh-icon" src="./img/gh-logo.png"></a>
          </li>
          <li class="socials__item">
            <a class="socials__link" href="https://rs.school/js/" target="_blank"><img class="socials__icon rs-icon" src="./img/rs-logo.svg"></a>
          </li>
        </ul>
        <p>2022</p>
      </div>
    </div>
  `)
}