export default function Logo (loc = 'header') {
  return (`
    <a class="${loc}__logo logo" href="./index.html">
			<img class="logo__img" src="./img/favicon.png">
			<span class="logo__text">Songbird</span>
		</a>
  `)
}