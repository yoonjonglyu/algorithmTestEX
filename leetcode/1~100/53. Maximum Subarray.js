/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
    let result = nums[0];
    nums.forEach((num, idx) => {
        let state = getResult(num);
        for (let index = idx + 1; index < nums.length; index++) {
            state += nums[index];
            getResult(state);
        }
    });

    function getResult(state) {
        if (result < state) {
            result = state;
        }
        return state;
    }

    return result;
};
/**
 * Runtime: 596 ms, faster than 5.01% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 39.7 MB, less than 51.71% of JavaScript online submissions for Maximum Subarray.
 */
const maxSubArray = function (nums) {
    let result = nums.shift();
    let state = getResult(result);
    nums.forEach((num, idx) => {
        state = Math.max(num, num + state);
        getResult(state);
    });

    function getResult(state) {
        if (result < state) {
            result = state;
        }
        return state;
    }

    return result;
};
/**
 * Runtime: 76 ms, faster than 88.84% of JavaScript online submissions for Maximum Subarray.
 * Memory Usage: 40.3 MB, less than 33.18% of JavaScript online submissions for Maximum Subarray.
 */
