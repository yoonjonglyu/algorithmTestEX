/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const nextPermutation = function(nums) {
    const result = nums;

    let int = (result.length - 2);
    for(; int >= 0; int--){
        if(result[int] < result[int + 1]){
            break;
        }         
    }

    if(int === -1){
        result.reverse();
    } else {
        let idx = (result.length - 1);
        for(; result[idx] <= result[int]; idx--);
        let tempNum = result[int];

        result[int] = result[idx];
        result[idx] = tempNum;

        for(int++, idx = (result.length - 1); int < idx; int++, idx--){
            tempNum = result[int];
            result[int] = result[idx];
            result[idx] = tempNum;
        }    
    }

    return result;
};
/**
 * Runtime: 72 ms, faster than 100.00% of JavaScript online submissions for Next Permutation.
 * Memory Usage: 40.4 MB, less than 45.20% of JavaScript online submissions for Next Permutation.
 */
/**
 * 123
 * 132
 * 213
 * 231
 * 312
 * 321
 */
nextPermutation([2, 3, 1]);
nextPermutation([1, 2]);
nextPermutation([1, 1]);
nextPermutation([1, 3, 2]);
nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([1, 1, 5]);
