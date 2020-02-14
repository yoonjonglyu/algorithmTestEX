(function main(M, N){
    const result = [0];
    const state = [];

    for(let int = M; int <= N; int++){
        if(int !== 1){
            let swich = true;
            for(let int2=2; int2 < int; int2++){
                if(int%int2 === 0){
                    swich = false
                    break;
                }
            }
            if(swich === true){
                state.push(int);
            }
        }
    }

    if(state.length > 0){
        state.map(number => result[0] = result[0] + number);
        result[1] = state[0];
    } else {
        result[0] = -1;
    }

    result.map(ans => console.log(ans));
})(60, 100);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const M = parseInt(input[0]);
    const N = parseInt(input[1]);
    const numbers = input[1];
    const result = [0];
    const state = [];

    for(let int = M; int <= N; int++){
        if(int !== 1){
            let swich = true;
            for(let int2=2; int2 < int; int2++){
                if(int%int2 === 0){
                    swich = false
                    break;
                }
            }
            if(swich === true){
                state.push(int);
            }
        }
    }

    if(state.length > 0){
        state.map(number => result[0] = result[0] + number);
        result[1] = state[0];
    } else {
        result[0] = -1;
    }

    result.map(ans => console.log(ans));
*/