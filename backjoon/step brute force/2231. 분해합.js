(function main(N){
    const result = [];
    for(let int = 0; int < N; int++){
        let temp = int;
        const state = temp.toString();
        const length = state.length;
        for(let int2 =0; int2 < length; int2++){
            temp = temp + parseInt(state[int2]);
        }
        if(temp === N){
            result.push(state);
            break;
        }
    }

    if(result.length === 0){
        result.push(0);
    }
    
    result.map(ans => console.log(ans));
})(0);
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    let N = fs.readFileSync('/dev/stdin').toString().trim();
    N = parseInt(N);
    const result = [];

    for(let int = 0; int < N; int++){
        let temp = int;
        const state = temp.toString();
        const length = state.length;
        for(let int2 =0; int2 < length; int2++){
            temp = temp + parseInt(state[int2]);
        }
        if(temp === N){
            result.push(state);
            break;
        }
    }

    if(result.length === 0){
        result.push(0);
    }
    
    result.map(ans => console.log(ans));
*/