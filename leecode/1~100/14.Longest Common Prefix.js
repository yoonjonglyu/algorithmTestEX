/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
    let result = "";
    if(strs.length > 0){
        const pivot = strs.shift();

        for(let int = 0; int < pivot.length; int++){
            if(strs.length > 0){
                for(let int2 = 0; int2 < strs.length; int2++){
                    if(pivot[int] !== strs[int2][int]){
                        int = pivot.length;
                        break;
                    } else if(int2 === (strs.length - 1)){
                        result += pivot[int];
                    }
                }
            } else {
                result += pivot[int];   
            }
        }   
    }

    return result;
};
/**
 * Runtime: 96 ms, faster than 21.01% of JavaScript online submissions for Longest Common Prefix.
 * Memory Usage: 40.4 MB, less than 16.67% of JavaScript online submissions for Longest Common Prefix.
 */

const longestCommonPrefix = function(strs) {
    let result = "";

    if(strs.length > 0){
        const [pivot, ...str]  = strs;

        for(let int = 0; int < pivot.length; int++){
            if(str.length > 0){
                for(let int2 = 0; int2 < str.length; int2++){
                    if(pivot[int] !== str[int2][int]){
                        int = pivot.length;
                        break;
                    } else if(int2 === (str.length - 1)){
                        result += pivot[int];
                    }
                }
            } else {
                result = pivot;   
            }
        }   
    }

    return result;
};
/**
 * Runtime: 88 ms, faster than 51.38% of JavaScript online submissions for Longest Common Prefix.
 * Memory Usage: 40.6 MB, less than 16.67% of JavaScript online submissions for Longest Common Prefix.
 */

const longestCommonPrefix = function(strs) {
    let result = "";

    if(strs.length > 0){
        const [pivot, ...str]  = strs;

        for(let int = 0; int < pivot.length; int++){
            if(str.length > 0){
                for(let int2 = 0; int2 < str.length; int2++){
                    if(pivot[int] !== str[int2][int]){
                        result = pivot.substring(0, int);
                        int = pivot.length;
                        break;
                    } else if(int2 === (str.length - 1)) {
                        result = pivot;
                    }
                }
            } else {
                result = pivot;   
            }
        }   
    }

    return result;
};
/**
 * Runtime: 76 ms, faster than 91.42% of JavaScript online submissions for Longest Common Prefix.
 * Memory Usage: 40.1 MB, less than 16.67% of JavaScript online submissions for Longest Common Prefix.
 */

longestCommonPrefix(["flower","flow","flight"]);
longestCommonPrefix(["dog","racecar","car"]);
longestCommonPrefix(["dog"]);