(function main(N, numbers){
    let index = 0;
    for(let int =1; int <= N; int++){
        let result = parseInt(numbers[index]) + parseInt(numbers[index+1]);
        index = index+2;
        console.log("Case #"+int+": "+result);
    }
})(3, ["1", "2", "3", "4", "5", "6"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split('\n');
    var N = parseInt(I.shift());
    var numbers = I.join(' ').split(' ');
    var index = 0;
    for(var int =1; int <= N; int++){
        var result = parseInt(numbers[index]) + parseInt(numbers[index+1]);
        index = index+2;
        console.log("Case #"+int+": "+result);
    }
*/