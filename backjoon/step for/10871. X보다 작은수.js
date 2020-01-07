(function main(N, numbers){
    let result = '';
    for(let int =0; int <numbers.length; int++){
        let value = parseInt(numbers[int]);
        if(value < N[1]){
            result = result+value+" ";
        }
    }
    console.log(result);
})([10, 5], ["1", "10", "4", "9", "2", "3", "8", "5", "7", "6"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split('\n');
    var N = I.shift().split(' ');
   N = [parseInt(N[0]), parseInt(N[1])];
    var numbers = I.join(' ').split(' ');
    var result = '';
    for(var int =0; int <numbers.length; int++){
        var value = parseInt(numbers[int]);
        if(value < N[1]){
            result = result+value+" ";
        }
    }
    console.log(result);
*/