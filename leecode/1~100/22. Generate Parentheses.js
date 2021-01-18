/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) { // for문 두개로 해결할 방법은 없을까?
    const result = [];
    const left = "(";
    const right = ")";

    for(let int = 0; int < n; int++){
        let state = '';

        for(let int2 = 0; int2 < (n * 2); int2++){
            if((int2 === int) === state.length){
                state += left;
            } else {
                state += right;
            }
        }

        result.push(state);
    }

    return result;
};
/** 
 * backtracking 사용한 것 
 * 백트래킹을 반복문으로 대체하는 것은 코드 가독성이나 효율성 면에서는 의미 없을지 몰라도
 * 좀더 근본적인 이해에는 도움이 될거같다. 조건문이랑 반복문만 사용해서 알고리즘을 대체할 수 없을까?
 * 결국 현시대의 컴퓨터 코드는 0,1 이진 구조라는게 원칙이니 큰 개념을 조각 조각 작은 개념들로 치환하지 못할리가 없을텐데 말이다.
 */
const generateParenthesis = function(n) {
    const result = [];
    const left = "(";
    const right = ")";

    allSet("", 0, 0, n);

    function allSet(current, start, end, max){
        if(current.length === (n * 2)){
            result.push(current);
            return;
        }

        if(end < start){
            allSet((current + right), start, (end + 1), max);
        }
        if(start < max){
            allSet((current + left), (start + 1), end, max);
        }

    }

    return result;
};
/**
 * Runtime: 64 ms, faster than 99.78% of JavaScript online submissions for Generate Parentheses.
 * Memory Usage: 38.1 MB, less than 100.00% of JavaScript online submissions for Generate Parentheses.
 */

generateParenthesis(1);
generateParenthesis(3);