(function main(I){
    const RESULT = [];
    const P = Math.PI;
    let state = parseInt(I);

    let ans = state*state*P;
    ans = ans.toString();
    let index = ans.indexOf(".");
    ans = parseInt(ans)+ans.slice(index, index+7);
    RESULT.push(ans);

    ans = state*state*2+".000000";
    RESULT.push(ans);

    RESULT.map(ans => console.log(ans));
})("1");

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const RESULT = [];
    const P = Math.PI;
    let state = parseInt(I);

    let ans = state*state*P;
    ans = ans.toString();
    let index = ans.indexOf(".");
    ans = parseInt(ans)+ans.slice(index, index+7);
    RESULT.push(ans);
    
    ans = state*state*2+".000000";
    RESULT.push(ans);

    RESULT.map(ans => console.log(ans));
*/