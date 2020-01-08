(function main(numbers){
    let swich = 0;
    let desc = numbers.length;
    let result;

    for(let int = 0; int < numbers.length; int++){
        let state = parseInt(numbers[int]);
        if(state === desc){
            swich--;
        } else if(state == int+1){
            swich++;
        }
        desc--;
    }

    if(swich === numbers.length){
        result = "ascending";
    } else if(swich === 0-numbers.length){
        result = "descending";
    } else {
        result = "mixed"
    }
    console.log(result);
})(["1", "2", "3", "4", "5", "6", "7", "8"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString().split(' ');
    let swich = 0;
    let desc = numbers.length;
    let result;

    for(let int = 0; int < numbers.length; int++){
        let state = parseInt(numbers[int]);
        if(state === desc){
            swich--;
        } else if(state == int+1){
            swich++;
        }
        desc--;
    }

    if(swich === numbers.length){
        result = "ascending";
    } else if(swich === 0-numbers.length){
        result = "descending";
    } else {
        result = "mixed"
    }
    console.log(result);
*/