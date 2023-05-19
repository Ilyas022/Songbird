import birdContent from "./birdContent/birdContent.js";
import {BirdInfo} from "./birdInfo/birdInfo.js";
import { QuizType } from "./quizType/quizType.js";

export default function GameMain (props) {
  return (`
  <main class="main quiz">
  <div class="quiz__container _container">
    <div class="quiz__bird bird">
      ${QuizType()}
      ${BirdInfo(props)}
      ${birdContent()}
    </div>
  </div>
</main>
  `)
}