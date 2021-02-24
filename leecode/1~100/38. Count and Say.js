/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function(n) { // 동적 계획법 메모이제이션 기법과 재귀방식으로 짜봄
    const cache = {
        1 : "1",
        2 : "11",
        3 : "21",
        4 : "1211",
        5 : "111221",
        6 : "312211",
        7 : "13112221",
        8 : "1113213211",
        9 : "31131211131221",
        10 : "13211311123113112211"
    };

    const countSay = (N) => {
        if(cache[N] !== undefined){
            return cache[N];
        }

        const state = countSay(N - 1);
        let result = "";
        let count = 1;
        let current = state[0];

        for(let int = 1; int <= state.length; int++){
            if(current === state[int]){
                count++;
            } else {
                result += `${count}${current}`;
                current = state[int];
                count = 1;
            }
        }

        return cache[N] = result;
    }

    return countSay(n);
};
/**
 * Runtime: 80 ms, faster than 87.23% of JavaScript online submissions for Count and Say.
 * Memory Usage: 41.5 MB, less than 29.28% of JavaScript online submissions for Count and Say.
 */
const countAndSay = function(n) {
    const cache = {
        1 : "1",
        2 : "11",
        3 : "21",
        4 : "1211"
    };

    const countSay = (N) => {
        if(cache[N] !== undefined){
            return cache[N];
        }

        const state = countSay(N - 1);
        let result = "";
        let count = 1;
        let current = state[0];

        for(let int = 1; int <= state.length; int++){
            if(current === state[int]){
                count++;
            } else {
                result += `${count}${current}`;
                current = state[int];
                count = 1;
            }
        }

        return cache[N] = result;
    }

    return countSay(n);
};
/**
 * Runtime: 68 ms, faster than 99.69% of JavaScript online submissions for Count and Say.
 * Memory Usage: 40.9 MB, less than 50.00% of JavaScript online submissions for Count and Say.
 */
countAndSay(4);
countAndSay(11);
/*
The following are the terms from n=1 to n=10 of the count-and-say sequence:
 1.     1
 2.     11
 3.     21
 4.     1211
 5.     111221 
 6.     312211
 7.     13112221
 8.     1113213211
 9.     31131211131221
10.     13211311123113112211
*/