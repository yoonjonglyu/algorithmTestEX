(function main(numbers){
    let max, index;
    for(let int = 0; int < numbers.length; int++){
        let state = parseInt(numbers[int]);
        if(int === 0){
            max = state;
            index = int+1;
        }
        if(state > max){
            max = state;
            index = int+1;
        }
    }
    console.log(max);
    console.log(index);
})(["3", "29", "38", "12", "57", "74", "40", "85", "61"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
    let max, index;
    for(let int = 0; int < numbers.length; int++){
        let state = parseInt(numbers[int]);
        if(int === 0){
            max = state;
            index = int+1;
        }
        if(state > max){
            max = state;
            index = int+1;
        }
    }
    console.log(max);
    console.log(index);
*/