// @ts-check
// 타입스크립트 파일한테 자바스크립트 파일을 확인하라고 알리는 부분
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean 
 */
export function init(config) {
    return true;
}


/**
 * Exits the program
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
    return code + 1; 
}