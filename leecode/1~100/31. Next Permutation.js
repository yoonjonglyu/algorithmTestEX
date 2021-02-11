/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    const result = nums;

    let int = result.length - 1;
    for(; int > 0; int--){
        if(result[int] >= result[int - 1]){
            break;
        }         
    }
    if(int === 0){
        result.reverse();
    } else {
        for(let idx = int; idx >= 0; idx--){
            if(result[idx] < result[int]){
                const tempNums = result[int];
                result[int] = result[idx];
                result[idx] = tempNums;
                if(idx === 0 && result.length > 2){
                    result.reverse();
                }
                break;
            }
        }
    }

    return result;
};
/** 순열 자체를 만들어서 비교하는 것은 크게 어렵진 않은데 그런 것없이 다음 순열을 찾는 규칙을 찾으려니 어렵다.
 * 머리를 식힌 후에 다시해봐야겠다.
 */
/**
 * 123
 * 132
 * 213
 * 231
 * 312
 * 321
 */
nextPermutation([1, 2]);
nextPermutation([1, 1]);
nextPermutation([1, 3, 2]);
nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([1, 1, 5]);
