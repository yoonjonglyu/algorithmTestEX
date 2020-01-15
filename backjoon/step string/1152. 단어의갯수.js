(function main(I){
    let result = 0;
    let state = I.trim();
    state = state.split(' ');

    state.map((string) => {if(string.length > 0){result++}});

    console.log(result);
    console.log(state);
})("     ");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();
    let result = 0;
    let state = I.trim();
    state = state.split(' ');
    
    state.map((string) => {if(string.length > 0){result++}});

    console.log(result);
*/