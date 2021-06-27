/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    return x ** n;
};
/**
 * Runtime: 80 ms, faster than 71.97 % of JavaScript online submissions for Pow(x, n).
 * Memory Usage: 39.4 MB, less than 34.88 % of JavaScript online submissions for Pow(x, n).
 */
const myPow = function (x, n) {
    if(n < 0){
        x = 1/x;
        n = -n;
    }

    function getResult (x, n) {
        if(x === 1 || n === 0){
            return 1;
        }
        if(n === 1){
            return x;
        }
        if(n % 2 === 0){
            const state = getResult(x, n / 2);
            return state * state;
        } else {
            const state = getResult(x, (n - 1) / 2);
            return state * state * x;
        }
    }

    return getResult(x, n);
};
/**
 * Runtime: 72 ms, faster than 95.01% of JavaScript online submissions for Pow(x, n).
 * Memory Usage: 40.2 MB, less than 14.82% of JavaScript online submissions for Pow(x, n).
 */
