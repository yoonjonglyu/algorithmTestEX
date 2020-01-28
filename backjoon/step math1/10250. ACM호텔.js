(function main(N, numbers){
    const result = [];
    let state = [];
    for(let int=0; int < N; int++){
        state.push(numbers[int].trim().split(' '));
        state[int] = [parseInt(state[int][0]), parseInt(state[int][1]), parseInt(state[int][2])];
    }

    for(let int=0; int < N; int++){
        const row = state[int][0];
        const col = state[int][1];
        const idx = state[int][2];
        let floor = idx%row;
        if(floor === 0){
            floor = row;
        }
        let room = Math.floor(idx/row);
        if(idx%row !== 0){
            room++;
        }

        if(room < 10){
            result[int] = floor+"0"+room;
        } else{
            result[int] = floor+""+room;
        }
    }

    result.map(ans => console.log(ans));
})(2, ["6 12 10", "30 50 72"]);
     
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    const result = [];
    let state = [];
    for(let int=0; int < N; int++){
        state.push(numbers[int].trim().split(' '));
        state[int] = [parseInt(state[int][0]), parseInt(state[int][1]), parseInt(state[int][2])];
    }
    
    for(let int=0; int < N; int++){
        const row = state[int][0];
        const col = state[int][1];
        const idx = state[int][2];
        let floor = idx%row;
        if(floor === 0){
            floor = row;
        }
        let room = Math.floor(idx/row);
        if(idx%row !== 0){
            room++;
        }

        if(room < 10){
            result[int] = floor+"0"+room;
        } else{
            result[int] = floor+""+room;
        }
    }

    result.map(ans => console.log(ans));
*/