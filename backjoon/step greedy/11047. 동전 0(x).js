(function main(O, I){
    let result = 0;
    let state = O.trim().split(' ');
    const LENGTH = parseInt(state[0]);
    state = parseInt(state[1]);
    let check = I;
    if(LENGTH > 1){
        check = check.reverse();
        for(let int=0; int < LENGTH; int++){
            check[int] = parseInt(check[int]);
        }

        function greedy(){
            for(let int=0; int < LENGTH; int++){
                if(state - check[int] >= 0){
                    state = state - check[int];
                    result++;
                    greedy();
                }
            }
        }
        greedy();
    } else {
        check = parseInt(check);
        result = state/check;
    }


    console.log(result);
})("10 4200", ["1","5","10","50","100","500","1000","5000","10000","50000"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const O = input.shift();
    const I = input.join(' ').trim().split(' ');
    let result = 0;
    let state = O.trim().split(' ');
    const LENGTH = parseInt(state[0]);
    state = parseInt(state[1]);
    let check = I;
    if(LENGTH > 1){
        check = check.reverse();
        for(let int=0; int < LENGTH; int++){
            check[int] = parseInt(check[int]);
        }

        function greedy(){
            for(let int=0; int < LENGTH; int++){
                if(state - check[int] >= 0){
                    state = state - check[int];
                    result++;
                    greedy();
                }
            }
        }
        greedy();
    } else {
        check = parseInt(check);
        result = state/check;
    }


    console.log(result);
    50프로 넘어가면 무조건 런타임 에러가 뜨는데
    이게 왜 런타임 에러가 뜨는지 모르겠다. 재채점을 기다려보거나 다음에 다시 검토해보자
*/