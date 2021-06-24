/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = function(s) {
    let result = 0;
    let state = parseInt(s);
    
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
 * Runtime: 88 ms, faster than 96.46% of JavaScript online submissions for String to Integer (atoi).
 * Memory Usage: 39.2 MB, less than 5.30% of JavaScript online submissions for String to Integer (atoi)..
 * 뭔가 돌릴때마다 조금씩 수치가 변하더라 104ms~ 92ms까지나온다 0.3mb정도 달라지고
 * 근데 왜 이리 쉬운 문제가 미디움 난이도에 통과율이 15.5%일까? 이해가 안간다.
 */
/**
 * !parseInt 애초에 그런 조건은 없다. 리코드 커뮤니티에서 누가 parseInt걸면 안된다고 태클걸길래 해봤음
 */
const myAtoi = function(s) {
    let result = 0;
    let state = s.trim();
    let int = 0;
    if(state[0] === "-" || state[0] === "+"){
        int++;
    }
    while(isNaN(state[int] - 0) === false){
        if(state[int] === " "){
            break;
        } 
        int++;
    }
    state = state.substring(0, int);

    if(state >= 2147483648){
        result = 2147483647;
    } else if (state <= -2147483648){
        result = -2147483648;
    } else if (isNaN(state - 0)){
        result = 0;
    } else {
        result = state;
    }

    return (result - 0);
};
/**
 * Runtime: 84 ms, faster than 98.71% of JavaScript online submissions for String to Integer (atoi).
 * Memory Usage: 41.1 MB, less than 5.30% of JavaScript online submissions for String to Integer (atoi).
 * 112ms~ 84ms
 */
myAtoi("-+12")
myAtoi("  -0012a42");
myAtoi("42");
myAtoi("-42");
myAtoi("   -42");
myAtoi("4193 with words");
myAtoi("words and 987");
myAtoi("-91283472332");
