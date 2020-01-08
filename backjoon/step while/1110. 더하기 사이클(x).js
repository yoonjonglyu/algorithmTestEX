(function main(N){
    let result;
    let loop = 0;
    let number = N.toString();
    let state = number;

    while(number !== result){
        if(state.length === 1){   
            state = "0"+state;
        }
        let c = (parseInt(state[0])+parseInt(state[1])).toString();
        if(c.length > 1){
            c = c[c.length-1];
        }
        if(state[1] !== "0"){
            result = state = state[1]+c;
        } else {
            result = state = c;
        }
        loop++;
    }
    console.log(loop);
})(26);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const N = fs.readFileSync('/dev/stdin');
    let result;
    let loop = 0;
    let number = N.toString();
    let state = number;

    while(number !== result){
        if(state.length === 1){   
            state = "0"+state;
        }
        let c = (parseInt(state[0])+parseInt(state[1])).toString();
        if(c.length > 1){
            c = c[c.length-1];
        }
        if(state[1] !== "0"){
            result = state = state[1]+c;
        } else {
            result = state = c;
        }
        loop++;
    }
    console.log(loop);

    29초의 타임랙에 시간초과가 걸린다. 내가 코드를 잘못짜는건가 백준 node환경이 느려진게 원인인가 모르겠다;
    다음에 다시 시도해본다.(로직상의 문제는 없다.)
*/