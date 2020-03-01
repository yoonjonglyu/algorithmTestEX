(function main(I){
    const FIBO = {'0': 0, '1': 1};

    function fibo(n){
        let result;
        if(typeof(FIBO[n]) === "number"){
            result = FIBO[n];
        } else {
            result = FIBO[n] = fibo(n-1) + fibo(n-2);
        }
        return result;
    }

    console.log(fibo(I));
})(10);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    let I = fs.readFileSync('/dev/stdin').toString().trim();
    I = parseInt(I);
    const FIBO = {'0': 0, '1': 1};

    function fibo(n){
        let result;
        if(typeof(FIBO[n]) === "number"){
            result = FIBO[n];
        } else {
            result = FIBO[n] = fibo(n-1) + fibo(n-2);
        }
        return result;
    }

    console.log(fibo(I));
*/