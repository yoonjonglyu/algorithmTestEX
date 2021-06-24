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
 const permuteUnique = function (nums) {
    const overloop = {};
    function permutation(arr, result = []) {
        if (arr.length === 1) {
            return [arr];
        }
        for (let int = 0; int < arr.length; int++) {
            result.push(
                ...permutation([...arr.slice(0, int), ...arr.slice((int + 1), arr.length)])
                    .map((permuteArr) => {
                        const state = [arr[int], ...permuteArr];
                        if(state.length === nums.length && overloop[state.toString()]){
                            return false;
                        }
                        overloop[state.toString()] = true;
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
 * Runtime: 624 ms, faster than 5.11% of JavaScript online submissions for Permutations II.
 * Memory Usage: 58.3 MB, less than 5.11% of JavaScript online submissions for Permutations II.
 * 자바스크립트에서는 객체가 해쉬테이블 방식으로 만들어져서인지 별차이 없다.
 */
 const permuteUnique = function (nums) {
    const result = [];
    const disNums = [...new Set(nums)];
    const overloop = {};
    for(num of nums){
        overloop[num] ? overloop[num]++ : overloop[num] = 1;
    }
    
    function permutation(arr) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }
        for (let int = 0; int < disNums.length; int++) {
            const current = disNums[int];
            if(overloop[current] > arr.filter((num) => num === current).length){
                arr.push(current);
                permutation(arr);
                arr.pop();
            }
        }
    }

    permutation([]);

    return result;
};
/**
 * Runtime: 96 ms, faster than 82.11% of JavaScript online submissions for Permutations II.
 * Memory Usage: 44.2 MB, less than 54.00% of JavaScript online submissions for Permutations II.
 * Set 과 맵의 차이 기억하자
 */
 const permuteUnique = function (nums) {
    if(nums.length === 1){
        return [nums];
    }
    const result = [];
    const disNums = [...new Set(nums)];
    const overloop = {};
    for(num of nums){
        overloop[num] ? overloop[num]++ : overloop[num] = 1;
    }

    function permutation(arr) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }
        for (let int = 0; int < disNums.length; int++) {
            const current = disNums[int];
            if(overloop[current] > arr.filter((num) => num === current).length){
                arr.push(current);
                permutation(arr);
                arr.pop();
            }
        }
    }

    permutation([]);

    return result;
};
/**
 * Runtime: 80 ms, faster than 99.66% of JavaScript online submissions for Permutations II.
 * Memory Usage: 44.3 MB, less than 54.00% of JavaScript online submissions for Permutations II.
 */
 const permuteUnique = function (nums) {
    if(nums.length === 1){
        return [nums];
    }
    const result = [];
    const disNums = [...new Set(nums)];
    const overloop = {};
    for(num of nums){
        overloop[num] ? overloop[num]++ : overloop[num] = 1;
    }

    function permutation(arr) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }
        disNums.forEach((current) => {
            if(overloop[current] > arr.filter((num) => num === current).length){
                arr.push(current);
                permutation(arr);
                arr.pop();
            }
        })
    }

    permutation([]);

    return result;
};
/**
 * Runtime: 92 ms, faster than 91.14% of JavaScript online submissions for Permutations II.
 * Memory Usage: 44.8 MB, less than 48.89% of JavaScript online submissions for Permutations II.
 */
 const permuteUnique = function (nums) {
    if(nums.length === 1){
        return [nums];
    }
    const result = [];
    const disNums = [...new Set(nums)];
    const overloop = {};
    for(num of nums){
        overloop[num] ? overloop[num]++ : overloop[num] = 1;
    }

    function permutation(arr) {
        if (arr.length === nums.length) {
            result.push([...arr]);
            return;
        }
        disNums.forEach((current) => {
            if(overloop[current] > 0){
                arr.push(current);
                overloop[current]--;
                permutation(arr);
                overloop[current]++;
                arr.pop();
            }
        })
    }

    permutation([]);

    return result;
};
/**
 * Runtime: 92 ms, faster than 91.14% of JavaScript online submissions for Permutations II.
 * Memory Usage: 41.3 MB, less than 91.14% of JavaScript online submissions for Permutations II.
 * 예외처리가 들어갈때 마다 성능의 변동이 커진다. 이래서 예외처리는 어쩔수 없는 부분을 제외하면 안하는게 최고라는건가
 */
permuteUnique([1, 1, 2]);
permuteUnique([1, 2, 3]);