/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    let count = 0;
    let isTarget = false;
    for(; count < nums.length; count++){
        if(nums[count] === target){
            isTarget = true;
            break;
        }
    }

    const result  = isTarget === true ? count : -1;

    return result;
};
/**
 * Runtime: 72 ms, faster than 96.49% of JavaScript online submissions for Search in Rotated Sorted Array.
 * Memory Usage: 38.8 MB, less than 65.98% of JavaScript online submissions for Search in Rotated Sorted
 * 이게 왜 미디움 난이도에 통과율 35.8% 인지 이해가 안간다...
 */

 search([4,5,6,7,0,1,2], 0);