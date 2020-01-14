(function main(N, I){
    const result = [];
    for(let int=0; int < N; int++){
        let state = I[int].split(' ');
        let overloop = parseInt(state[0]);
        state = state[1];
        result[int] = '';

        for(let int2=0; int2 < state.length; int2++){
            for(let int3 =0; int3 < overloop; int3++){
                result[int] = result[int]+ state[int2];
            }
        }
    }
    result.map((res) => console.log(res));
})(2, ["3 ABC", "5 /HTP"]);
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(I.shift());

    const result = [];
    for(let int=0; int < N; int++){
        let state = I[int].split(' ');
        let overloop = parseInt(state[0]);
        state = state[1];
        result[int] = '';

        for(let int2=0; int2 < state.length; int2++){
            for(let int3 =0; int3 < overloop; int3++){
                result[int] = result[int]+ state[int2];
            }
        }
    }
    result.map((res) => console.log(res));
*/