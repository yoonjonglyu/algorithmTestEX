/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
    function permutation(arr) {
        const result = [];

        if (arr.length === 1) {
            return arr.map((num) => [num]);
        }
        for (let int = 0; int < arr.length; int++) {
            const pivot = arr[int];
            const tmpArr = [...arr].filter((num) => pivot !== num);
            const tmpPermute = permutation(tmpArr);
            const answer = tmpPermute.map((permuteArr) => [pivot, ...permuteArr]);

            result.push(...answer);
        }

        return result;
    }

    const result = permutation(nums);

    return result;
};
/**
 * Runtime: 96 ms, faster than 72.77% of JavaScript online submissions for Permutations.
 * Memory Usage: 44.3 MB, less than 9.33% of JavaScript online submissions for Permutations.
 */
const permute = function (nums) {
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return arr.map((num) => [num]);
        }
        for (let int = 0; int < arr.length; int++) {
            const pivot = arr[int];
            const tmpArr = [...arr].filter((num) => pivot !== num);
            const tmpPermute = permutation(tmpArr);
            const answer = tmpPermute.map((permuteArr) => [pivot, ...permuteArr]);

            result.push(...answer);
        }

        return result;
    }

    const result = permutation(nums);

    return result;
};
/**
 * Runtime: 100 ms, faster than 51.69% of JavaScript online submissions for Permutations.
 * Memory Usage: 43.7 MB, less than 13.00% of JavaScript online submissions for Permutations.
 */
const permute = function (nums) {
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return arr.map((num) => [num]);
        }
        for (let int = 0; int < arr.length; int++) {
            const pivot = arr[int];
            const tmpArr = [...arr].filter((num) => pivot !== num);
            const tmpPermute = permutation(tmpArr);
            result.push(...tmpPermute.map((permuteArr) => [pivot, ...permuteArr]));
        }

        return result;
    }

    const result = permutation(nums);

    return result;
};
/**
 * Runtime: 92 ms, faster than 87.50% of JavaScript online submissions for Permutations.
 * Memory Usage: 43.9 MB, less than 11.76% of JavaScript online submissions for Permutations.
 */
const permute = function (nums) {
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return arr.map((num) => [num]);
        }
        for (let int = 0; int < arr.length; int++) {
            const pivot = arr[int];
            const tmpArr = [...arr].filter((num) => pivot !== num);
            result.push(...permutation(tmpArr).map((permuteArr) => [pivot, ...permuteArr]));
        }

        return result;
    }

    const result = permutation(nums);

    return result;
};
/**
 * Runtime: 100 ms, faster than 51.69% of JavaScript online submissions for Permutations.
 * Memory Usage: 43.7 MB, less than 13.00% of JavaScript online submissions for Permutations.
 */
const permute = function (nums) {
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return arr.map((num) => [num]);
        }
        for (let int = 0; int < arr.length; int++) {
            result.push(
                ...permutation([...arr].filter((num) => arr[int] !== num))
                    .map((permuteArr) => [arr[int], ...permuteArr])
            );
        }

        return result;
    }

    const result = permutation(nums);

    return result;
};
/**
 * Runtime: 104 ms, faster than 34.33% of JavaScript online submissions for Permutations.
 * Memory Usage: 44.3 MB, less than 9.33% of JavaScript online submissions for Permutations.
 */
 const permute = function (nums) {
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return [arr];
        }
        arr.forEach((current) => {
            result.push(
                ...permutation([...arr].filter((num) => current !== num))
                    .map((permuteArr) => [current, ...permuteArr])
            );
        });

        return result;
    }

    const result = permutation(nums);

    return result;
};
/**
 * Runtime: 92 ms, faster than 87.50% of JavaScript online submissions for Permutations.
 * Memory Usage: 43.7 MB, less than 12.40% of JavaScript online submissions for Permutations.
 */
/**
 * 순열 알고리즘이 잘 이해가 안가서 분석해볼려고 반복함.
 */
permute([1]);
permute([1, 0]);
permute([1, 2, 3, 4]);
permute([1, 2, 3]);