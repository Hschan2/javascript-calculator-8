import { MissionUtils } from '@woowacourse/mission-utils'
import { INPUT_MESSAGE } from './constants/message';

class User {
    constructor() {
    }

    async promptAndParse() {
        const userInput = await MissionUtils.Console.readLineAsync(INPUT_MESSAGE.USER_INPUT);
        if (userInput.includes('//') && userInput.includes('\\n')) {
            return this.isCustomSeparator(userInput);
        }

        return this.isNotCustomSeparator(userInput);
    }

    isIncludedCustom(userInput) {
        if (userInput.includes('//') && userInput.includes('\\n')) {
            return this.isCustomSeparator(userInput);
        }

        return this.isNotCustomSeparator(userInput);
    }

    isCustomSeparator(userInput) {
        const customMatch = userInput.match(/^\/\/(.)\\n/);
        const customDelimiter = customMatch[1];
        const numbersString = userInput.substring(customMatch[0].length);
        const delimiterRegex = new RegExp(`[${customDelimiter}|\\n]`);

        return numbersString.split(delimiterRegex).filter(s => s !== '');
    }

    isNotCustomSeparator(userInput) {
        return userInput.split(/,|:/).filter(s => s !== '');
    }
}

export default User;
