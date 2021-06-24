/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    let result = '';
    
    if(s.length > 2){
        let start = 0;
        let end = 0;
        let length = 0;

        for(let int = 0; int < s.length; int++){
            const oddLength = palindrome(s, int, int);
            const evenLength = palindrome(s, int, (int + 1));
            const maxLength = oddLength > evenLength ? oddLength : evenLength;

            if(maxLength > length){
                length = maxLength;
                start = int - parseInt((maxLength - 1) / 2);
                end = int + parseInt(maxLength / 2) + 1;
            }
        }

        result = s.substring(start, end);

        function palindrome (str, left, right){
            while(left >= 0 && right < s.length && str[left] === str[right]){
                left--;
                right++;
            }
            
            return right - left - 1;
        }
    } else {
        result = s[0] !== s[1] ? s[0] : s;
    }

    return result;
};
/**
 * Runtime: 100 ms, faster than 84.04% of JavaScript online submissions for Longest Palindromic Substring.
 * Memory Usage: 40 MB, less than 5.24% of JavaScript online submissions for Longest Palindromic Substring.
 */

longestPalindrome("babad");
longestPalindrome("cbbd");
longestPalindrome("a");
longestPalindrome("ac");