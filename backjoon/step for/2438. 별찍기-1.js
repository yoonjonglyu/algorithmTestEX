(function main(N){
    let star = "*";
    let result = "*";
    for(let int =0; int < N; int++){
        console.log(result);
        result = result+star;
    }
})(10);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString();
    var N = parseInt(I);
    var star = "*";
    var result = "*";
    for(var int =0; int < N; int++){
        console.log(result);
        result = result+star;
    }
*/