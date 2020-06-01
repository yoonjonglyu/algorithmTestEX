(function main(I){
    const result = 2**I - 1;
    console.log(result);

    function moveTop(n, from, by, to){
        if(n == 1){
            console.log(from + " " + to);
        } else {
            moveTop(n-1, from, to, by);
            console.log(from + " " + to);
            moveTop(n-1, by, from, to);
        }
    }
    moveTop(I, 1, 2, 3);
})(3);
/*
1 = 1
2 = 3
3 = 7
4 = 2n-1 = 15
*/
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    let I = fs.readFileSync('/dev/stdin').toString().trim();
    I = parseInt(I);

    const result = 2**I - 1;
    console.log(result);

    function moveTop(n, from, by, to){
        if(n == 1){
            console.log(from + " " + to);
        } else {
            moveTop(n-1, from, to, by);
            console.log(from + " " + to);
            moveTop(n-1, by, from, to);
        }
    }
    moveTop(I, 1, 2, 3);
    어째서인지 시간초과가 계속뜬다 -- 뭐가 문제지?
*/