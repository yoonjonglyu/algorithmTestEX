(function main(numbers){
    let result = 1;
    let state = numbers.trim().split(' ');
    const a = parseInt(state[0]);
    const b = parseInt(state[1]);
    const v = parseInt(state[2]);
    state = v - b - 1;
    if(state > 0){
        result = result + Math.floor(state/(a - b));
    }
    console.log(result);
})("10 3 54");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString();
    let result = 1;
    let state = numbers.trim().split(' ');
    const a = parseInt(state[0]);
    const b = parseInt(state[1]);
    const v = parseInt(state[2]);
    state = v - b - 1;
    if(state > 0){
        result = result + Math.floor(state/(a - b));
    }
    console.log(result);
*/