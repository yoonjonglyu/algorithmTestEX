/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
    const result = [];
    const repaetTable = new Set();

    if (nums.length > 2) {
        nums.sort();
        for (let int = 0; int < nums.length; int++) {
            if (nums[int] === nums[int - 1]) {
                continue;
            }

            for (let left = (int + 1); left < nums.length; left++) {
                for (let right = (nums.length - 1); right > left; right--) {
                    const YZ = (nums[left] + nums[right]);
                    if (YZ === -nums[int]) {
                        const state = [nums[int], nums[left], nums[right]].sort();
                        const repeat = [...state].toString();
                        if (!repaetTable.has(repeat)) {
                            repaetTable.add(repeat);
                            result.push(state);
                        }
                    }
                }
            }
        }
    }

    return result;
};
/**
 * 시간초과...
 */

const threeSum = function (nums) {
    const result = [];
    const repaetTableYZ = new Set();

    if (nums.length > 2) {
        const repaetTableX = new Set();
        nums.sort();
        for (let int = 0; int < nums.length; int++) {
            if (repaetTableX.has(nums[int])) {
                continue;
            }
            repaetTableX.add(nums[int]);
            const repaetTableY = new Set();

            for (let left = (int + 1); left < nums.length; left++) {
                const Y = (0 - nums[int] - nums[left]);
                if(repaetTableY.has(Y)){
                    const YZ = [Y, nums[left]].toString();
                    if(repaetTableYZ.has(YZ)){
                        continue;
                    }
                    repaetTableYZ.add(YZ);
                    result.push([nums[int], Y, nums[left]]);
                }
                repaetTableY.add(nums[left]);

            }
        }
    }

    return result;
};
/**
 * Runtime: 492 ms, faster than 9.74% of JavaScript online submissions for 3Sum.
 * Memory Usage: 50.5 MB, less than 17.33% of JavaScript online submissions for 3Sum.
 */
const threeSum = function (nums) {
    const result = [];
    const repaetTableYZ = new Set();

    if (nums.length > 2) {
        const repaetTableX = new Set();
        nums.sort();
        for (let int = 0; int < (nums.length - 2); int++) {
            if (repaetTableX.has(nums[int])) {
                continue;
            }
            repaetTableX.add(nums[int]);
            const repaetTableY = new Set();

            for (let left = (int + 1); left < nums.length; left++) {
                const Y = (0 - nums[int] - nums[left]);
                if(repaetTableY.has(Y)){
                    const YZ = [Y, nums[left]].toString();
                    if(repaetTableYZ.has(YZ)){
                        continue;
                    }
                    repaetTableYZ.add(YZ);
                    result.push([nums[int], Y, nums[left]]);
                }
                repaetTableY.add(nums[left]);

            }
        }
    }

    return result;
};
/**
 * Runtime: 488 ms, faster than 9.85% of JavaScript online submissions for 3Sum.
 * Memory Usage: 50.7 MB, less than 16.86% of JavaScript online submissions for 3Sum.
 */
const threeSum = function (nums) {
    const result = [];

    if (nums.length > 2) {
        nums.sort((a, b) => a - b);
        for (let int = 0; int < (nums.length - 2); int++) {
            while(nums[int] === nums[int - 1]) {
                int++;
            }
            let left = (int + 1);
            let right = (nums.length - 1);

            while(left < right){
                const state = nums[int] + nums[left] + nums[right];
                if(state === 0){
                    result.push([nums[int], nums[left], nums[right]]);
                    while(nums[left] === nums[left + 1]){
                        left++;
                    }
                    left++;
                }
                if(state > 0){
                    right--;
                }
                if(state < 0){
                    left++;
                }
            }
        }
    }

    return result;
};
/**
 * Runtime: 136 ms, faster than 96.54% of JavaScript online submissions for 3Sum.
 * Memory Usage: 48.8 MB, less than 61.11% of JavaScript online submissions for 3Sum.
 */

threeSum([-4, -2, 1, -5, -4, -4, 4, -2, 0, 4, 0, -2, 3, 1, -5, 0]);
threeSum([-1, 0, 1, 2, -1, -4]);
threeSum([0, 0, 0, 0]);
threeSum([0]);
threeSum([3, 0, -2, -1, 1, 2]);
threeSum([-1, 0, 1, 0]);
threeSum([0, 0, 0]);