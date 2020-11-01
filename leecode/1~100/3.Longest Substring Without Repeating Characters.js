/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let result = 0;
    let state = '';
    let count = 0;
    
    if(s.length > 0){
        for(let int = 0; int <= s.length; int++){
            if(s[int] !== s[int - 1]){
                if(state[0] !== s[int]){
                    if(s[int] !== s[int + 1]){
                        state += s[int];
                        count = state.length;
                    }
                } else {       
                    state = s[int];
                    count = state.length;
                }  
            } else {   
                state = s[int];
                count = state.length;
            }
            if(result < count){
                result = count
            }
        }
        if(s.length === 1){
            result = 1;
        }
    }

    return result;
};
// 이방식으로는 안된다... 너무 더럽다. 버리자.

const lengthOfLongestSubstring = function(s) {
    let result = 0;
    let state = '';
    let count = 0;

    for(let int = 0; int < s.length; int++){
        const index = state.indexOf(s[int]);
        if(index !== -1){
            count += (index + 1);
        }
        state = s.substring(count, int + 1);
        if(result < state.length){
            result = state.length;
        }
    }

    return result;
};

/**
 * Runtime: 88 ms, faster than 99.42% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 * Memory Usage: 41 MB, less than 5.23% of JavaScript online submissions for Longest Substring Without Repeating Characters.
 */

lengthOfLongestSubstring("cdd");
lengthOfLongestSubstring("");
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring(" ");
lengthOfLongestSubstring("aa");
lengthOfLongestSubstring("au");
