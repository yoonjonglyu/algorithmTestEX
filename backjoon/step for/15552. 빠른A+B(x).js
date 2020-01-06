(function main(N, a, b){
    for(let int=0; int < N; int++){
        console.log(a+b);
    }
})(10, "123", "200");
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split('\n');
    var N = parseInt(I[0]);
    for(var int=1; int <= N; int++){
        var box = I[int].split(' ');
        var a = parseInt(box[0]);
        var b = parseInt(box[1]);
        console.log(a+b);
    }
     16초의 타임랙을 줄일방법을 아직모르겠다. 나중에 다시풀어보자
*/