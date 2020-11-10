/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    let result = 0;
    let state = parseInt(s.split('').join(''));
    if(state >= 2147483648){
        result = 2147483647;
    } else if (state <= -2147483648){
        result = -2147483648;
    } else if (isNaN(state)){
        result = 0;
    } else {
        result = state;
    }

    return result;
};
/**
 * Runtime: 92 ms, faster than 91.71% of JavaScript online submissions for String to Integer (atoi).
 * Memory Usage: 40.5 MB, less than 5.30% of JavaScript online submissions for String to Integer (atoi).
 * 뭔가 돌릴때마다 조금씩 수치가 변하더라 104ms~ 92ms까지나온다 0.3mb정도 달라지고
 * 근데 왜 이리 쉬운 문제가 미디움 난이도에 통과율이 15.5%일까? 이해가 안간다.
 */
myAtoi("42");
myAtoi("-42");
myAtoi("   -42");
myAtoi("4193 with words");
myAtoi("words and 987");
myAtoi("-91283472332");