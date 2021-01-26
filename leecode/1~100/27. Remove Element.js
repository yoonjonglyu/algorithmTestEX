/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function(nums, val) {
    const result = nums;
    const resultLength = result.length;

    for (let int = 0; int < resultLength; int++) {
        if(result[int] === val){
            let count = 1;
            while (result[int + count] === val) {
                count++;
            }

            result.splice(int, count);
        }
    }

    return result.length;
};
/**
 * Runtime: 72 ms, faster than 95.45% of JavaScript online submissions for Remove Element.
 * Memory Usage: 38.2 MB, less than 94.46% of JavaScript online submissions for Remove Element.
 */
const removeElement = function(nums, val) {
    const result = nums;
    const resultLength = result.length;

    for (let int = 0; int < resultLength; int++) {
        if(result[int] === undefined){
            break;
        }
        if(result[int] === val){
            let count = 1;
            while (result[int + count] === val) {
                count++;
            }
            result.splice(int, count);
        }
    }

    return result.length;
};
/**
 * Runtime: 64 ms, faster than 99.84% of JavaScript online submissions for Remove Element.
 * Memory Usage: 38.7 MB, less than 31.51% of JavaScript online submissions for Remove Element.
 * 너무 들쭉날쭉한 결과들이지만 확실히 평균 속도와 최고 속도가 빨라진다.
 */

removeElement([3, 2, 2, 3], 3);
removeElement([0,1,2,2,3,0,4,2], 2);