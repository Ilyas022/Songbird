import Gallery from "./greeting/gallery/gallery.js"
import Greeting from "./greeting/greeting.js"

export default function AboutMain (props) {
  
  return (`
    <main class="main story">
      ${Greeting()}
      ${Gallery(props)}
      
    </main>
  `)
}