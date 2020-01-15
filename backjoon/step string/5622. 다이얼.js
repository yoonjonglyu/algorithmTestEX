(function main(I){
    const key = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    const value = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,10,10,10,10];
    let result = 0;

    for(let int=0; int < I.length; int++){
        if(I[int] === "0"){
            result = result + 11;
        } else if(I[int] === "1"){
            result = result + 2;
        } else{
            result = result + value[key.indexOf(I[int])];       
        }
    }
    console.log(result);
})("UNUCIC");
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim();
    const key = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split('');
    const value = [3,3,3,4,4,4,5,5,5,6,6,6,7,7,7,8,8,8,8,9,9,9,10,10,10,10];
    let result = 0;

    for(let int=0; int < I.length; int++){
        if(I[int] === "0"){
            result = result + 11;
        } else if(I[int] === "1"){
            result = result + 2;
        } else{
            result = result + value[key.indexOf(I[int])];       
        }
    }
    console.log(result);
*/