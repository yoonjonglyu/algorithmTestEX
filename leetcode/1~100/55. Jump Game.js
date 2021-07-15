/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
    let result = true;
    let state = 0;
    nums.forEach((num, idx) => {
        if (state < idx) result = false;
        state = Math.max(state, num + idx);
    });

    return result;
};
/**
 * Runtime: 80 ms, faster than 93.57% of JavaScript online submissions for Jump Game.
 * Memory Usage: 43 MB, less than 49.61% of JavaScript online submissions for Jump Game.
 */
const canJump = function (nums) { // 큰 의미는 없다.
    let result = true;
    let state = 0;
    nums.some((num, idx) => {
        if (state < idx) {
            result = false;
            return true;
        }
        state = Math.max(state, num + idx);
    });

    return result;
};
/**
 * Runtime: 84 ms, faster than 86.85% of JavaScript online submissions for Jump Game.
 * Memory Usage: 43.2 MB, less than 43.18% of JavaScript online submissions for Jump Game.
 */
