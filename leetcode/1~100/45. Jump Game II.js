/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function(nums) { /** 시간 초과 */
    let result = 1000;

    function countJump (count, current) {
        if(current === (nums.length - 1)){
            if(count < result){
                result = count;
            }
            return;
        }
        for(let int = 1; int <= nums[current]; int++){
            countJump(count + 1, current + int);
        }
    }

    countJump(0, 0);
    
    return result;
};
const jump = function(nums) {
    function countJump (count, current) {
        let max = current;

        for(let int = 1; int < nums.length; int++){
            if(int === nums.length - 1 && current > 0){
                count++;
                return count;
            }

            max = Math.max(max, nums[int] + int);
            current--;

            if(current === 0){
                count++;
                current = max - int;
            }
        }

        return count;
    }

    const result = countJump(0, nums[0]);
    
    return result;
};
/**
 * Runtime: 72 ms, faster than 99.05% of JavaScript online submissions for Jump Game II.
 * Memory Usage: 38.8 MB, less than 99.37% of JavaScript online submissions for Jump Game II.
 */


jump([1,2,3,4,5]);
jump([1,1,1,1]);
jump([1,2]); 
jump([2,3,1,1,4]);
jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]);
jump([1, 2, 3]);