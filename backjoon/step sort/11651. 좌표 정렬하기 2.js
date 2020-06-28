(function main(N, numbers){
    let temp = numbers.map(num => num.split(' ').map(xy => parseInt(xy)));
    
    function quickSort(arr, leftIndex, rightIndex) {
        const center = Math.floor((leftIndex + rightIndex) /2 );
        const pivot = arr[center];
        let left = leftIndex;
        let right = rightIndex;

        while(left <= right){
            while(arr[left][1] < pivot[1] || (arr[left][0] < pivot[0]  && arr[left][1] === pivot[1])){
                left++;
            }
            while(arr[right][1] > pivot[1] || (arr[right][0] > pivot[0] && arr[right][1] === pivot[1])){
                right--;
            }
            if(left <= right){
                const state = arr[left];
                arr[left] = arr[right];
                arr[right] = state;
                left++;
                right--;
            }
        }

        if(left < rightIndex){
            quickSort(arr, left, rightIndex);
        }
        if(right > leftIndex){
            quickSort(arr, leftIndex, right);
        }
        
    }
    
    quickSort(temp, 0, N - 1);
    
    const result = temp.map(ans => ans.join(' ')).join('\n');

    console.log(result);
})(5, ["0 4", "1 2", "1 -1", "2 2", "3 3"]);

/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const numbers = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(numbers.shift());
    let temp = numbers.map(num => num.split(' ').map(xy => parseInt(xy)));
    
    function quickSort(arr, leftIndex, rightIndex) {
        const center = Math.floor((leftIndex + rightIndex) /2 );
        const pivot = arr[center];
        let left = leftIndex;
        let right = rightIndex;

        while(left <= right){
            while(arr[left][1] < pivot[1] || (arr[left][0] < pivot[0]  && arr[left][1] === pivot[1])){
                left++;
            }
            while(arr[right][1] > pivot[1] || (arr[right][0] > pivot[0] && arr[right][1] === pivot[1])){
                right--;
            }
            if(left <= right){
                const state = arr[left];
                arr[left] = arr[right];
                arr[right] = state;
                left++;
                right--;
            }
        }

        if(left < rightIndex){
            quickSort(arr, left, rightIndex);
        }
        if(right > leftIndex){
            quickSort(arr, leftIndex, right);
        }
        
    }
    
    quickSort(temp, 0, N - 1);
    
    const result = temp.map(ans => ans.join(' ')).join('\n');

    console.log(result);
*/