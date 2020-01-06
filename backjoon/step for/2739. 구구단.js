(function main(I){
    for(let int=1; int <= 9; int++){
        console.log(I+" * "+int+" = "+(I*int));
    }
})(2);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin');
    I = parseInt(I);
    for(var int=1; int <= 9; int++){
        console.log(I+" * "+int+" = "+(I*int));
    }
*/