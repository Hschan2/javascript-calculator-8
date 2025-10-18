import { MissionUtils } from '@woowacourse/mission-utils'

class App {
  async run() {
    await this.start();
  }

  async start() {
    MissionUtils.Console.print("덧셈할 문자열을 입력해 주세요.");
    await this.inputText();
  }

  async inputText() {
    const userInput = await MissionUtils.Console.readLineAsync();
    await this.checkUserInput(userInput);
  }
}

export default App;
