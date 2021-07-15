/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    const state = s.split(' ').filter((str) => str.length > 0);
    if (state.length > 0) {
        return state.pop().length;
    } else {
        return 0;
    }
};
/**
 * Runtime: 68 ms, faster than 92.32% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 38.7 MB, less than 39.56% of JavaScript online submissions for Length of Last Word.
 */
const lengthOfLastWord = function (s) {
    const state = s.trim().split(' ');
    if (state.length > 0) {
        return state.pop().length;
    } else {
        return 0;
    }
};
/**
 * Runtime: 72 ms, faster than 79.79% of JavaScript online submissions for Length of Last Word.
 * Memory Usage: 39 MB, less than 12.68% of JavaScript online submissions for Length of Last Wor
 */