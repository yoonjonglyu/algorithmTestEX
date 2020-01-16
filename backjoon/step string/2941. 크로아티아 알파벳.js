(function main(I){
    const A = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
    let result = 0;
    let state = I;
    (function check(){
        A.map((key) => {
            let swich =state.indexOf(key);
            if(swich !== -1){
                result++;
                state = state.replace(key, " ");
                check();
            }
        })
    })();

    for(let int =0; int < state.length; int++){
        if(state[int] !== ' '){
            result++;
        }
    }

    console.log(result);
})("ljes=njak");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    const A = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
    let result = 0;
    let state = I;

    (function check(){
        A.map((key) => {
            let swich =state.indexOf(key);
            if(swich !== -1){
                result++;
                state = state.replace(key, " ");
                check();
            }
        })
    })();

    for(let int =0; int < state.length; int++){
        if(state[int] !== ' '){
            result++;
        }
    }
    
    console.log(result);
*/