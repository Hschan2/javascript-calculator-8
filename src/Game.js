import { MissionUtils } from '@woowacourse/mission-utils'

class Game {
    constructor(refinedInput) {
        this.refinedInput = refinedInput;
        this.sum = null;
    }

    async isSum() {
        this.sum = this.refinedInput.reduce((acc, cur) => acc + Number(cur), 0);
    }

    async resultPrint() {
        MissionUtils.Console.print(`결과 : ${this.sum}`);
    }
}

export default Game;
