(function main(N, numbers){
    let result = [];

    for(let int = 0; int < N; int++){
        let params = 1;
        result[int] = 0;
        
        for(let int2 =0; int2 < numbers[int].length; int2++){
            if(numbers[int][int2] === "O"){
                result[int] = result[int] + params;
                params++;
            } else{
                params = 1;
            }
        }
    }

    result.map((number) => console.log(number));
})(5, ["OOXXOXXOOO", "OOXXOOXXOO", "OXOXOXOXOXOXOX", "OOOOOOOOOO", "OOOOXOOOOXOOOOX"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(I.shift());
    let numbers = I.join(' ').split(' ');
    let result = [];

    for(let int = 0; int < N; int++){
        let params = 1;
        result[int] = 0;
        
        for(let int2 =0; int2 < numbers[int].length; int2++){
            if(numbers[int][int2] === "O"){
                result[int] = result[int] + params;
                params++;
            } else{
                params = 1;
            }
        }
    }

    result.map((number) => console.log(number));
*/