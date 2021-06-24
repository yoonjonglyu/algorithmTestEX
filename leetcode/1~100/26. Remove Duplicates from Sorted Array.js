/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let result = nums;
    const numsLength = nums.length;

    for (let int = 0; int < numsLength; int++) {
        let count = 1;

        while (result[int] === result[int + count] && count < numsLength) {
            count++;
        }

        if (result[int + count] !== undefined) {
            result.splice((int + 1), (count - 1));
        } else {
            result.splice((int + 1), (numsLength - (int + 1)));
        }
    }

    return result.length;
};
/**
 * Runtime: 844 ms, faster than 5.02% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 40.8 MB, less than 76.84% of JavaScript online submissions for Remove Duplicates from
 */
const removeDuplicates = function (nums) {
    let result = nums;
    const numsLength = nums.length;

    for (let int = 0; int < numsLength; int++) {
        let count = 1;

        while (result[int] === result[int + count] && count < numsLength) {
            count++;
        }

        if (result[int + count] !== undefined) {
            result.splice((int + 1), (count - 1));
        } else {
            result.splice((int + 1), (numsLength - (int + 1)));
            break;
        }
    }

    return result.length;
};
/**
 * Runtime: 108 ms, faster than 39.47% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 40.5 MB, less than 93.77% of JavaScript online submissions for Remove Duplicates from
 */
/** Map 을 이용한 풀이 */
const removeDuplicates = function (nums) {
    const result = nums;
    const duplicatesMap = new Map();
    let count = 0;
    
    for (let int = 0; int < result.length; int++) {
        if(!duplicatesMap.has(result[int])){
            duplicatesMap.set(result[int], true);
            result[count] = result[int];
            count++;
        }
    }

    result.splice(count, (result.length - count));
    
    return result;
};
/**
 * Runtime: 96 ms, faster than 68.44% of JavaScript online submissions for Remove Duplicates from Sorted Array.
 * Memory Usage: 41.8 MB, less than 11.23% of JavaScript online submissions for Remove Duplicates from
 * 더 빠른 방법은 뭘까?
 */

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
removeDuplicates([1, 1, 2]);
removeDuplicates([1]);