/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function (nums, target) {
    const result = [];

    if (nums.length > 3) { // nums의 원소가 4가 안될시 애초에 조건에 충족 할 수 없다.
        nums.sort((a, b) => a - b); // 정렬 과정
        /** 4개를 맞추고 중복을 없애는 과정까지는 끝냈다. */
        const sumMap = new Map();

        let a = 0;
        let b = (nums.length - 1);  // 양끝에서 시작
        while (a < b) {
            let c = a + 1;
            let d = b - 1;
            const ab = (nums[a] + nums[b]);
            while (c < d) {
                const cd = (nums[c] + nums[d]);

                if (target === (ab + cd)) {
                    const state = [nums[a], nums[b], nums[c], nums[d]];
                    if (!sumMap.has(state.toString())) {
                        result.push(state);
                        sumMap.set(state.toString());
                    }
                }
                if ((ab + cd) < target) {
                    while (nums[c] === nums[c + 1]) {
                        c++;
                    }
                    c++;
                } else {
                    while (nums[d] === nums[d - 1]) {
                        d--;
                    }
                    d--;
                }
            }
            if (ab < target) {
                while (nums[a] === nums[a + 1]) {
                    a++;
                }
                a++;
            } else {
                while (nums[b] === nums[b - 1]) {
                    b--;
                }
                b--;
            }
        }
    };

    return result;
}
/** 반복 문 2개로 처리가 안되나 싶다가도 그냥 내가 미숙해서 생각 못해내는 거 같기에 소스 코드를 보존한다. */
const fourSum = function (nums, target) {
    const result = [];

    if (nums.length > 3) { // nums의 원소가 4가 안될시 애초에 조건에 충족 할 수 없다.
        nums.sort((a, b) => a - b); // 정렬 과정
        /** 4개를 맞추고 중복을 없애는 과정까지는 끝냈다. */
        const sumMap = new Map();
        let a = 0;  // 양끝에서 시작
        while (a < (nums.length - 2)) {
            let b = (nums.length - 1);
            while (b > a) {
                let c = a + 1;
                let d = b - 1;
                const ab = (nums[a] + nums[b]);
                while (c < d) {
                    const cd = (nums[c] + nums[d]);
                    if (target === (ab + cd)) {
                        const state = [nums[a], nums[b], nums[c], nums[d]];
                        if (!sumMap.has(state.toString())) {
                            result.push(state);
                            sumMap.set(state.toString());
                        }
                    }
                    if ((ab + cd) < target) {
                        while (nums[c] === nums[c + 1]) {
                            c++;
                        }
                        c++;
                    } else {
                        while (nums[d] === nums[d - 1]) {
                            d--;
                        }
                        d--;
                    }
                }
                while (nums[b] === nums[b - 1]) {
                    b--;
                }
                b--;
            }

            while (nums[a] === nums[a + 1]) {
                a++;
            }
            a++;
        }
    };

    return result;
}
/**
 * Runtime: 128 ms, faster than 35.23% of JavaScript online submissions for 4Sum.
 * Memory Usage: 40.6 MB, less than 63.07% of JavaScript online submissions for 4Sum.
 */
fourSum([-3, -2, -1, 0, 0, 1, 2, 3], 0);
fourSum([1, 0, -1, 0, -2, 2], 0);

fourSum([], 0);
