(function main(N, M){
    const checkNumber = new Array(N).fill(false);
    const state = [];
    let result = '';

    function backTracking (count, index) {
        if(count === M){
            checkNumber[state[0]] = true;
            result += `${state.join(' ')}\n`;
            return;
        }

        for(let int = index; int <= N; int++){
            if(checkNumber[int]){
                continue;
            }
            state.push(int); // 노드를 배열에 넣는다.
            backTracking(count + 1, int); // 해당 노드에 속한 자식 노드들을 탐사
            state.pop(); // 탐사가 끝난 경우 탐사한 잎 노드에 대한 정보를 초기화
        }
    }

    backTracking(0, 1);

    console.log(result.trim());
})(3, 3);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
    const N = parseInt(input.shift());
    const M = parseInt(input.shift());
    const checkNumber = new Array(N).fill(false);
    const state = [];
    let result = '';

    function backTracking (count, index) {
        if(count === M){
            checkNumber[state[0]] = true;
            result += `${state.join(' ')}\n`;
            return;
        }

        for(let int = index; int <= N; int++){
            if(checkNumber[int]){
                continue;
            }
            state.push(int); // 노드를 배열에 넣는다.
            backTracking(count + 1, int); // 해당 노드에 속한 자식 노드들을 탐사
            state.pop(); // 탐사가 끝난 경우 탐사한 잎 노드에 대한 정보를 초기화
        }
    }

    backTracking(0, 1);

    console.log(result.trim());
*/