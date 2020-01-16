(function main(N, I){
    let result = 0;

    for(let idx=0; idx < N; idx++){
        let swich = true;
        let key = I[idx].trim();
        if(key.length > 2){
            for(let int=1; int <= key.length; int++){
                if(key[int-1] !== key[int] && key.lastIndexOf(key[int-1]) > int){
                    swich = false;
                }
            }
        }
        if(swich === true){
            result++;
        }
    }

    console.log(result);
})(4, ["happy", "new", "year", "aba"]);
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(I.shift());
    let result = 0;

    for(let idx=0; idx < N; idx++){
        let swich = true;
        let key = I[idx].trim();
        if(key.length > 2){
            for(let int=1; int <= key.length; int++){
                if(key[int-1] !== key[int] && key.lastIndexOf(key[int-1]) > int){
                    swich = false;
                }
            }
        }
        if(swich === true){
            result++;
        }
    }

    console.log(result);
*/