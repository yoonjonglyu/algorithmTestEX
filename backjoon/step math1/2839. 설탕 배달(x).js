(function main(N){
    let result = 0;
    let state = [N, 0];
    
    function check() {
        if(state[1] === 0){
            while(1){
                if(state[0]-5 < 6 && state[0]-5 !== 3){
                    break;
                }
                state[0] = state[0]-5;
                result++;
                state[1]++;
                if(state[0] === 3){
                    break;
                }
            }
            if(state[1] !== 0 && state[0]%3 === 0){
                result = result + state[0]/3
            } else {
                state[1]++;
                check();
            }
        } else if(N%5 === 0 && N%3 === 0){
            result = N/5 < N/3 ? N/5 : N/3;
        } else if(N%5 === 0){
            result = N/5;
        } else if(N%3 === 0){
            result = N/3;
        } else {
            result = -1;
        }
    }
    check();

    console.log(result);
})(19);
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    const N = parseInt(I);
    let result = 0;
    let state = [N, 0];
    
    function check() {
        if(state[1] === 0){
            while(1){
                if(state[0]-5 < 6 && state[0]-5 !== 3){
                    break;
                }
                state[0] = state[0]-5;
                result++;
                state[1]++;
                if(state[0] === 3){
                    break;
                }
            }
            if(state[1] !== 0 && state[0]%3 === 0){
                result = result + state[0]/3
            } else {
                state[1]++;
                check();
            }
        } else if(N%5 === 0 && N%3 === 0){
            result = N/5 < N/3 ? N/5 : N/3;
        } else if(N%5 === 0){
            result = N/5;
        } else if(N%3 === 0){
            result = N/3;
        } else {
            result = -1;
        }
    }
    check();

    console.log(result);    
*/