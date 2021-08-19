// 문제 설명
// 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.

// 제한 조건
// n은 길이 10,000이하인 자연수입니다.
// 입출력 예
// n	return
// 3	"수박수"
// 4	"수박수박"

function solution(n) {
    return new Array(n).fill(true)
        .reduce((result, _, idx) => idx % 2 ? result + "박" : result + "수", '');
}
/* 다른 사람 풀이 */
function solution(n) { // 당연한 말이지만 배열만들어서 한거보다 빠르다.
    return '수박'.repeat(n / 2) + (n % 2 === 1 ? '수' : '');
}
