(function main(N, numbers){
    let result = 0;
    let state = numbers.split('');
    for(let int=0; int <N; int++){
        result = result + parseInt(state[int]);
    }
    console.log(result);
})(5, "54321");
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(I.shift());
    const numbers = I[0];
    let result = 0;
    let state = numbers.split('');
    for(let int=0; int <N; int++){
        result = result + parseInt(state[int]);
    }
    console.log(result);
*/