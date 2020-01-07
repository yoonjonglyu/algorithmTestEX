(function main(N){
    let star = "*";
    let result = "*";
    let air = " ";
    for(let int2 = 1; int2 < N; int2++){
        air = air+" ";
    }
    for(let int =0; int < N; int++){
        air = air.slice(1,N-int);
        console.log(air+result);
        result = result+star;
    }
})(5);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString();
    var N = parseInt(I);
    var star = "*";
    var result = "*";
    var air = " ";
    for(var int2 = 1; int2 < N; int2++){
        air = air+" ";
    }
    for(var int =0; int < N; int++){
        air = air.slice(1,N-int);
        console.log(air+result);
        result = result+star;
    }
*/