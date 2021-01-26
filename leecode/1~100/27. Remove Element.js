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
const removeElement = function(nums, val) {
    const result = nums;
    const resultLength = result.length;
    let count = 0;

    for (let int = 0; int < resultLength; int++) {
        if(result[int] === undefined){
            break;
        }
        if(result[int] !== val){
            nums[count] = nums[int];
            count++;
        }
    }

    return count;
};
/**
 * Runtime: 80 ms, faster than 65.40% of JavaScript online submissions for Remove Element.
 * Memory Usage: 38.5 MB, less than 86.38% of JavaScript online submissions for Remove Element.
 * 딱히 더 빨라진다거나 하는 경우는 없는거 같다. 그냥 들쭉날쭉하다 뭔가 평균적인 시간 복잡도가 좋은 방법은 없나?
 */
removeElement([3, 2, 2, 3], 3);
removeElement([0,1,2,2,3,0,4,2], 2);