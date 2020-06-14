(function main(N, numbers){
    let temp = numbers.map(num => num.split(' ').map(xy => parseInt(xy)));
    
    for(let int = 0; int < N; int++){ // 버블 정렬
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1][0] > temp[int2][0]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int2];
                temp[int] = state;
            } else if(temp[int2 - 1][0] >= temp[int2][0]){
                if(temp[int2 - 1][1] > temp[int2][1]){
                    const state = temp[int2 - 1];
                    temp[int2 - 1] = temp[int2];
                    temp[int2] = state;
                }
            }
        }
    }

    const result = temp;

    result.map(ans => console.log(ans));
})(5, ["3 4", "1 1", "1 -1", "2 2", "3 3"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(numbers.shift());
    let temp = numbers.map(num => num.split(' ').map(xy => parseInt(xy)));
    
    for(let int = 0; int < N; int++){
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1][0] > temp[int2][0]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int2];
                temp[int] = state;
            } else if(temp[int2 - 1][0] >= temp[int2][0]){
                if(temp[int2 - 1][1] > temp[int2][1]){
                    const state = temp[int2 - 1];
                    temp[int2 - 1] = temp[int2];
                    temp[int2] = state;
                }
            }
        }
    }

    const result = temp;

    result.map(ans => console.log(ans));
    시간제한에 걸린다. 메모리 제한 때문에 카운팅 정렬은 불가 병합정렬도 js로는 안될거같고 퀵정렬로 해야할거같다.
*/