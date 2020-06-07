(function main(N, numbers){
    let temp = numbers.map(num => parseInt(num));

    for(let int = 0; int < N; int++){
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1] > temp[int2]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int2];
                temp[int2] = state;
            }
        }
    }

    const result = temp;
    result.map(ans => console.log(ans));
})(5, ["5", "2", "3", "4", "1"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    let temp = numbers.map(num => parseInt(num));
    
    for(let int = 0; int < N; int++){
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1] > temp[int2]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int2];
                temp[int2] = state;
            }
        }
    }

    const result = temp;
    result.map(ans => console.log(ans));
*/