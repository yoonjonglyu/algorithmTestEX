(function main(numbers){
    let min,max;
    for(let int = 0; int <numbers.length; int++){
        numbers[int] = parseInt(numbers[int]);
        if(int === 0){
            min = numbers[0];
            max = numbers[0];
        }
        if(numbers[int] > max){
            max = numbers[int];
        }
        if(numbers[int] < min){
            min = numbers[int]
        }
    }
    //let max = Math.max(...numbers);
    //let min = Math.min(...numbers);
    console.log(min+" "+max);
})(["20", "10", "35", "30", "7"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split('\n');
    I.shift();
    let numbers = I.join(' ').split(' ');
    for(let int = 0; int <numbers.length; int++){
        numbers[int] = parseInt(numbers[int]);
        if(int === 0){
            let min = numbers[0];
            let max = numbers[0];
        }
        if(numbers[int] > max){
            max = numbers[int];
        }
        if(numbers[int] < min){
            min = numbers[int]
        }
    }
    console.log(min+" "+max);
*/