(function main(N, numbers){
    let temp = numbers.map(num => parseInt(num));
    let result = [];

    function merge(arr, left, center, right){
        let le = left;
        let ce = center + 1;
        let index = left;

        while(le <= center && ce <= right){ // 절반으로 나눈 배열을 각각 비교해서 정렬
            if(arr[le] < arr[ce]){
                result[index++] = arr[le++];
            } else {
                result[index++] = arr[ce++];
            }
        }
        
        if(le > center){ // 정렬이 좌우 어디에 속하냐를 구분해서 정렬
            for(let int = ce; int <= right; int++){
                result[index++] = arr[int];
                
            }
        } else {
            for(let int = le; int <= center; int++){
                result[index++] = arr[int];
            }
        }

        for(let int = left; int <= right; int++){ // 베이스가 되는 배열에 정렬한 내용을 삽입
            arr[int] = result[int];
        }
        
    }

    function mergeSort(arr, left, right){
        if(left < right){
            const center = parseInt((left+right)/2); // 분할
            mergeSort(arr, left, center); // 좌측 정렬
            mergeSort(arr, center+1, right); // 우측 정렬 
            merge(arr, left, center, right); // 정렬
        }
    }

    mergeSort(temp, 0, N-1);

    result.map(ans => console.log(ans));
})(5, ["5", "2", "3", "4", "1"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    let temp = numbers.map(num => parseInt(num));
    let result = [];

    function merge(arr, left, center, right){
        let le = left;
        let ce = center + 1;
        let index = left;

        while(le <= center && ce <= right){ // 절반으로 나눈 배열을 각각 비교해서 정렬
            if(arr[le] < arr[ce]){
                result[index++] = arr[le++];
            } else {
                result[index++] = arr[ce++];
            }
        }
        
        if(le > center){ // 정렬이 좌우 어디에 속하냐를 구분해서 정렬
            for(let int = ce; int <= right; int++){
                result[index++] = arr[int];
                
            }
        } else {
            for(let int = le; int <= center; int++){
                result[index++] = arr[int];
            }
        }

        for(let int = left; int <= right; int++){ // 베이스가 되는 배열에 정렬한 내용을 삽입
            arr[int] = result[int];
        }
        
    }

    function mergeSort(arr, left, right){
        if(left < right){
            const center = parseInt((left+right)/2); // 분할
            mergeSort(arr, left, center); // 좌측 정렬
            mergeSort(arr, center+1, right); // 우측 정렬 
            merge(arr, left, center, right); // 정렬
        }
    }
    
    mergeSort(temp, 0, N-1);

    result.map(ans => console.log(ans));

    자바스크립트라고 차별하는건지.. 문제 설명에 병합정렬이나 힙정렬이면 풀린다길래 병합으로 풀었는데도 시간초과가뜬다..-  -
*/