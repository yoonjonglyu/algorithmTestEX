/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

const twoSum = function(nums, target) { 
    for(let int = 0; int < nums.length; int++){
        for(let int2 = int + 1; int2 < nums.length; int2++){
            if(nums[int] + nums[int2] === target){
                return [int, int2];
            }
        }
    }
};
/**
 * Runtime: 136 ms, faster than 33.71% of JavaScript online submissions for Two Sum.
 * Memory Usage: 38.8 MB, less than 5.11% of JavaScript online submissions for Two Sum.
 */

const twoSum = function(nums, target) { 
    const map = new Map()
    for (let int = 0; int < nums.length; int++){
        const r = target - nums[int]
        if (map.has(r)) {
            return [map.get(r), int]
        }
        map.set(nums[int], int)
    }
};
/**
 * Runtime: 80 ms, faster than 77.77% of JavaScript online submissions for Two Sum.
 * Memory Usage: 39.8 MB, less than 5.11% of JavaScript online submissions for Two Sum.
 */

twoSum([2,7,11,15], 9);