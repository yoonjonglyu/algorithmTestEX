(function main(N){
    let index = 0;
    if(N < 100){
        index = N;
    } else {
        index = 99;
        for(let int = 100; int <= N; int++){
            let H = parseInt(int/100);
            let T = parseInt(int%100/10);
            let O = int%100%10;
            if(H-T === T-O){
                index++;
            }
        }
    }
    console.log(index);
})(210);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();
    let N = parseInt(I);
    (function main(N){
    let index = 0;
    if(N < 100){
        index = N;
    } else {
        index = 99;
        for(let int = 100; int <= N; int++){
            let H = parseInt(int/100);
            let T = parseInt(int%100/10);
            let O = int%100%10;
            if(H-T === T-O){
                index++;
            }
        }
    }
    console.log(index);
    })(N);
*/