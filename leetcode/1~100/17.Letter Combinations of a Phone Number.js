/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
    const phoneDigits = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };
    const result = [];

    const combination = (digit, arrs) => { // 반복문이나 조건문으로도 구현가능하긴 하지만 그러자니 너무 귀찮아서 재귀 구조로 동적 계획법으로 구현
        let result = [];

        arrs.shift().forEach((child) => {
            result.push(digit + child);
        });
        
        
        if(arrs.length > 0){
            let state = [];

            result.forEach((parent) => {
                state.push(...combination(parent, Array.from(arrs)));
            });

            result = state;
        }

        return result;
    };

    if (digits.length > 1) {
        let state = digits.split('').map((digit) => { return phoneDigits[digit] });
        state.shift().forEach((digit) => {
                result.push(...combination(digit, Array.from(state)));
        });
    } else if (digits.length > 0) {
        phoneDigits[digits].forEach((digit) => {
            result.push(digit);
        })
    }

    return result;
};
/**
 * Runtime: 76 ms, faster than 68.73% of JavaScript online submissions for Letter Combinations of a Phone Number.
 * Memory Usage: 38.8 MB, less than 12.06% of JavaScript online submissions for Letter Combinations of a Phone Number.
 */
const letterCombinations = function (digits) {
    const phoneDigits = {
        2: ["a", "b", "c"],
        3: ["d", "e", "f"],
        4: ["g", "h", "i"],
        5: ["j", "k", "l"],
        6: ["m", "n", "o"],
        7: ["p", "q", "r", "s"],
        8: ["t", "u", "v"],
        9: ["w", "x", "y", "z"]
    };
    const result = [];

    const combination = (digit, arrs) => { // 반복문이나 조건문으로도 구현가능하긴 하지만 그러자니 너무 귀찮아서 재귀 구조로 동적 계획법으로 구현
        let result = [];

        arrs.shift().forEach((child) => {
            result.push(digit + child);
        });
        
        
        if(arrs.length > 0){
            const state = [];

            result.forEach((parent) => {
                state.push(...combination(parent, Array.from(arrs)));
            });

            result = state;
        }

        return result;
    };

    if (digits.length > 1) {
        const state = digits.split('').map((digit) => { return phoneDigits[digit] });
        state.shift().forEach((digit) => {
                result.push(...combination(digit, Array.from(state)));
        });
    } else if (digits.length > 0) {
        result.push(...phoneDigits[digits]);
    }

    return result;
};
/**
 * Runtime: 68 ms, faster than 96.45% of JavaScript online submissions for Letter Combinations of a Phone Number.
 * Memory Usage: 38.8 MB, less than 53.73% of JavaScript online submissions for Letter Combinations of a Phone Number.
 */


letterCombinations("234");
letterCombinations("23");
letterCombinations("2");