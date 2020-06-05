(function main(xy, arr){
    const result = [];
    let temp = xy; // data 추출
    temp = temp.trim().split(' ');
    const N = parseInt(temp[0]);
    const M = parseInt(temp[1]);
    temp = 2501;

    for(let lo = 0; lo < N - 7; lo++){ // 탐색
        for(let lo2 = 0; lo2 < M - 7; lo2++){
            let black = 0;
            let white = 0;
            let state;

            for(let int = lo; int <  lo + 8; int++){ // 패턴 체크
                for(let int2 = lo2; int2 < lo2 + 8; int2 ++){
                    if((int + int2) % 2 === 0){
                        if(arr[int][int2] === "W"){
                            black++
                        } else {
                            white++;
                        }
                    } else {
                        if(arr[int][int2] === "W"){
                            white++;
                        } else {
                            black++;
                        }
                    }
                }
            }
            state = black < white ? black : white;

            if(state < temp){
                temp = state;
            }

        }
    }
    result.push(temp);

    result.map(ans => console.log(ans));
})("10 13", ["BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "WWWWWWWWWWBWB", "WWWWWWWWWWBWB"]);
/*
"("8 8", ["WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBBWBW", "WBWBWBWB", "BWBWBWBW", "WBWBWBWB", "BWBWBWBW"])
"10 13", ["BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "BBBBBBBBWBWBW", "BBBBBBBBBWBWB", "WWWWWWWWWWBWB", "WWWWWWWWWWBWB"]
*/
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const xy = input.shift();
    const arr = input;
    const result = [];
    let temp = xy; // data 추출
    temp = temp.trim().split(' ');
    const N = parseInt(temp[0]);
    const M = parseInt(temp[1]);
    temp = 2501;

    for(let lo = 0; lo < N - 7; lo++){ // 탐색
        for(let lo2 = 0; lo2 < M - 7; lo2++){
            let black = 0;
            let white = 0;
            let state;

            for(let int = lo; int <  lo + 8; int++){ // 패턴 체크
                for(let int2 = lo2; int2 < lo2 + 8; int2 ++){
                    if((int + int2) % 2 === 0){
                        if(arr[int][int2] === "B"){
                            white++;
                        } else {
                            black++;
                        }
                    } else {
                        if(arr[int][int2] === "B"){
                            black++;
                        } else {
                            white++;
                        }
                    }
                }
            }
            
            state = black < white ? black : white;

            if(state < temp){
                temp = state;
            }

        }
    }
    result.push(temp);

    result.map(ans => console.log(ans));
*/