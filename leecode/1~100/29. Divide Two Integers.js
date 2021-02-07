/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) { /** 결과는 나오지만 시간제한에 걸림 */
    let dived = Math.abs(dividend);
    const divsr = Math.abs(divisor);
    let result = 0;

    while(dived >= divsr){
        dived -= divsr;
        result++;
    }

    if(divisor < 0 !== dividend < 0){
        result = -result;
    }

    if(result > 2147483647){
        result = 2147483647;
    }
    if(result < -2147483648){
        result = -2147483648;
    }

    return result;
};
const divide = function(dividend, divisor) {
    let dived = Math.abs(dividend);
    const divsr = Math.abs(divisor);
    let result = 0;

    while(dived >= divsr){
        let divState = divsr;
        let count = 1;

        while(dived >= (divState + divState)){
            divState += divState;
            count += count;
        }

        dived -= divState;
        result += count;
    }

    if(divisor < 0 !== dividend < 0){
        result = -result;
    }

    if(result > 2147483647){
        result = 2147483647;
    }
    if(result < -2147483648){
        result = -2147483648;
    }

    return result;
};
/**
 * Runtime: 96 ms, faster than 84.30% of JavaScript online submissions for Divide Two Integers.
 * Memory Usage: 39.8 MB, less than 90.79% of JavaScript online submissions for Divide Two Integers.
 */
/**
 * 애초에시프트 연산을 사용해서 풀라고 만든 문제 였나보다 평소 고려하는 영역이 아니였는지라 공부 차원에서 해봤다.
 */
const divide = function(dividend, divisor) {
    let dived = Math.abs(dividend);
    const divsr = Math.abs(divisor);
    let result = 0;

    for(let int = 31; int >= 0; int--){
        if((dived >>> int) >= divsr){
            dived -= divsr << int;
            result |= 1 << int;
        }
    }
    result >>>= 0;

    if(divisor < 0 !== dividend < 0){
        result = -result;
    }

    if(result > 2147483647){
        result = 2147483647;
    }
    if(result < -2147483648){
        result = -2147483648;
    }

    return result;
};
/**
 * Runtime: 96 ms, faster than 84.30% of JavaScript online submissions for Divide Two Integers.
 * Memory Usage: 39.8 MB, less than 90.79% of JavaScript online submissions for Divide Two Integers.
 * 어렵다. 제출한 풀이를 분석해서 왜 그렇게 되는지는 알겠지만 비슷한 문제앞에서 비트연산을 사용해야한다고 생각이 들거 같진않다.
 * 문제를 바라보는 시선 중 하나로 비트연산을 추가할려면 좀 더 개인적으로 공부해야겠다.
 */

divide(10, 3);
divide(7, -3);
divide(0, 1);
divide(1, 1);
divide(-1, 1);
divide(-1, -1);
divide(-2147483648, -1);
divide(2147483648, -1);
divide(-2147483648, 1);
divide(-2147483648, 2);
divide(-2147483648, -3);