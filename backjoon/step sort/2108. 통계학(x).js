(function main(N, numbers){
    const result = [];
    const count = [];
    const center = parseInt((N - 1) / 2); // 중간 인덱스
    let temp = numbers.map(num => parseInt(num));
    let mean = 0;
    let state = 1; // 최대 빈도 수
 
    for(let int = 0; int < N; int++){ // 버블 정렬
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1] > temp[int]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int];
                temp[int] = state;
            }
        }
    }

    temp.map(num => { // 숫자의 합 및 카운팅
        mean = mean + num;
        if(count.includes(num) === false){
            count.push(num);
            count[num] = 1;
        } else {
            count[num]++;
            if(count[num] > state){
                state = count[num];
            }
        }
    });
    
    let mode;

    for(let int = 0; int < count.length; int++){ // 최빈값 구하기 최빈값이 다수 일 경우 두번째로 작은 수 
        if(count[count[int]] === state){
            state = count[count[int]];
            mode = count[int];
        }
    }

    const range = temp[0] - temp[N - 1] >= 0 ? temp[0] - temp[N - 1] : temp[N - 1] - temp[0]; // 범위
    
    result.push(Math.floor(mean/N)); // 산술평균
    result.push(temp[center]); // 중앙값
    result.push(mode); // 최빈값
    result.push(range); // 범위

    result.map(ans => console.log(ans));
})(5, ["1", "3", "8", "-2", "2"]);
/*
(5, ["1", "3", "8", "-2", "2"]);
(1, ["4000"]);
(5, ["-1", "-2", "-3", "-1", "-2"]);
*/
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    const result = [];
    const count = [];
    const center = parseInt((N - 1) / 2); // 중간 인덱스
    let temp = numbers.map(num => parseInt(num));
    let mean = 0;
    let state = 1; // 최대 빈도 수
 
    for(let int = 0; int < N; int++){ // 버블 정렬
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1] > temp[int]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int];
                temp[int] = state;
            }
        }
    }

    temp.map(num => { // 숫자의 합 및 카운팅
        mean = mean + num;
        if(count.includes(num) === false){
            count.push(num);
            count[num] = 1;
        } else {
            count[num]++;
            if(count[num] > state){
                state = count[num];
            }
        }
    });
    
    let mode;

    for(let int = 0; int < count.length; int++){ // 최빈값 구하기 최빈값이 다수 일 경우 두번째로 작은 수 
        if(count[count[int]] === state){
            state = count[count[int]];
            mode = count[int];
        }
    }

    const range = temp[0] - temp[N - 1] >= 0 ? temp[0] - temp[N - 1] : temp[N - 1] - temp[0]; // 범위
    
    result.push(Math.floor(mean/N)); // 산술평균
    result.push(temp[center]); // 중앙값
    result.push(mode); // 최빈값
    result.push(range); // 범위

    result.map(ans => console.log(ans));
    // 이번 것도 시간초과 좀 더 깊이있어지면 돌아와서 풀자
*/