/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
    const result = new Map();

    strs.forEach((str) => {
        const state = str.split('').sort().join();
        if (!result.has(state)) {
            result.set(state, []);
        }
        result.get(state).push(str);
    });

    return Array.from(result.values());
};
/**
 * Runtime: 116 ms, faster than 97.70% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 49.7 MB, less than 63.52% of JavaScript online submissions for Group Anagrams.
 */
const groupAnagrams = function (strs) {
    const result = {};

    strs.forEach((str) => {
        const state = str.split('').sort().join();
        if (result[state] === undefined) {
            result[state] = [];
        }
        result[state].push(str);
    });

    return Object.values(result);
};
/**
 * Runtime: 136 ms, faster than 65.91% of JavaScript online submissions for Group Anagrams.
 * Memory Usage: 50.7 MB, less than 28.73% of JavaScript online submissions for Group Anagrams.
 */