import { MissionUtils } from '@woowacourse/mission-utils'

class User {
    constructor() {
        this.separatedInput = null;
    }

    async initializeUserInput() {
        const userInput = await MissionUtils.Console.readLineAsync("덧셈할 문자열을 입력해 주세요.");
        this.separatedInput = await this.isIncludedCustom(userInput);
    }

    async isIncludedCustom(userInput) {
        if (userInput.includes('//') && userInput.includes('\\n')) {
            return this.isCustomSeparator(userInput);
        }

        return this.isNotCustomSeparator(userInput);
    }

    async isCustomSeparator(userInput) {
        const customMatch = userInput.match(/^\/\/(.)\\n/);
        const customDelimiter = customMatch[1];
        const numbersString = userInput.substring(customMatch[0].length);
        const delimiterRegex = new RegExp(`[${customDelimiter}|\\n]`);

        return numbersString.split(delimiterRegex).filter(s => s !== '');
    }

    async isNotCustomSeparator(userInput) {
        return userInput.split(/,|:/);
    }

    getSeparatedInput() {
        return this.separatedInput;
    }
}

export default User;
