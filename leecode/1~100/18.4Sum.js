/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
    const result = [];

    if(nums.length > 3){ // nums의 원소가 4가 안될시 애초에 조건에 충족 할 수 없다.
        nums.sort(); // 정렬 과정
        /** 4개를 맞추고 중복을 없애는 과정까지는 끝냈다. */
        const sumMap = new Map();
        let a = 0;
        let b = (nums.length - 1);  // 양끝에서 시작
        while(a < b){
            let c = a + 1;
            let d = b - 1;
            const ab = (nums[a] + nums[b]);
            while(c < d){
                const cd = (nums[c] + nums[d]);

                if(target === (ab + cd)){
                    const state = [nums[a], nums[b], nums[c], nums[d]];
                    if(!sumMap.has(state.toString())){
                        result.push(state);
                        sumMap.set(state.toString());
                    }
                    
                }
                while(nums[c] === nums[c + 1]){
                    c++;
                }
                c++;
                while(nums[d] === nums[d - 1]){
                    d--;
                }
                d--;
            }
            while(nums[a] === nums[a + 1]){
                a++;
            }
            a++;
            while(nums[b] === nums[b - 1]){
                b--;
            }

            b--;
        }
    }

    return result;
};

fourSum([1,0,-1,0,-2,2], 0);