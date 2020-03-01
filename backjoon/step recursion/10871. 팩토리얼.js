(function main(I){
    let result = 1;

    function fect(n){
        result = result * n;
        if(n > 1){
            fect(n-1);
        } else if(n === 0){
            result = 1;
        }
        return result;
    }

    console.log(fect(I));
})(10);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    let I = fs.readFileSync('/dev/stdin').toString().trim();
    I = parseInt(I);
    let result = 1;

    function fect(n){
        result = result * n;
        if(n > 1){
            fect(n-1);
        } else if(n === 0){
            result = 1;
        }
        return result;
    }

    console.log(fect(I));
*/