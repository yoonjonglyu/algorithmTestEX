/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
    let result = false;

    if(x >= 0){
        let number = x;
        let state = 0;

        while(number > 0){
            state += (number % 10);
            number = parseInt(number / 10);
            if(number > 0){
                state *= 10;
            }
        }

        if(x === state){
            result = true;
        }
    }

    return result;
};
/**
 * Runtime: 224 ms, faster than 53.56% of JavaScript online submissions for Palindrome Number.
 * Memory Usage: 48.4 MB, less than 5.21% of JavaScript online submissions for Palindrome Number.
 */

isPalindrome(121);
isPalindrome(0);
