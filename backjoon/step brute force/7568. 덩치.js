(function main(N, builds){
    const result = [];
    let temp = builds;
    temp = temp.map(builds => builds.split(' '));
    temp = temp.map(array => array.map(a => a = parseInt(a))); //데이터 처리

    for(let int = 0; int < N; int++){
        let k = 1;
        for(let int2 = 0; int2 < N; int2++){
            if(int === int2){
                continue;
            } else {
                if(temp[int][0] < temp[int2][0] && temp[int][1] < temp[int2][1]){
                    k++;
                }
            }
        }
        result.push(k);
    }

    console.log(result.join(' '));
})(5, ["55 185", "58 183", "88 186", "60 175", "46 155"]);
const input = ["5","55 185", "58 183", "88 186", "60 175", "46 155"];
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().split('\n');
    const N = parseInt(input.shift());
    const bulids = input;
    const result = [];
    let temp = bulids;
    temp = temp.map(builds => builds.split(' '));
    temp = temp.map(array => array.map(a => a = parseInt(a))); //데이터 처리

    for(let int = 0; int < N; int++){
        let k = 1;
        for(let int2 = 0; int2 < N; int2++){
            if(int === int2){
                continue;
            } else {
                if(temp[int][0] < temp[int2][0] && temp[int][1] < temp[int2][1]){
                    k++;
                }
            }
        }
        result.push(k);
    }

    console.log(result.join(' '));
*/