/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function(candidates, target) {
    const result = [];
    const overloopResult = {};

    candidates = candidates.sort();

    function trackingSum (target, current, index) {
        if(target === 0){
            if(overloopResult[current] === undefined){
                result.push(Array.from(current));
                overloopResult[current] = true;
            }
        }

        for(let int = index; int < candidates.length; int++){
            if(candidates[int] <= target){
                current.push(candidates[int]);
                trackingSum(target - candidates[int], current, (int + 1));
                current.pop();
            }
        }
    }

    trackingSum(target, [], 0);

    return result;
};
/**
 * Runtime: 508 ms, faster than 18.13% of JavaScript online submissions for Combination Sum II.
 * Memory Usage: 40.5 MB, less than 51.21% of JavaScript online submissions for Combination Sum II.
 */

 const combinationSum2 = function(candidates, target) {
    const result = [];
    const overloopResult = {};

    candidates = candidates.sort();

    function trackingSum (target, current, index) {
        if(target === 0){
            if(overloopResult[current] === undefined){
                result.push(Array.from(current));
                overloopResult[current] = true;
            }
        }

        for(let int = index; int < candidates.length; int++){
            if(int > index && candidates[int] === candidates[(int - 1)]){
                continue;
            }
            if(candidates[int] <= target){
                current.push(candidates[int]);
                trackingSum(target - candidates[int], current, (int + 1));
                current.pop();
            }
        }
    }

    trackingSum(target, [], 0);

    return result;
};
/**
 * Runtime: 88 ms, faster than 87.29% of JavaScript online submissions for Combination Sum II.
 * Memory Usage: 40.4 MB, less than 53.08% of JavaScript online submissions for Combination Sum II.
 */

combinationSum2([10,1,2,7,6,1,5], 8);