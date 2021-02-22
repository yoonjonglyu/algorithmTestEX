/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let count = 0;
    
    for(; count < nums.length; count++){
        if(nums[count] === target){
            break;
        }
        if(nums[count] > target){
            break;
        }
    }

    return count;
};
/**
 * Runtime: 72 ms, faster than 93.70% of JavaScript online submissions for Search Insert Position.
 * Memory Usage: 38.8 MB, less than 50.86% of JavaScript online submissions for Search Insert Position.
 */

searchInsert([1,3,5,6], 5);
searchInsert([1,3,5,6], 2);
searchInsert([1,3,5,6], 0)