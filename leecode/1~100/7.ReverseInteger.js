/**
 * @param {number} x
 * @return {number}
 */

const reverse = function(x) {
    let result = x.toString().split('');
    let state = '';
    if(result[0] === '-'){
        state = result.shift();
    }
    result = parseInt(state + (result.reverse().join('')));

    if(result > 2**31 || -(2**31)  > result){
        return 0;
    } else {
        return result;
    }
};
/**
 * Runtime: 104 ms, faster than 35.45% of JavaScript online submissions for Reverse Integer.
 * Memory Usage: 40.1 MB, less than 13.16% of JavaScript online submissions for Reverse Integer.
 */

reverse(1534236469);