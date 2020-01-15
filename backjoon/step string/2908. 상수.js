(function main(I){
    let result;
    let state = I.split(' ');

    state[0] = [state[0][2] + state[0][1] + state[0][0]];
    state[1] = [state[1][2] + state[1][1] + state[1][0]];
    state = [parseInt(state[0]), parseInt(state[1])];
    result = state[0] > state[1] ? state[0] : state[1];

    console.log(result);
})("734 893");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();
    let result;
    let state = I.split(' ');

    state[0] = [state[0][2] + state[0][1] + state[0][0]];
    state[1] = [state[1][2] + state[1][1] + state[1][0]];
    state = [parseInt(state[0]), parseInt(state[1])];
    result = state[0] > state[1] ? state[0] : state[1];
    
    console.log(result);
*/