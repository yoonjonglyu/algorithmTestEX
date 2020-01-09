(function main(numbers){
    const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let params = parseInt(numbers[0]) * parseInt(numbers[1]) * parseInt(numbers[2]);
    params = params.toString();

    for(let int = 0; int < params.length; int++){
        result[params[int]]++; 
    }
    
    result.map((number) => console.log(number));
})(["150", "266", "427"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
    const result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let params = parseInt(numbers[0]) * parseInt(numbers[1]) * parseInt(numbers[2]);
    params = params.toString();

    for(let int = 0; int < params.length; int++){
        result[params[int]]++;
    }
    
    result.map((number) => console.log(number));
*/