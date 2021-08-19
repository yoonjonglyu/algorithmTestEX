// 문제 설명
// 문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.

// 제한 사항
// str은 길이 1 이상인 문자열입니다.
// 입출력 예
// s	return
// "Zbcdefg"	"gfedcbZ"
function solution(s) {
    return s.split('').sort((a, b) => {
        if (a.charCodeAt() > b.charCodeAt()) return -1; // 자동 형변환 하기에 charCodeAt는 사실 필요가 없다.
        if (a.charCodeAt() < b.charCodeAt()) return 1;
    }).join('');
}
/* 다른 사람 풀이 */
function solution(s) { // a - b로 정렬하고 그걸 reverse시키는 방법도 있지만 효율적이진 않다.
    return s
        .split("")
        .sort()
        .reverse() // 고정 관념을 한번쯤 생각해보자.
        .join("");
}
