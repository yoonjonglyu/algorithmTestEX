(function main(a, b, c){
    console.log((a + b) % c);
    console.log((a%c + b%c) % c);
    console.log((a * b) % c);
    console.log((a%c * b%c) % c);
})(5, 8, 4);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var input = fs.readFileSync('/dev/stdin').toString().split(' ');
    var a = parseInt(input[0]);
    var b = parseInt(input[1]);
    var c = parseInt(input[2]);
    console.log((a + b) % c);
    console.log((a%c + b%c) % c);
    console.log((a * b) % c);
    console.log((a%c * b%c) % c);
*/