(function main(int1, int2, int3){
    let result;

    if(int1 === int2 && int1 === int3){
        result = int1;
    } else {
        if(int1 === int2){
            result = int1;
        } else if (int2 === int3){
            result = int2;
        } else{
        /* if문만 사용해야하는가 보다;
            let max = Math.max(int1, int2, int3);
            let min = Math.min(int1, int2, int3);
            let box = [int1, int2, int3];
            result = box.filter(number => number !== max && number !== min);
            result = result[0];
        */
            if(int1 < int2 && int1 < int3){
                if(int2 < int3){
                    result = int2;
                } else {
                    result = int3;
                }
            } else if(int1 < int2 || int1 < int3) {
                result = int1;
            } else{
                if(int2 < int3){
                    result = int3;
                } else{
                    result = int2;
                }
            }
        }
    }

    console.log(result);
})(10, 30, 20);
    
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    var fs = require('fs');
    var I = fs.readFileSync('/dev/stdin').toString().split(' ');
    var int1 = parseInt(I[0]);
    var int2 = parseInt(I[1]);
    var int3 = parseInt(I[2]);

    var result;

    if(int1 === int2 && int1 === int3){
        result = int1;
    } else {
        if(int1 === int2){
            result = int1;
        } else if (int2 === int3){
            result = int2;
        } else{
            if(int1 < int2 && int1 < int3){
                if(int2 < int3){
                    result = int2;
                } else {
                    result = int3;
                }
            } else if(int1 < int2 || int1 < int3) {
                result = int1;
            } else{
                if(int2 < int3){
                    result = int3;
                } else{
                    result = int2;
                }
            }
        }
    }

    console.log(result);
*/