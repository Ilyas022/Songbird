export default function Nav (loc = 'header') {
  return (`
    <nav class="${loc}__menu menu">
      <ul class="menu__list list">
        <li class="list__item"><a class="menu__link link" href="./index.html">About</a></li>
        <li class="list__item"><a class="menu__link link" href="./game.html">Play quiz</a></li>
      </ul>
    </nav>
  `)
}