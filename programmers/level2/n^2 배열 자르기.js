// 정수 n, left, right가 주어집니다. 다음 과정을 거쳐서 1차원 배열을 만들고자 합니다.

// n행 n열 크기의 비어있는 2차원 배열을 만듭니다.
// i = 1, 2, 3, ..., n에 대해서, 다음 과정을 반복합니다.
// 1행 1열부터 i행 i열까지의 영역 내의 모든 빈 칸을 숫자 i로 채웁니다.
// 1행, 2행, ..., n행을 잘라내어 모두 이어붙인 새로운 1차원 배열을 만듭니다.
// 새로운 1차원 배열을 arr이라 할 때, arr[left], arr[left+1], ..., arr[right]만 남기고 나머지는 지웁니다.
// 정수 n, left, right가 매개변수로 주어집니다. 주어진 과정대로 만들어진 1차원 배열을 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ n ≤ 107
// 0 ≤ left ≤ right < n2
// right - left < 105
// 입출력 예
// n	left	right	result
// 3	2	5	[3,2,2,3]
// 4	7	14	[4,3,3,3,4,4,4,4]

function solution(n, left, right) { // 실패 (signal: aborted (core dumped))
    return new Array(n).fill(true)
        .map((_, rdx) =>
            new Array(n).fill(true)
                .map((_, cdx) => rdx > 0 && cdx < rdx ?
                    rdx + 1 :
                    cdx + 1
                )
        )
        .flat()
        .slice(left, right + 1);
}
function solution(n, left, right) { // 12 - 20 시간초과
    return [true].reduce((result, _) => {
        let idx = 0;
        new Array(n).fill(true)
            .some((_, rdx) =>
                new Array(n).fill(true)
                    .some((_, cdx) => {
                        if (result.length === right - left + 1) return true;
                        if (idx >= left && idx <= right) {
                            rdx > 0 && cdx < rdx ?
                                result.push(rdx + 1) :
                                result.push(cdx + 1)
                        }
                        idx++;
                    })
            )

        return result;
    }, []);
}

function solution(n, left, right) {
    return [true].reduce((result, _) => {
        for (let idx = left; idx <= right; idx++) {
            result.push(Math.max(idx % n, Math.floor(idx / n)) + 1);
        }
        return result;
    }, []);
}
