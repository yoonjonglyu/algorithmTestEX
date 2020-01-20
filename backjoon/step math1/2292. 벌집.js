(function main(N){
    let result;
    let row = 1;
    let cache = 6;
    let value = 1;

    for(let int=1; int <= N; int++){
        result = value;
        if(int >= row){
            value++;
            row = row + cache;
            cache = cache +6;
        } 
    }

    console.log(result);
})(8);
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    let N = parseInt(I);
    let result;
    let row = 1;
    let cache = 6;
    let value = 1;

    for(let int=1; int <= N; int++){
        result = value;
        if(int >= row){
            value++;
            row = row + cache;
            cache = cache +6;
        } 
    }

    console.log(result);
*/