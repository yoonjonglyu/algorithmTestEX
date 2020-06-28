(function main(N, numbers){
    let temp = numbers.map(num => parseInt(num));
    const result =  quickSort(temp, 0, N - 1);

    function quickSort(arr, left, right){
        const center = Math.floor((left + right) / 2);
        const pivot = arr[center];
        let leftIndex = left;
        let rightIndex = right;

        while(leftIndex <= rightIndex){
            while(arr[leftIndex] < pivot){
                leftIndex++;
            }
            while(arr[rightIndex] > pivot){
                rightIndex--;
            }

            if(leftIndex <= rightIndex){
                const state = arr[leftIndex];
                arr[leftIndex] = arr[rightIndex];
                arr[rightIndex] = state;
                leftIndex++;
                rightIndex--;
            }
        }
        
        if(leftIndex < right){
            quickSort(arr, leftIndex, right);
        }
        if(rightIndex > left){
            quickSort(arr, left, rightIndex);
        }

        return arr;
    }
    
    console.log(result.join('\n'));
})(5, ["5", "2", "3", "4", "1"]);
/* 백준은 값을 인자로 주는게 아니라 읽어와야한다
    const fs = require('fs');
    const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    const N = parseInt(input.shift());
    const numbers = input;
    let temp = numbers.map(num => parseInt(num));
    const result =  quickSort(temp, 0, N - 1);

    function quickSort(arr, left, right){
        const center = Math.floor((left + right) / 2);
        const pivot = arr[center];
        let leftIndex = left;
        let rightIndex = right;

        while(leftIndex <= rightIndex){
            while(arr[leftIndex] < pivot){
                leftIndex++;
            }
            while(arr[rightIndex] > pivot){
                rightIndex--;
            }

            if(leftIndex <= rightIndex){
                const state = arr[leftIndex];
                arr[leftIndex] = arr[rightIndex];
                arr[rightIndex] = state;
                leftIndex++;
                rightIndex--;
            }
        }
        
        if(leftIndex < right){
            quickSort(arr, leftIndex, right);
        }
        if(rightIndex > left){
            quickSort(arr, left, rightIndex);
        }

        return arr;
    }
    
    console.log(result.join('\n'));
*/