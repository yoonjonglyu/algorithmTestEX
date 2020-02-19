(function main(I){
    let state = I.trim().split(' ');
    const X = parseInt(state[0]);
    const Y = parseInt(state[1]);
    const W = parseInt(state[2]);
    const H = parseInt(state[3]);
    let A = X < W-X ? X : W-X;
    let B = Y < H-Y ? Y : H-Y;
    const result = A < B ? A : B;

    console.log(result);
})("6 2 10 3");

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const I = fs.readFileSync('/dev/stdin').toString();
    let state = I.trim().split(' ');
    const X = parseInt(state[0]);
    const Y = parseInt(state[1]);
    const W = parseInt(state[2]);
    const H = parseInt(state[3]);
    let A = X < W-X ? X : W-X;
    let B = Y < H-Y ? Y : H-Y;
    const result = A < B ? A : B;

    console.log(result);
*/