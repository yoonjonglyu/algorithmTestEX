(function main(N){
    const result = [];
    let state = [];
    let temp = N.split('');
    temp = temp.map(num => parseInt(num));

    function merge(array, center, left, right){
        let index = left;
        let leftIndex = left;
        let rightIndex = center + 1;

        while(leftIndex <= center && rightIndex <= right){
            if(array[leftIndex] < array[rightIndex]){
                state[index++] = array[rightIndex++];
            } else {
                state[index++] = array[leftIndex++];
            }
        }
        
        if(leftIndex < center){
            for(let int = leftIndex; int <= center; int++){
                state[index++] = array[int];
            }
        } else {
            for(let int = rightIndex; int <= right; int++){
                state[index++] = array[int];
            }
        }

        for(let int = 0; int <= right; int++){
            array[int] = state[int];
        }
    }

    function mergeSort(array, left, right){
        if(left < right){
            const center = parseInt((left + right)/2);
            mergeSort(array, left, center);
            mergeSort(array, center + 1, right);
            merge(array, center, left, right);
        }

    }
 
    mergeSort(temp, 0, temp.length - 1);
    result.push(temp.join(''));

    result.map(ans => console.log(ans));
})("2143");

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const N = fs.readFileSync('/dev/stdin').toString().trim();
    let result = [];
    let temp = N.split('');
    temp = temp.map(num => parseInt(num));

    for(let int = 0; int < temp.length; int++){
        for(let int2 = 1; int2 < temp.length; int2++){
            if(temp[int2 - 1] < temp[int2]){
                const state = temp[int2 - 1];
                temp[int2 - 1] = temp[int2];
                temp[int2] = state;
            }
        }
    }

    result.push(temp.join(''));

    result.map(ans => console.log(ans));
    이상한게 백준에서는 병합정렬로 풀 경우 틀렸다고 나온다. 추후에 뭐가 잘못된건지 또는 그냥 원하는 방식이 아니라서 그런건지 알아보자
*/