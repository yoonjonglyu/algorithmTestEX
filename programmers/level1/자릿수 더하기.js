// 문제 설명
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

// 제한사항
// N의 범위 : 100,000,000 이하의 자연수
// 입출력 예
// N	answer
// 123	6
// 987	24
// 입출력 예 설명
// 입출력 예 #1
// 문제의 예시와 같습니다.

// 입출력 예 #2
// 9 + 8 + 7 = 24이므로 24를 return 하면 됩니다.

function solution(n) {
    return n.toString()
        .split('')
        .reduce((result, num) => result + parseInt(num), 0);
}
/* 문자열로 변환 금지 일시 */
/* 
    leetcode에서 비슷한 문제를 형변환 금지 조건으로 풀어본 적 있는데
    그렇게도 다시 한번 풀어보자.
*/
function solution(n) {
    let result = n % 10;
    n = (n - (n % 10)) / 10;
    
    while(n > 0){
        result += n % 10;
         n = (n - (n % 10)) / 10;
    }
    return result;
}
