import { MissionUtils } from '@woowacourse/mission-utils'
import { RESULT_MESSAGE } from './constants/message';

class Game {
    constructor(refinedInput) {
        this.refinedInput = refinedInput;
        this.sum = this.refinedInput.reduce((acc, cur) => acc + Number(cur), 0);
    }

    resultPrint() {
        MissionUtils.Console.print(RESULT_MESSAGE(this.sum));
    }
}

export default Game;
