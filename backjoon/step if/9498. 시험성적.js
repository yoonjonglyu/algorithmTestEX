(function main(I){
    if(I >= 90){
        console.log("A");
    } else if(I >= 80){
        console.log("B");
    } else if(I >= 70) {
        console.log("C");
    } else if(I >= 60){
        console.log("D");
    } else {
        console.log("F");
    }
})(89);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin');
    if(I >= 90){
        console.log("A");
    } else if(I >= 80){
        console.log("B");
    } else if(I >= 70) {
        console.log("C");
    } else if(I >= 60){
        console.log("D");
    } else {
        console.log("F");
    }
*/