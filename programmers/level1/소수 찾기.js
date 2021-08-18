// 문제 설명
// 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

// 소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
// (1은 소수가 아닙니다.)

// 제한 조건
// n은 2이상 1000000이하의 자연수입니다.
// 입출력 예
// n	result
// 10	4
// 5	3
// 입출력 예 설명
// 입출력 예 #1
// 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환

// 입출력 예 #2
// 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환

function solution(n) {
    const result = new Array(n + 1).fill(true);

    for (let num = 2; (num * num) <= n; num++) {
        if (result[num]) {
            for (let int = (num * 2); int <= n; int += num) {
                result[int] = false;
            }
        }
    }

    return (result.filter((prime) => prime !== false).length - 2);
}

/* 다른 사람 풀이 Set 더 효율적이진 않음 */
function solution(n) { // array로는 통과 못하는 것을 Set 구조의 효율성으로 통과했다.
    const s = new Set(); // Set의 효율성에 대해서 고민해봐야할 요소
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    for(let j=3; j<Math.sqrt(n); j++){
        if(s.has(j)){
             for(let k=j*2; k<=n; k+=j){    
                s.delete(k);
             }
        }
    }
    return s.size;
}
