(function main(I){
    const A = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    const result = [];
    A.map((key) => result[key] = 0);

    let state = I.toUpperCase();
    for(let int=0; int < state.length; int++){
        result[state[int]]++;
    }

    let answer;
    let box;
    for(let int=0; int < A.length; int++){
        if(int === 0){
            box = result[A[int]];
            answer = A[int];
        }
        if(box < result[A[int]]){
            box = result[A[int]];
            answer = A[int];
        } else if(int !== 0  && box === result[A[int]]){
            answer = "?";
        }
    }
    console.log(answer);
})("zZa");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();

    const A = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    const result = [];
    A.map((key) => result[key] = 0);

    let state = I.toUpperCase();
    for(let int=0; int < state.length; int++){
        result[state[int]]++;
    }

    let answer;
    let box;
    for(let int=0; int < A.length; int++){
        if(int === 0){
            box = result[A[int]];
            answer = A[int];
        }
        if(box < result[A[int]]){
            box = result[A[int]];
            answer = A[int];
        } else if(int !== 0  && box === result[A[int]]){
            answer = "?";
        }
    }
    console.log(answer);
*/