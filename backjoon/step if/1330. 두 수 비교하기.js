(function main(a, b){
    if(a === b){
        console.log("==");
    } else if (a > b){
        console.log(">");
    } else {
        console.log("<");
    }
})(-5, -5);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var input = fs.readFileSync('/dev/stdin').toString().split(' ');
    var a = parseInt(input[0]);
    var b = parseInt(input[1]);
        if(a === b){
        console.log("==");
    } else if (a > b){
        console.log(">");
    } else {
        console.log("<");
    }
*/