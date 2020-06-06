(function main(N){
    const result = [];
    let temp = 666;
    let count = 1;

    if(N > 1){
        for(let int = 1000; int < N * 1000; int++){
            if(int.toString().indexOf("666") !== -1){
                count++;
                if(count === N){
                    temp = int;
                    break;
                }
            }
        }
    }

    result.push(temp);

    result.map(ans => console.log(ans));
})(2);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim();
    const N = parseInt(input);
    const result = [];
    let temp = 666;
    let count = 1;

    if(N > 1){
        for(let int = 1000; int < N * 1000; int++){
            if(int.toString().indexOf("666") !== -1){
                count++;
                if(count === N){
                    temp = int;
                    break;
                }
            }
        }
    }

    result.push(temp);

    result.map(ans => console.log(ans));
*/