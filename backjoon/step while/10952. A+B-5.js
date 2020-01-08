(function main(N){
    let index = 0;
    while(N[index+1] !== "0"){
        let result = parseInt(N[index]) + parseInt(N[index+1]);
        index = index+2;
        console.log(result);
    }
})(["1", "1", "2", "3", "3", "4", "9", "8", "5", "2", "0","0"]);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split('\n');
    var N = I.join(' ').split(' ');
    let index = 0;
    while(N[index+1] !== "0"){
        let result = parseInt(N[index]) + parseInt(N[index+1]);
        index = index+2;
        console.log(result);
    }
*/