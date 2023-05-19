import birdDescription from "./birdDescription/birdDescription.js";
import BirdVoices from "./birdVoices/birdVoices.js";

export default function birdContent () {
  return (`
    <div class="bird-content">
      ${BirdVoices()}
      ${birdDescription()}
    </div>
    <button class="bird-content__button button inactive">Next level</button>
  `)
}