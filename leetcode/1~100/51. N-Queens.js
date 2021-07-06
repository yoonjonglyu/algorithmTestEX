/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
    const result = [];
    const checkOverLoop = new Map();
    for (let idx = 0; idx < n; idx++) { // 1차 순환은 결국 N만큼 존재한다.
        const state = new Array(n).fill().map(() => new Array(n).fill('.')); // 복사문제
        state[0][idx] = 'Q'; //첫 퀸
        checkQueen(state, 1);
    }

    function checkQueen(state, count) {
        if (count === n) {
            checkResult(state);
            return;
        }

        for (let col = 0; col < n; col++) {
            if (isValidQueen(count, col, state)) {
                state[count][col] = 'Q';
                checkQueen(state, (count + 1));
                state[count][col] = '.';
            }
        }
    }
    function isValidQueen(row, col, state) {
        for (let y = 0; y < row; y++) { // 같은 Y선 윗줄에  "Q"가 있는지 체크한다. 아래는 당연히 없다.
            if (state[y][col] === "Q") return false;
        }
        for (let y = row - 1, x = col - 1; y >= 0 && x >= 0; y--, x--) { // 같은 XY 대각선으로 있는지 체크한다. 당연히 아래는 없다.
            if (state[y][x] === "Q") return false;
        }
        for (let y = row - 1, x = col + 1; y >= 0 && x <= n - 1; y--, x++) { // 같은 XY 대각선으로 있는지 체크한다. 당연히 아래쪽은 없다.
            if (state[y][x] === "Q") return false;
        }
        return true;
    }
    function checkResult(state) {
        const key = state.toString();
        if (!checkOverLoop.has(key)) {
            checkOverLoop.set(key, true);
            result.push(state.map(arr => arr.join('')));
        }
    }

    return result;
};
/**
 * Runtime: 84 ms, faster than 94.08% of JavaScript online submissions for N-Queens.
 * Memory Usage: 40.9 MB, less than 72.59% of JavaScript online submissions for N-Queens.
 */
const solveNQueens = function (n) {
    const result = [];
    const checkOverLoop = new Map();
    for (let idx = 0; idx < n; idx++) { // 1차 순환은 결국 N만큼 존재한다.
        const state = new Array(n).fill().map(() => new Array(n).fill('.')); // 복사문제
        state[0][idx] = 'Q'; //첫 퀸
        checkQueen(state, 1);
    }

    function checkQueen(state, count) {
        if (count === n) {
            checkResult(state);
            return;
        }

        for (let col = 0; col < n; col++) {
            let isCheck = true;
            for (let y = 0; y < count; y++) { // 같은 Y선 윗줄에  "Q"가 있는지 체크한다. 아래는 당연히 없다.
                if (state[y][col] === "Q") isCheck = false;
            }
            if (isCheck) for (let y = count - 1, x = col - 1; y >= 0 && x >= 0; y--, x--) { // 같은 XY 대각선으로 있는지 체크한다. 당연히 아래는 없다.
                if (state[y][x] === "Q") isCheck = false;
            }
            if (isCheck) for (let y = count - 1, x = col + 1; y >= 0 && x <= n - 1; y--, x++) { // 같은 XY 대각선으로 있는지 체크한다. 당연히 아래쪽은 없다.
                if (state[y][x] === "Q") isCheck = false;
            }
            if (isCheck) {
                state[count][col] = 'Q';
                checkQueen(state, (count + 1));
                state[count][col] = '.';
            }
        }
    }
    function checkResult(state) {
        const key = state.toString();
        if (!checkOverLoop.has(key)) {
            checkOverLoop.set(key, true);
            result.push(state.map(arr => arr.join('')));
        }
    }

    return result;
};
/**
 * Runtime: 72 ms, faster than 99.84% of JavaScript online submissions for N-Queens.
 * Memory Usage: 40.6 MB, less than 90.19% of JavaScript online submissions for N-Queens.
 */