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

  async checkUserInput(userInput) {
    const getSeparatedInput = await this.separateInput(userInput);
    const validatedInput = await this.validateInputText(getSeparatedInput);
    const sumNumbersValue = await this.gameResult(validatedInput);

    MissionUtils.Console.print(`결과 : ${sumNumbersValue}`);
  }

  async separateInput(userInput) {
    const getCheckCustomSeparator = await this.isCustomSeparator(userInput);

    if (getCheckCustomSeparator) {
      return await this.separateCustom(userInput);
    }
    return await this.separateNormal(userInput);
  }

  async isCustomSeparator(userInput) {
    if (userInput.includes('//') && userInput.includes('\\n')) {
      return true;
    }

    return false;
  }

  async separateNormal(userInput) {
    return userInput.split(/,|:/);
  }

  async separateCustom(userInput) {
    const customMatch = userInput.match(/^\/\/(.)\\n/);
    const customDelimiter = customMatch[1];
    const numbersString = userInput.substring(customMatch[0].length);
    const delimiterRegex = new RegExp(`[${customDelimiter}|\\n]`);

    return numbersString.split(delimiterRegex).filter(s => s !== '');
  }

  async validateInputText(userInput) {
    const checkIncludedString = await this.isIncludedString(userInput);
    const checkIncludedNegativeNumbers = await this.isIncludedNegativeNumber(checkIncludedString);

    return checkIncludedNegativeNumbers;
  }

  async isIncludedString(userInput) {
    const invalidChar = userInput.filter(v => isNaN(v));

    if (invalidChar.length > 0) {
      throw new Error("[ERROR] 문자열에 숫자가 아닌 문자가 포함되어 있습니다.");
    }

    return userInput;
  }

  async isIncludedNegativeNumber(userInput) {
    const negativeNumbers = userInput.filter(v => Number(v) < 0);

    if (negativeNumbers.length > 0) {
      throw new Error("[ERROR] 문자열에 음수가 포함되어 있습니다.");
    }

    return userInput;
  }

  async sumNumbers(numberArr) {
    return numberArr.reduce((acc, cur) => acc + Number(cur), 0);
  }

  async gameResult(userInput) {
    const getSumNumbers = await this.sumNumbers(userInput);
    return getSumNumbers;
  }
}

export default App;
