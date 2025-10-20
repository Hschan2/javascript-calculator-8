class Valid {
    constructor(separatedInput) {
        this.separatedInput = separatedInput;
        this.validInput = null;
    }

    async isValid() {
        const checkString = await this.isIncludedString(this.separatedInput);
        const checkNegativeNumber = await this.isIncludedNegativeNumber(checkString);

        this.validInput = checkNegativeNumber;
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

    getValidInput() {
        return this.validInput;
    }
}

export default Valid;
