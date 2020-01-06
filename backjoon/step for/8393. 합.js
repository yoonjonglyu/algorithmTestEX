(function main(N){
    let cache = {"1": 1, "2": 3};
    return function func(N){
        let result;
        if(typeof(cache[N]) === "number"){
            result = cache[N];
        } else {
            result = cache[N] = N+ func(N-1);
        }
       return result;
    }
})()(15);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin');
    var N = parseInt(I);
    var result = 0;
    for(var int =1; int <= N; int++){
        result = result+ int;
    }
*/