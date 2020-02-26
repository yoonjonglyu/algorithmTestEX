(function main(I){
    const RESULT = [];
    let box = I;
    box.pop();
    for(let int=0; int < box.length; int++){
        let state = box[int].trim().split(' ');
        state = [parseInt(state[0]), parseInt(state[1]), parseInt(state[2])];
        const C = Math.max(...state);
        state = state.filter(n => n !== C);
        if(state[0]*state[0] + state[1]*state[1] === C*C){
            RESULT.push("right");
        } else {
            RESULT.push("wrong")
        }
    }

    RESULT.map(ans => console.log(ans));
})(["6 8 10", "25 52 60", "5 12 13", "0 0 0"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const RESULT = [];
    let box = I;
    box.pop();
    for(let int=0; int < box.length; int++){
        let state = box[int].trim().split(' ');
        state = [parseInt(state[0]), parseInt(state[1]), parseInt(state[2])];
        const C = Math.max(...state);
        state = state.filter(n => n !== C);
        if(state[0]*state[0] + state[1]*state[1] === C*C){
            RESULT.push("right");
        } else {
            RESULT.push("wrong")
        }
    }

    RESULT.map(ans => console.log(ans));
*/