(function main(numbers){
    let state = numbers.trim().split(' ');
    state = [parseInt(state[0]), parseInt(state[1]), parseInt(state[2])];
    const M = state[2] - state[1];
    let result;

    if(state[1] >= state[2]){
        result = -1;
    } else {
        result = Math.floor(state[0]/M) + 1;
    }

    console.log(result);
})("1000 70 170");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString();
    let state = numbers.trim().split(' ');
    state = [parseInt(state[0]), parseInt(state[1]), parseInt(state[2])];
    const M = state[2] - state[1];
    let result;

    if(state[1] >= state[2]){
        result = -1;
    } else {
        result = Math.floor(state[0]/M) + 1;
    }

    console.log(result);
*/