const PRIX_ERROR = '[ERROR]';
export const ERROR_MESSAGE = Object.freeze({
    IS_NOT_ONLY_NUMBER: `${PRIX_ERROR} 문자열에 숫자가 아닌 문자가 포함되어 있습니다.`,
    IS_NEGATIVE_NUMBER: `${PRIX_ERROR} 문자열에 음수가 포함되어 있습니다.`,
});
export const INPUT_MESSAGE = Object.freeze({
    USER_INPUT: '덧셈할 문자열을 입력해 주세요.'
});
export const RESULT_MESSAGE = (result) => `결과 : ${result}`;