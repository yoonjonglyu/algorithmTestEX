/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function(haystack, needle) {
    let result;

    if(needle.length === 0){
        result = 0;
    } else {
        for(let int = 0; int < haystack.length; int++){
            if(haystack[int] !== needle[0]){
                while(haystack[int] !== needle[0] && haystack[int] !== undefined){
                    int++;
                }
                if(haystack[int] === undefined){
                    break;
                }
            }

            let count = 1;
            while(count < needle.length){
                if(haystack[int + count] !== needle[count]){
                    break;
                }
                count++;
            }
            if(count === needle.length){
                result = int;
                break;
            }
        }
        if(result === undefined){
            result = -1;
        }
    }

    return result;
};
/**
 * Runtime: 2580 ms, faster than 12.24% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 40.8 MB, less than 7.31% of JavaScript online submissions for Implement strStr().
 */
const strStr = function(haystack, needle) {
    let result;

    if(needle.length === 0){
        result = 0;
    } else {
        for(let int = 0; int < haystack.length; int++){
            let count = 0;
            while(count < needle.length){
                if(haystack[int + count] !== needle[count]){
                    break;
                }
                count++;
            }
            if(count === needle.length){
                result = int;
                break;
            }
        }
        if(result === undefined){
            result = -1;
        }
    }

    return result;
};
/**
 * Runtime: 2724 ms, faster than 9.29% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 40.2 MB, less than 24.60% of JavaScript online submissions for Implement strStr().
 */
const strStr = function(haystack, needle) {
    let result;

    if(needle.length === 0){
        result = 0;
    } else {
        let state = '';
        for(let int = 0, count = 0; int < haystack.length; int++){
            if(haystack[int] === needle[count]){
                state += haystack[int];
                count++;
            } else {
                int -= count;
                state = '';
                count = 0;
                continue;
            }
            if(state === needle){
                result = int - (count - 1);
                break;
            }
        }
        if(result === undefined){
            result = -1;
        }
    }

    return result;
};
/**
 * Runtime: 88 ms, faster than 34.24% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 40.6 MB, less than 12.13% of JavaScript online submissions for Implement strStr().
 */
const strStr = function(haystack, needle) {
    let result;

    if(needle.length === 0){
        result = 0;
    } else {
        for(let int = 0, count = 0; int < haystack.length; int++){
            if(haystack[int] === needle[count]){
                count++;
            } else {
                int -= count;
                count = 0;
                continue;
            }
            if(count === needle.length){
                result = int - (count - 1);
                break;
            }
        }
        if(result === undefined){
            result = -1;
        }
    }

    return result;
};
/**
 * Runtime: 76 ms, faster than 87.31% of JavaScript online submissions for Implement strStr().
 * Memory Usage: 38.7 MB, less than 67.73% of JavaScript online submissions for Implement strStr().
 */
strStr("hello", "ll")
strStr("aaaaa", "bba")
strStr("mississippi","a")
strStr("a","a")
strStr("mississippi", "issip")