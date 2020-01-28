(function main(N){
    let result;
    let row = 1;
    let col = 1;
    let state = 1;
    let swich = true;
    for(let int=1; int< N; int++){
        if(swich === true){
            col++;
            if(state-1 !== 0){
                state--;
            }
        } else {
            state++;
            if(col-1 !== 0){
                col--;
            }
        }
        if(col > row){
            row++;
            swich = false;
        } else if(state > row){
            row++;
            swich = true;
        }
    }
    result = state+"/"+col;

    console.log(result);
})(14);
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    let N = parseInt(I);
    let result;
    let row = 1;
    let col = 1;
    let state = 1;
    let swich = true;
    for(let int=1; int< N; int++){
        if(swich === true){
            col++;
            if(state-1 !== 0){
                state--;
            }
        } else {
            state++;
            if(col-1 !== 0){
                col--;
            }
        }
        if(col > row){
            row++;
            swich = false;
        } else if(state > row){
            row++;
            swich = true;
        }
    }
    result = state+"/"+col;

    console.log(result);
*/