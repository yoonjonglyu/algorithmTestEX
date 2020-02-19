(function main(I){
    const RESULT = [];
    const X = [];
    const Y = [];
    
    for(let int=0; int < I.length; int++){
        const state = I[int].trim().split(' ');
        X.push(state[0]);
        Y.push(state[1]);
    }

    X.map(n => {
        if(X.indexOf(n) === X.lastIndexOf(n)){
            RESULT.push(n);
        }
    })
    Y.map(n => {
        if(Y.indexOf(n) === Y.lastIndexOf(n)){
            RESULT.push(n);
        }
    })

    console.log(RESULT[0] + " " + RESULT[1]);
})(["30 20", "10 10", "10 20"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const RESULT = [];
    const X = [];
    const Y = [];
    
    for(let int=0; int < I.length; int++){
        const state = I[int].trim().split(' ');
        X.push(state[0]);
        Y.push(state[1]);
    }

    X.map(n => {
        if(X.indexOf(n) === X.lastIndexOf(n)){
            RESULT.push(n);
        }
    })
    Y.map(n => {
        if(Y.indexOf(n) === Y.lastIndexOf(n)){
            RESULT.push(n);
        }
    })
    
    console.log(RESULT[0] + " " + RESULT[1]);
*/