(function main(N, numbers){
    let state = [];
    let average = [];
    let result = [];

    for(let int = 0; int < N; int++){
        state[int] = numbers[int].split(' ');
        state[int][0] = parseInt(state[int][0]);
        average[int] = 0;
        result[int] = 0;

        for(let int2 = 1; int2 <= state[int][0]; int2++){
            state[int][int2] = parseInt(state[int][int2]);
            average[int] = average[int] + state[int][int2]/state[int][0];
        }
        for(let int2 = 1; int2 <= state[int][0]; int2++){
            if(state[int][int2] > average[int]){
                result[int]++;
            }
        }

        result[int] = 100*result[int]/state[int][0];
        result[int] = result[int].toString().slice(0,7);
        if(result[int].length > 2){
            if(result[int].length < 7){
                for(let int2 =0; int2 < 7-result[int].length; int2++){
                    result[int] = result[int]+"0";
                }
            }
            result[int] = result[int].slice(0,5) + Math.round(parseFloat(result[int][5]+"."+result[int][6]))+"%";
        } else {
            result[int] = Math.round(parseFloat(result[int]))+".000%";
        }
    }
    result.map((number) => console.log(number));
})(6, ["5 50 50 70 80 100", "7 100 95 90 80 70 60 50", "3 70 90 80", "3 70 90 81", "9 100 99 98 97 96 95 94 93 91", "1 0"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(I.shift());
    let numbers = I;
    let state = [];
    let average = [];
    let result = [];

    for(let int = 0; int < N; int++){
        state[int] = numbers[int].split(' ');
        state[int][0] = parseInt(state[int][0]);
        average[int] = 0;
        result[int] = 0;

        for(let int2 = 1; int2 <= state[int][0]; int2++){
            state[int][int2] = parseInt(state[int][int2]);
            average[int] = average[int] + state[int][int2]/state[int][0];
        }
        for(let int2 = 1; int2 <= state[int][0]; int2++){
            if(state[int][int2] > average[int]){
                result[int]++;
            }
        }

        result[int] = 100*result[int]/state[int][0];
        result[int] = result[int].toString().slice(0,7);
        if(result[int].length > 2){
            if(result[int].length < 7){
                for(let int2 =0; int2 < 7-result[int].length; int2++){
                    result[int] = result[int]+"0";
                }
            }
            result[int] = result[int].slice(0,5) + Math.round(parseFloat(result[int][5]+"."+result[int][6]))+"%";
        } else {
            result[int] = Math.round(parseFloat(result[int]))+".000%";
        }
    }
    result.map((number) => console.log(number));
*/