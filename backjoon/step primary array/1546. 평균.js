(function main(N, numbers){
    let params = [];
    let max;
    let result = 0;

    for(let int = 0; int < N; int++){
        params[int] = parseInt(numbers[int]);
        if(int === 0){
            max = params[int];
        }
        if(params[int] > max){
            max = params[int];
        }
    }

    for(let int = 0; int < params.length; int++){
        params[int] = params[int]/max*100;
    }

    params.map((number) =>{result = result + number;});

    console.log(result/N);
})(3, ["10", "20", "30"]);
["40", "80", "60"]
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(I.shift());
    let numbers = I.join(' ').split(' ');
    let params = [];
    let max;
    let result = 0;

    for(let int = 0; int < N; int++){
        params[int] = parseInt(numbers[int]);
        if(int === 0){
            max = params[int];
        }
        if(params[int] > max){
            max = params[int];
        }
    }

    for(let int = 0; int < params.length; int++){
        params[int] = params[int]/max*100;
    }

    params.map((number) =>{result = result + number;});

    console.log(result/N);
*/