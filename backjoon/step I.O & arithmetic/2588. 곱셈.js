(function main(a, b){
    console.log(a*b[2]);
    console.log(a*b[1]);
    console.log(a*b[0]);
    console.log(a*b);
})(472, "385");
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var input = fs.readFileSync('/dev/stdin').toString().split('\n');
    var a = input[0];
    var b = input[1];
    console.log(a*b[2]);
    console.log(a*b[1]);
    console.log(a*b[0]);
    console.log(a*b);
*/