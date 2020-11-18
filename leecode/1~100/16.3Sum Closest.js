/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
    let result = nums[0] + nums[1] + nums[2];

    nums.sort((a, b) => a - b);
    for (let int = 0; int < (nums.length - 2); int++) {
        while (nums[int] === nums[int - 1]) {
            int++;
        }
        let left = (int + 1);
        let right = (nums.length - 1);
        while (left < right) {
            let state = nums[int] + nums[left] + nums[right];
            if(Math.abs((result - target)) > Math.abs((state - target))){
                result = state;
            }
            if(state === target){
                int = nums.length;
                result = state;
                break;
            } else if (state > target) {
                while (nums[right] === nums[right - 1]) {
                    right--;
                }
                right--;
            } else {
                while (nums[left] === nums[left + 1]) {
                    left++;
                }
                left++;
            }
        }
    }


    return result;
};
/**
 * Runtime: 84 ms, faster than 82.88% of JavaScript online submissions for 3Sum Closest.
 * Memory Usage: 39.4 MB, less than 40.13% of JavaScript online submissions for 3Sum Closest.
 */

threeSumClosest([-1, 2, 1, -4], 1);
threeSumClosest([1, 1, 1, 0], -100);
threeSumClosest([0, 0, 0], 1);
threeSumClosest([0, 2, 1, -3], 1)