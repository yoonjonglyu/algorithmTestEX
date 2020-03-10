(function main(I){
    const STAR = "*";
    const AIR = " ";
    const RESULT = [];
    let row = I/3;
    let col = I/3;
    
    for(let int=0; int < I; int++){ // star init
        RESULT[int] = [];
        for(let int2=0; int2 < I; int2++){
            if(int%3 === 1 && int2%3 === 1){
                RESULT[int][int2] = AIR;
            } else {
                RESULT[int][int2] = STAR;
            }
        }
    }

    function checkPatten(N){ // patten
        for(let int=0; int < N; int++){
            for(let int2=0; int2 < N; int2++){
                RESULT[row + int][col + int2] = AIR;
            }
        }
        if(col + N*3 <= I){// 가로 패턴
            col = col + N*3;
            checkPatten(N);
        }
        if(row + N*3 <= I){// 세로 패턴
            col = N;
            row = row + N*3;
            checkPatten(N);
        }
        if(N/3 >= 3){ // 하위 패턴
            row = N/3;
            col = N/3;
            checkPatten(N/3);
        }
    }
    if(I/3 >= 3){
        checkPatten(I/3);
    }

    RESULT.map(ans => console.log(ans.join('')));
})(81);
/*
012345678
*********0
* ** ** *1
*********2
***   ***3
* *   * *4
***   ***5
*********6
* ** ** *7
*********8
*/
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    let I = fs.readFileSync('/dev/stdin').toString().trim();
    I = parseInt(I);
    const STAR = "*";
    const AIR = " ";
    const RESULT = [];
    let row = I/3;
    let col = I/3;
    
    for(let int=0; int < I; int++){ // star init
        RESULT[int] = [];
        for(let int2=0; int2 < I; int2++){
            if(int%3 === 1 && int2%3 === 1){
                RESULT[int][int2] = AIR;
            } else {
                RESULT[int][int2] = STAR;
            }
        }
    }

    function checkPatten(N){ // patten
        for(let int=0; int < N; int++){
            for(let int2=0; int2 < N; int2++){
                RESULT[row + int][col + int2] = AIR;
            }
        }
        if(col + N*3 <= I){// 가로 패턴
            col = col + N*3;
            checkPatten(N);
        }
        if(row + N*3 <= I){// 세로 패턴
            col = N;
            row = row + N*3;
            checkPatten(N);
        }
        if(N/3 >= 3){ // 하위 패턴
            row = N/3;
            col = N/3;
            checkPatten(N/3);
        }
    }
    if(I/3 >= 3){
        checkPatten(I/3);
    }

    RESULT.map(ans => console.log(ans.join('')));

    런타임에러 3의 6승부터 문제가 발생한다. 다음에 알고리즘을 반대로해서 공백을 제거 하는게 아니라 공백에 별을 찍게 수정해야할거같다.
*/