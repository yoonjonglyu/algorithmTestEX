/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
    const overloop = new Map();
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return [arr];
        }
        for (let int = 0; int < arr.length; int++) {
            result.push(
                ...permutation([...arr.slice(0, int), ...arr.slice((int + 1), arr.length)])
                    .map((permuteArr) => {
                        const state = [arr[int], ...permuteArr];
                        if(state.length === nums.length && overloop.has(state.toString())){
                            return false;
                        }
                        overloop.set(state.toString());
                        return state;
                    })
            );
        }

        return result;
    }

    const result = permutation(nums).filter((arr) => arr !== false);

    return result;
};
/**
 * Runtime: 600 ms, faster than 5.11% of JavaScript online submissions for Permutations II.
 * Memory Usage: 57.5 MB, less than 5.11% of JavaScript online submissions for Permutations II.
 * 역겨울 정도로느리다; 이게 뭔 쓰레기 같은 코드람; 근데 오늘은 좀 쉬자 이번주는 회복기다.
 */
permuteUnique([1, 1, 2]);
permuteUnique([1, 2, 3]);