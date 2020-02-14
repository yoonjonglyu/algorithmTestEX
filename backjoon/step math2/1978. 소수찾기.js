(function main(N, numbers){
    let result = 0;
    let box = numbers.trim().split(' ');
    for(let int=0; int < N; int++){
        box[int] =  parseInt(box[int]);
        if(box[int] !== 1){
            result++;
            for(let int2=2; int2 < box[int]; int2++){
                if(box[int]%int2 === 0){
                    result--;
                    break;
                }
            }
        }
    }
    console.log(result);
})(5, "1 3 5 7 2");

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input[0]);
    const numbers = input[1];
    let result = 0;
    let box = numbers.trim().split(' ');
    for(let int=0; int < N; int++){
        box[int] =  parseInt(box[int]);
        if(box[int] !== 1){
            result++;
            for(let int2=2; int2 < box[int]; int2++){
                if(box[int]%int2 === 0){
                    result--;
                    break;
                }
            }
        }
    }
    console.log(result);
*/