(function main(H, M){
    let hour = H;
    let min = M;

    if(M - 45 >= 0){
        min = min - 45;   
    } else {
        if(hour - 1 >= 0){
            hour--;
            min = min + 15;
        } else {
            hour = 23;
            min = min + 15;
        }
    }
    console.log(hour + " " + min);
})(23, 40);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().split(' ');
    const H = parseInt(I[0]);
    const M = parseInt(I[1]);
    let hour = H;
    let min = M;

    if(M - 45 >= 0){
        min = min - 45;   
    } else {
        if(hour - 1 >= 0){
            hour--;
            min = min + 15;
        } else {
            hour = 23;
            min = min + 15;
        }
    }
    console.log(hour + " " + min);
*/