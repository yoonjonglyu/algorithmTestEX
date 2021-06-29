/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
    const result = [];
    const checkOverLoop = new Map();

    for (let int = 0; int < n; int++) { // 1차 순환은 결국 N만큼 존재한다.
        const state = new Array(n).fill(new Array(n).fill('.').join());
        state[0][int] = 'Q'; //모든 열에는 하나의 Q만 있을 수 있다.
        // 백트래킹 N퀸 검증
        const key = state.toString();
        if (!checkOverLoop.has(key)) {
            checkOverLoop.set(key, true);
            result.push(state);
        }
    }
};