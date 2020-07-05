(function main(N, words){
    let temp = words;
    
    for(let int = 0; int < N; int++){ // 버블정렬
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1].length >= temp[int2].length){
                if(temp[int2 - 1].length > temp[int2].length){
                    const state = temp[int2 - 1];
                    temp[int2 - 1] = temp[int2];
                    temp[int2] = state;
                } else {
                    if(temp[int2 - 1] === temp[int2]){ // 중복 제거
                        temp.splice(int2, 1);
                        N--;
                    } else { // 사전순 정렬
                        for(let int3 = 0; int3 < temp[int2].length; int3++){
                            if(temp[int2 - 1][int3] !== temp[int2][int3]){
                                if(temp[int2 - 1].charCodeAt(int3) > temp[int2].charCodeAt(int3)){
                                    const state = temp[int2 - 1];
                                    temp[int2 - 1] = temp[int2];
                                    temp[int2] = state;
                                }
                                break;
                            }
                        }
                    }
                }

            }
        }
    }

    const result = temp.join('\n');

    console.log(result);
})(13, ["but", "i", "wont", "hesitate", "no", "more", "no", "more", "it", "cannot", "wait", "im", "yours"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const words = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(words.shift());
    let temp = words;
    
    for(let int = 0; int < N; int++){ // 버블정렬
        for(let int2 = 1; int2 < N; int2++){
            if(temp[int2 - 1].length >= temp[int2].length){
                if(temp[int2 - 1].length > temp[int2].length){
                    const state = temp[int2 - 1];
                    temp[int2 - 1] = temp[int2];
                    temp[int2] = state;
                } else {
                    if(temp[int2 - 1] === temp[int2]){ // 중복 제거
                        temp.splice(int2, 1);
                        N--;
                    } else { // 사전순 정렬
                        for(let int3 = 0; int3 < temp[int2].length; int3++){
                            if(temp[int2 - 1][int3] !== temp[int2][int3]){
                                if(temp[int2 - 1].charCodeAt(int3) > temp[int2].charCodeAt(int3)){
                                    const state = temp[int2 - 1];
                                    temp[int2 - 1] = temp[int2];
                                    temp[int2] = state;
                                }
                                break;
                            }
                        }
                    }
                }

            }
        }
    }

    const result = temp.join('\n');

    console.log(result);
*/