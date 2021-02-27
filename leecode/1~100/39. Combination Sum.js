/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function(candidates, target) {
    const result = [];

    function trackingSum(target, current, index) {
        if(target === 0){
            result.push(Array.from(current));
        }

        for(let int = index; int < candidates.length; int++){
            if(candidates[int] <= target){
                current.push(candidates[int]);
                trackingSum(target - candidates[int], current, int);
                current.pop();
            }
        }
    }

    trackingSum(target, [], 0);

    return result;
};
/**
 * Runtime: 92 ms, faster than 86.39% of JavaScript online submissions for Combination Sum.
 * Memory Usage: 40.8 MB, less than 71.60% of JavaScript online submissions for Combination Sum.
 */
combinationSum([2,3,6,7], 7);