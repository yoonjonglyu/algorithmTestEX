(function main(N, numbers){
    let index = 0;
    for(let int=0; int < N; int++){
        let a = parseInt(numbers[index]);
        let b = parseInt(numbers[index+1]);
        index = index+2;
        console.log(a+b);
    }
})(3, ["2", "1", "3", "4", "5", "6"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split('\n');
    var N = parseInt(I.shift());
    var numbers = I.join(" ").split(" ");
    var index = 0;
    for(var int=0; int < N; int++){
        var a = parseInt(numbers[index]);
        var b = parseInt(numbers[index+1]);
        index = index+2;
        console.log(a+b);
    }
*/