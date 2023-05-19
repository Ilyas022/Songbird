import Footer from "./footer/footer.js";
import Header from "./header/header.js";
import AboutMain from "./about/main.js";
import GameMain from "./game/main.js";


export default function Page (state) {
  const url = window.location.pathname.split('/')
  if (url.includes('game.html')) {
    return(`
    ${Header()}
    ${GameMain(state)}
    ${Footer()}
  `)
  }
  return(`
    ${Header()}
    ${AboutMain(state)}
    ${Footer()}
  `)
}