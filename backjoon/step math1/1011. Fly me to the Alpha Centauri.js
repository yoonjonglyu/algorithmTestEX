(function main(N, numbers){
    const result = [];
    for(let int=0; int < N; int++){
        const state = numbers[int].trim().split(' ');
        let K = parseInt(state[1]) - parseInt(state[0]);
        let max = 1;
        while(max * max <= K){
            max++;
        }
        max--;
        let value = K - (max * max);
        result[int] =  max * 2 - 1 + Math.ceil(value/max);
    }
    result.map(ans => console.log(ans));
})(3, ["0 3", "1 5", "45 50"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    const result = [];
    for(let int=0; int < N; int++){
        const state = numbers[int].trim().split(' ');
        let K = parseInt(state[1]) - parseInt(state[0]);
        let max = 1;
        while(max * max <= K){
            max++;
        }
        max--;
        let value = K - (max * max);
        result[int] =  max * 2 - 1 + Math.ceil(value/max);
    }
    result.map(ans => console.log(ans));
*/