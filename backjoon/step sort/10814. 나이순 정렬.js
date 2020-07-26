(function main(N, users){
    let temp = users.map((use) => use.split(' '));

    temp.sort((a, b) => {
        const ageA = parseInt(a[0]);
        const ageB = parseInt(b[0]);
        if(ageA > ageB){
            return 1;
        } else if (ageA < ageB){
            return -1;
        } else {
            return 0;
        }
    });
    const result = temp;

    result.forEach((arr) => {
        console.log(arr.join(' '));
    })
})(3, ["21 Junkyu", "19 Dohyun2","21 Dohyun", "20 Sunyoung","21 Junkyu"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const users = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(users.shift());
    let temp = users.map((use) => use.split(' '));

    temp.sort((a, b) => {
        const ageA = parseInt(a[0]);
        const ageB = parseInt(b[0]);
        if(ageA > ageB){
            return 1;
        } else if (ageA < ageB){
            return -1;
        } else {
            return 0;
        }
    });
    const result = temp;

    result.forEach((arr) => {
        console.log(arr.join(' '));
    })
    다 정렬로직을 짜서 할려니 sort 함수를 사용한 풀이도 해보고 싶어서 해본 간단한 안정정렬;
*/