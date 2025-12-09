import { ERROR_MESSAGE } from "./constants/message";

class Valid {
    constructor() {
    }

    validate(userInput) {
        const checkedForString = this.isIncludedString(userInput);
        const checkedForNegative = this.isIncludedNegativeNumber(checkedForString);

        return checkedForNegative;
    }

    isIncludedString(userInput) {
        const invalidChar = userInput.filter(v => isNaN(v) || v === '');
        if (invalidChar.length > 0) {
            throw new Error(ERROR_MESSAGE.IS_NOT_ONLY_NUMBER);
        }
        return userInput;
    }

    isIncludedNegativeNumber(userInput) {
        const negativeNumbers = userInput.filter(v => Number(v) < 0);
        if (negativeNumbers.length > 0) {
            throw new Error(ERROR_MESSAGE.IS_NEGATIVE_NUMBER);
        }
        return userInput;
    }
}

export default Valid;
