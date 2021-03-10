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

jump([2,3,1,1,4]);
jump([5,6,4,4,6,9,4,4,7,4,4,8,2,6,8,1,5,9,6,5,2,7,9,7,9,6,9,4,1,6,8,8,4,4,2,0,3,8,5]);