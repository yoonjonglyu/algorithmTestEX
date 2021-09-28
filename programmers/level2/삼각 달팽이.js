// 정수 n이 매개변수로 주어집니다. 다음 그림과 같이 밑변의 길이와 높이가 n인 삼각형에서 맨 위 꼭짓점부터 반시계 방향으로 달팽이 채우기를 진행한 후, 첫 행부터 마지막 행까지 모두 순서대로 합친 새로운 배열을 return 하도록 solution 함수를 완성해주세요.

// examples.png

// 제한사항
// n은 1 이상 1,000 이하입니다.
// 입출력 예
// n	result
// 4	[1,2,9,3,10,8,4,5,6,7]
// 5	[1,2,12,3,13,11,4,14,15,10,5,6,7,8,9]
// 6	[1,2,15,3,16,14,4,17,21,13,5,18,19,20,12,6,7,8,9,10,11]

function solution(n) {
    const result = new Array(n).fill(true).map((_) => []);
    const max = result.reduce((result, _, idx) => result + idx + 1, 0);

    let rdx = 0;
    let cdx = 0;
    let direct = "D";
    for (let int = 1; int <= max; int++) {
        result[rdx][cdx] = int;
        if (direct === "D") {
            if (result[rdx + 1] !== undefined && !result[rdx + 1][cdx]) {
                rdx++;
            } else {
                direct = "R";
                cdx++;
            }

        } else if (direct === "R") {
            if (cdx < rdx && !result[rdx][cdx + 1]) {
                cdx++;
            } else {
                if (cdx - 1 >= 0) cdx--;
                if (rdx - 1 >= 0) rdx--;
                direct = "U";
            }
        } else if (direct === "U") {
            if (!result[rdx - 1][cdx - 1]) {
                rdx--;
                cdx--;
            } else {
                rdx++;
                direct = "D";
            }
        }
    }

    return result.reduce((result, current) => {
        current.forEach((num) => result.push(num));
        return result;
    }, []);
}

/* 다른 사람 풀이 큰 n의 경우 내가 짠 코드가 효율적이고 작은 수의 경우 해당 코드가 더 효율적이다.  */

function solution(n) { // 삼각형의 성질을 잘 활용했다. 따로 분석해보자.
    let a = Array(n).fill().map((_, i) => Array(i + 1).fill())
    let row = -1
    let col = 0
    let fill = 0
    for (let i = n; i > 0; i -= 3) {
        a[++row][col] = ++fill
        for (let j = 0; j < i - 1; j++) a[++row][col] = ++fill
        for (let j = 0; j < i - 1; j++) a[row][++col] = ++fill
        for (let j = 0; j < i - 2; j++) a[--row][--col] = ++fill
    }
    return a.flat()
}
