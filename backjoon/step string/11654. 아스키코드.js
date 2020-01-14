(function main(I){
    let result = I.charCodeAt();
    console.log(result);
})("C");
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();
    let result = I.charCodeAt();
    console.log(result);
*/