(function main(inputs, numbers){
    let temp = inputs; // N, M 추출
    temp = temp.trim().split(' ');
    const N = parseInt(temp[0]); 
    const M = parseInt(temp[1]);

    temp = numbers; // N 묶음 추출
    temp = numbers.trim().split(' ');
    temp = temp.map((string) => parseInt(string));

    let result = 0;

    for(let int = 0; int < N; int++){
        for(let int2 = 0; int2 < N; int2++){
            if(int === int2){
                continue;
            } else {
                for(let int3 = 0; int3 < N; int3++){
                    if(int === int3 || int2 === int3){
                        continue;
                    } else {
                        const state = temp[int] + temp[int2] + temp[int3];
                        if(state === M){
                            result = state;
                            break;
                        } else if(state <= M && state > result){
                            result = state;
                        }
                    }
                }
            }
        }
    }
    
    console.log(result);
})("5 21", "5 6 7 8 9");
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    let I = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const inputs = I[0];
    const numbers = I[1];

    let temp = inputs; // N, M 추출
    temp = temp.trim().split(' ');
    const N = parseInt(temp[0]); 
    const M = parseInt(temp[1]);

    temp = numbers; // N 묶음 추출
    temp = numbers.trim().split(' ');
    temp = temp.map((string) => parseInt(string));

    let result = 0;

    for(let int = 0; int < N; int++){
        for(let int2 = 0; int2 < N; int2++){
            if(int === int2){
                continue;
            } else {
                for(let int3 = 0; int3 < N; int3++){
                    if(int === int3 || int2 === int3){
                        continue;
                    } else {
                        const state = temp[int] + temp[int2] + temp[int3];
                        if(state === M){
                            result = state;
                            break;
                        } else if(state <= M && state > result){
                            result = state;
                        }
                    }
                }
            }
        }
    }
    
    console.log(result);
*/