(function main(N, numbers){
    const result = [];
    let index = 0;
    for(let int=0; int < N; int++){
        let row = parseInt(numbers[index]);
        let col = parseInt(numbers[index+1]);
        index = index + 2;
        let state = [];
        for(let int2=0; int2 < col; int2++){
            state[int2] = int2 + 1;
        }
        for(let int2=0; int2 < row; int2++){
            for(let int3=1; int3 < col; int3++){
                state[int3] = state[int3] + state[int3-1];
            }
        }
        result.push(state[col-1]);
    }
    result.map(ans => console.log(ans));
})(2, ["3", "4", "2", "3"]);
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    const result = [];
    let index = 0;
    for(let int=0; int < N; int++){
        let row = parseInt(numbers[index]);
        let col = parseInt(numbers[index+1]);
        index = index + 2;
        let state = [];
        for(let int2=0; int2 < col; int2++){
            state[int2] = int2 + 1;
        }
        for(let int2=0; int2 < row; int2++){
            for(let int3=1; int3 < col; int3++){
                state[int3] = state[int3] + state[int3-1];
            }
        }
        result.push(state[col-1]);
    }
    result.map(ans => console.log(ans));
*/