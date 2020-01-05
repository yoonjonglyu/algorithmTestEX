(function main(a, b){
    console.log(a + b);
    console.log(a - b);
    console.log(a * b);
    console.log(Math.floor(a / b));
    console.log(a % b);
})(7, 3);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var input = fs.readFileSync('/dev/stdin').toString().split(' ');
    var int1 = parseInt(input[0]);
    var int2 = parseInt(input[1]);
    console.log(int1+int2);
    console.log(int1-int2);
    console.log(int1*int2);
    console.log(Math.floor(int1/int2));
    console.log(int1%int2);
*/