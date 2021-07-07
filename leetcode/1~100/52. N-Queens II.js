/**
 * @param {number} n
 * @return {number}
 */
 const totalNQueens = function(n) { // 기존 방식 그대로 사용할 경우
    const resultMap = new Map();
    for(let idx = 0; idx < n; idx++){
        const state = new Array(n).fill().map(() => new Array(n).fill('.'));
        state[0][idx] = "Q";
        checkQueen(state, 1);
    }

    function checkQueen(state, count){
        if (count === n) {
            getResult(state);
            return;
        }

        for (let col = 0; col < n; col++) {
            let isCheck = true;
            for (let y = 0; y < count; y++) {
                if (state[y][col] === "Q") isCheck = false;
            }
            if (isCheck) for (let y = count - 1, x = col - 1; y >= 0 && x >= 0; y--, x--) {
                if (state[y][x] === "Q") isCheck = false;
            }
            if (isCheck) for (let y = count - 1, x = col + 1; y >= 0 && x <= n - 1; y--, x++) {
                if (state[y][x] === "Q") isCheck = false;
            }
            if (isCheck) {
                state[count][col] = 'Q';
                checkQueen(state, (count + 1));
                state[count][col] = '.';
            }
        }
    }
    function getResult (state) {
        const key = state.toString();
        if(!resultMap.has(key)){
            resultMap.set(key, true);
        }
    }

    return resultMap.size;
};

/**
 * Runtime: 80 ms, faster than 83.15% of JavaScript online submissions for N-Queens II.
 * Memory Usage: 41.1 MB, less than 21.35% of JavaScript online submissions for N-Queens II.
 * 빠른것 같지만 평균이 느리다. 다른 방식으로 풀어야한다.
 */