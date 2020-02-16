(function main(I){
    const RESULT = [];
    let prime = new Array(123456*2).fill(true); // 최대 범위
    let state = I.split('\n'); // 인자 처리하기
    state.pop();
    state = state.map(N => parseInt(N.trim()));

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

    for(let int = 0; int < state.length; int++){ // 범위별 소수 갯수 카운팅
        let count = 0;
        prime.map(number => {
            if(typeof(number) === "number" && number > state[int] && number <= 2*state[int]){
                count++;
            }
        })
        RESULT[int]= count;
    }

    RESULT.map(ans => console.log(ans));
})("1\n10\n13\n100\n1000\n10000\n100000\n0");

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    const RESULT = [];
    let prime = new Array(123456*2).fill(true); // 최대 범위
    let state = I.split('\n'); // 인자 처리하기
    state.pop();
    state = state.map(N => parseInt(N.trim()));

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
    prime = prime.filter(n => typeof(n) === "number");

    for(let int = 0; int < state.length; int++){
        let count = 0;
        prime.map(number => {
            if(typeof(number) === "number" && number > state[int] && number <= 2*state[int]){
                count++;
            }
        })
        RESULT[int]= count;
    }
    
    RESULT.map(ans => console.log(ans));
*/