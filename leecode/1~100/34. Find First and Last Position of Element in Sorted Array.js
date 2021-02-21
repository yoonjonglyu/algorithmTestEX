/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {// api 이용
    const result = [nums.indexOf(target), nums.lastIndexOf(target)];

    return result;
};
/**
 * Runtime: 76 ms, faster than 86.49% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 * Memory Usage: 39.4 MB, less than 95.02% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 */

const searchRange = function(nums, target) {
    const result = [-1, -1];
    let left = 0;
    let right = (nums.length - 1);

    for(; left < nums.length; left++, right--){
        if(result[0] !== -1 && result[1] !== -1){
            break;
        }

        if(result[0] === -1 && nums[left] === target){
            result[0] = left;
        }
        if(result[1] === -1 && nums[right] === target){
            result[1] = right;
        }
    }

    return result;
};
/**
 * Runtime: 72 ms, faster than 95.84% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 * Memory Usage: 39.5 MB, less than 91.01% of JavaScript online submissions for Find First and Last Position of Element in Sorted Array.
 */
searchRange([5,7,7,8,8,10], 8);