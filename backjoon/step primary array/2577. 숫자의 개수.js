(function main(numbers){
    let params = [];

    for(let int = 0; int < 10; int++){
         params[int] = parseInt(numbers[int])%42; 
    }

    for(let int = 0; int < 10; int++){
        for(let int2 = 0; int2 < 10; int2++){
            if(params[int] === params[int2] && int !== int2){
                params.splice(int2, 1);
            }
        }
    }

    console.log(params.length);
})(["39", "40", "41", "42", "43", "44", "82", "83", "84", "85"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString().split('\n');
    let params = [];

    for(let int = 0; int < 10; int++){
         params[int] = parseInt(numbers[int])%42; 
    }

    for(let int = 0; int < 10; int++){
        for(let int2 = 0; int2 < 10; int2++){
            if(params[int] === params[int2] && int !== int2){
                params.splice(int2, 1);
            }
        }
    }

    console.log(params.length);
*/