/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) { // 하다보니 스택 써야한다는걸 느꼈는데 다른 방식으로 얼마나 차이 날까 해서 해봤다.
    let result = true;
    let state = s.replace(/\{\}/g, '').replace(/\[\]/g, '').replace(/\(\)/g, '');
    let loop = 0;
    while(state.length > 0 && loop < 1000000){
        state = state.replace(/\{\}/g, '').replace(/\[\]/g, '').replace(/\(\)/g, '');
        loop++;
    }

    if(state.length > 0) {
        result = false;
    }

    return result;
};
/**
 * Runtime: 9244 ms, faster than 5.32% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 44.6 MB, less than 5.55% of JavaScript online submissions for Valid Parentheses.
 */
const isValid = function(s) {
    let result = true;
    let state = s.replace(/\{\}/g, '').replace(/\[\]/g, '').replace(/\(\)/g, '');
    let loop = 0;
    while(state.length > 0 && loop < s.length / 2){
        state = state.replace(/\{\}/g, '').replace(/\[\]/g, '').replace(/\(\)/g, '');
        loop++;
    }

    if(state.length > 0) {
        result = false;
    }

    return result;
};

/**
 * Runtime: 96 ms, faster than 14.15% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 44.4 MB, less than 5.55% of JavaScript online submissions for Valid Parentheses.
 */

const isValid = function(s) {
    let result = true;
    let state = s;
    let loop = 0;
    while(state.length > 0 && loop < s.length / 2){
        state = state.replace(/\{\}/g, '').replace(/\[\]/g, '').replace(/\(\)/g, '');
        loop++;
    }

    if(state.length > 0) {
        result = false;
    }

    return result;
};
/**
 * Runtime: 84 ms, faster than 37.15% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 44.5 MB, less than 5.55% of JavaScript online submissions for Valid Parentheses.
 */
/**
 * 스택 방식 switch문으로 비슷하게 해볼려고 했으나 입출입 순서를 기억하려니 너무 복잡했다.
 */
const isValid = function(s) {
    const brackets = {
        '(' : ')',
        '{' : '}',
        '[' : ']'
    };
    const stack = [];
    for (let int = 0; int < s.length; int++) {
        if(brackets[s[int]] !== undefined) {
            stack.push(s[int]);
        }
        else {
            if (brackets[stack[stack.length-1]] === s[int]) {
                stack.pop();
            }
            else {
                return false;
            }
        }
    };      
    return !stack.length;
};

/**
 * Runtime: 76 ms, faster than 81.16% of JavaScript online submissions for Valid Parentheses.
 * Memory Usage: 38.6 MB, less than 5.55% of JavaScript online submissions for Valid Parentheses.
 */
isValid("()");
isValid("()[]{}");
isValid("(]");
isValid("([)]");
isValid("{[]}");
isValid("{][}");
isValid("{}}}");