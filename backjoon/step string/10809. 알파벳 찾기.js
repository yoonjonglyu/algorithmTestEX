(function main(I){
    let result = "abcdefghijklmnopqrstuvwxyz".split('');
    for(let int = 0; int < I.length; int++){
        let index = result.findIndex((str) => str === I[int]);
        if(typeof(result[index]) !== "number"){
           result[index] = int;
        }
    }

    for(let int = 0; int < result.length; int++){
        if(typeof(result[int]) === "string"){
            result[int] = -1;
        }
    }
    result = result.join(' ');
    console.log(result);
})("baekjoon");
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();

    let result = "abcdefghijklmnopqrstuvwxyz".split('');
    for(let int = 0; int < I.length; int++){
        let index = result.findIndex((str) => str === I[int]);
        if(typeof(result[index]) !== "number"){
           result[index] = int;
        }
    }

    for(let int = 0; int < result.length; int++){
        if(typeof(result[int]) === "string"){
            result[int] = -1;
        }
    }
    result = result.join(' ');
    console.log(result);
*/