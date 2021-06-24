/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function(nums) {
    const state = new Array((nums.length + 1)).fill(true);
    let result = 1;

    for(let int = 0; int < nums.length; int++){
        if(nums[int] > 0){
            state[nums[int]] = false;
            if((nums[int]) === result){
                result++;
                while(state[result] == false){
                    result++;
                }
            }
        }
    }
    
    return result;
};
/**
 * Runtime: 76 ms, faster than 91.44% of JavaScript online submissions for First Missing Positive.
 * Memory Usage: 38.8 MB, less than 68.47% of JavaScript online submissions for First Missing Positive.
 */

firstMissingPositive([1,2,0]);
firstMissingPositive([3,4,-1,1]);
firstMissingPositive([7,8,9,11,12]);