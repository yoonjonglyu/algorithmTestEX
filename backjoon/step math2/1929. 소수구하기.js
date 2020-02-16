(function main(I){
    const state = I.split(' ');
    const M = parseInt(state[0]);
    const N = parseInt(state[1]);
    let result = new Array(N+1).fill(true);
    
    for(let int= 2; int < N+1; int++){
        if(result[int] === true){
            result[int] = int;
            for(let int2 = int*int; int2 < N+1; int2++){
                if(int2 % int === 0){
                    result[int2] = false;
                } 
            }
        }
    }

    result.map((ans) => {
        if(typeof(ans) === "number" && ans >= M){
            console.log(ans);
        }
    });
})("3 16");

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    const state = I.split(' ');
    const M = parseInt(state[0]);
    const N = parseInt(state[1]);
    let result = new Array(N+1).fill(true);
    
    for(let int= 2; int < N+1; int++){
        if(result[int] === true){
            result[int] = int;
            for(let int2 = int*int; int2 < N+1; int2++){
                if(int2 % int === 0){
                    result[int2] = false;
                } 
            }
        }
    }

    result.map((ans) => {
        if(typeof(ans) === "number" && ans >= M){
            console.log(ans);
        }
    });
})("3 16");
*/