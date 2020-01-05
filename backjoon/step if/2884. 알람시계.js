(function main(H, M){
    if(M >= 45){
        M = M - 45;
    } else {
        if(H-1 > 0){
            H = H-1;
        } else {
            H = 23;
        }
        M = M + 60 - 45;
    }
    console.log(H+" "+M);
})(0, 15);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split(' ');
    var H = parseInt(I[0]);
    var M = parseInt(I[1]);
    if(M >= 45){
        M = M - 45;
    } else {
        if(H-1 > 0){
            H = H-1;
        } else {
            H = 23;
        }
        M = M + 60 - 45;
    }
    console.log(H+" "+M);
*/