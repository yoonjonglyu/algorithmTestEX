(function main(N){
    for(let int=1; int <= N; int++){
        console.log(int);
    }
})(10);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin')
    var N = parseInt(I);
    for(let int=1; int <= N; int++){
        console.log(int);
    }
*/