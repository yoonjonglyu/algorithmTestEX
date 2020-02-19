(function main(N, numbers){
    const RESULT = [];
    let prime = new Array(10001).fill(true); // 최대 범위

    for(let int = 2; int <= prime.length; int++){ // 소수 에라토스테네스의 체를 통한 구하기
        if(prime[int] === true){
            prime[int] = int;
            for(let int2 = int*int; int2 <= prime.length; int2++){
                if(int2 % int === 0){
                    prime[int2] = false;
                }
            }
        }
    }
    prime = prime.filter(n => typeof(n) === "number"); // 구해진 소수 필터링

    for(let int=0; int < N; int++){
        const number = parseInt(numbers[int].trim());
        let state = prime.filter(n => n <= number-2);
        let A,B;
        let swich = false;
        const box = [];
        state.map(n => {
            if(2*n === number){
                A = B = n;
                RESULT.push(A+" "+B);
                swich = true;
            }
        })
        if(swich === false){
            state.map(n =>{
                    A = n;
                    for(let int2=0; int2 < state.length; int2++){
                        B = state[int2];
                        if(box.find(n=> n === B+" "+A)){
                            break;
                        } else if(number === A + B){
                            box.push(A+" "+B);
                        }
                    }
            })
            RESULT.push(box[box.length-1]);
        }
    }

    RESULT.map(ans => console.log(ans));
})(3, ["8", "10", "16"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(I.shift());
    const numbers = I;
    const RESULT = [];
    let prime = new Array(10001).fill(true); // 최대 범위

    for(let int = 2; int <= prime.length; int++){ // 소수 에라토스테네스의 체를 통한 구하기
        if(prime[int] === true){
            prime[int] = int;
            for(let int2 = int*int; int2 <= prime.length; int2++){
                if(int2 % int === 0){
                    prime[int2] = false;
                }
            }
        }
    }
    prime = prime.filter(n => typeof(n) === "number"); // 구해진 소수 필터링

    for(let int=0; int < N; int++){
        const number = parseInt(numbers[int].trim());
        let state = prime.filter(n => n <= number-2);
        let A,B;
        let swich = false;
        const box = [];
        state.map(n => {
            if(2*n === number){
                A = B = n;
                RESULT.push(A+" "+B);
                swich = true;
            }
        })
        if(swich === false){
            state.map(n =>{
                    A = n;
                    for(let int2=0; int2 < state.length; int2++){
                        B = state[int2];
                        if(box.find(n=> n === B+" "+A)){
                            break;
                        } else if(number === A + B){
                            box.push(A+" "+B);
                        }
                    }
            })
            RESULT.push(box[box.length-1]);
        }
    }

    RESULT.map(ans => console.log(ans));
    시간초과 ㅜㅜ
*/