(function main(I){
    if((I%4 === 0 && I%100 !== 0) || I%400 === 0){
        console.log("1");
    } else {
        console.log("0");
    }
})(2000);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin');
    if((I%4 === 0 && I%100 !== 0) || I%400 === 0){
        console.log("1");
    } else {
        console.log("0");
    }
*/