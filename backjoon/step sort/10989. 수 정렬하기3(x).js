(function main(N, numbers){
    let result = [];
    let temp = numbers.map(num => parseInt(num));
    const count = Array(10001).fill(0);
    temp.map(num => count[num]++);
    let countNum = count[0];

    for(let int = 1; int <= 10000; int++){
        if(count[int] !== 0){
            countNum = countNum + count[int];
            count[int] = countNum;
        }
    }

    for(let int = N-1; int >= 0; int--){
        result[count[temp[int]]] = temp[int];
        count[temp[int]]--;
    }
    
    result.map(ans => console.log(ans));
})(10, ["5", "2", "3", "1", "4", "2", "3", "5", "1", "7"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    let result = [];
    let temp = numbers.map(num => parseInt(num));
    const count = Array(10001).fill(0);
    temp.map(num => count[num]++);
    let countNum = count[0];

    for(let int = 1; int <= 10000; int++){
        if(count[int] !== 0){
            countNum = countNum + count[int];
            count[int] = countNum;
        }
    }

    for(let int = N-1; int >= 0; int--){
        result[count[temp[int]]] = temp[int];
        count[temp[int]]--;
    }
    
    result.map(ans => console.log(ans));
    수 범위가 작다면 카운팅 정렬을 통해 빠르게 정렬가능하다더니... 메모리초과뜨는 이유는 뭘까?
    심지어 sort 함수도 메모리초과다 - -;
*/