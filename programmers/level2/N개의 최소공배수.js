// 문제 설명
// 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다. 예를 들어 2와 7의 최소공배수는 14가 됩니다. 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다. n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.

// 제한 사항
// arr은 길이 1이상, 15이하인 배열입니다.
// arr의 원소는 100 이하인 자연수입니다.
// 입출력 예
// arr	result
// [2,6,8,14]	168
// [1,2,3]	6

function solution(arr) {
    const max = arr.reduce((result, current) => result * current);
    for (let int = Math.max(...arr); int <= max; int++) {
        if (checkNum(int)) {
            return int;
        }
    }

    function checkNum(int) {
        let result = true;
        arr.forEach((num) => {
            if (int % num !== 0) result = false;
        });
        return result;
    }
}
/* 다른 사람 풀이 빅오를 확 줄였다. 최소 공배수를 구하는게 최대 공약수를 바로 구하는거 보다 이득인가보다 */
function solution(arr) {
    return arr.reduce((a, b) => a * b / gcd(a, b));

    function gcd(a, b) {
        return a % b ? gcd(b, a % b) : b;
    }
}
