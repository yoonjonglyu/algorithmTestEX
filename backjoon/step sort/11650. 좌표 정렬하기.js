(function main(N, numbers){
    let temp = numbers.map(num => num.split(' ').map(xy => parseInt(xy)));
    
    function quickSort(arr, leftIndex, rightIndex) {
        const center = Math.floor((leftIndex + rightIndex) /2 );
        const pivot = arr[center];
        let left = leftIndex;
        let right = rightIndex;

        while(left <= right){
            while(arr[left][0] < pivot[0] || (arr[left][1] < pivot[1]  && arr[left][0] === pivot[0])){
                left++;
            }
            while(arr[right][0] > pivot[0] || (arr[right][1] > pivot[1] && arr[right][0] === pivot[0])){
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
})(5, ["3 4", "1 1", "1 -1", "2 2", "3 3"]);

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
            while(arr[left][0] < pivot[0] || (arr[left][1] < pivot[1]  && arr[left][0] === pivot[0])){
                left++;
            }
            while(arr[right][0] > pivot[0] || (arr[right][1] > pivot[1] && arr[right][0] === pivot[0])){
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
    시간제한에 걸린다. 메모리 제한 때문에 카운팅 정렬은 불가 병합정렬도 js로는 안될거같고 퀵정렬로 해야할거같다.
    퀵 정렬해도 result를 맵으로 콘솔에 찍으면 시간복잡도에 걸려서 시간초과가 뜬다. 시간 복잡도를 따지는 문제에서는 출력방식도 고려해야할거 같다.
    솔직히 맵으로 콘솔찍는게 원하는 동작에는 더 알맞지만 원하는 output이라는 측면에서는 아닌가보다.
*/