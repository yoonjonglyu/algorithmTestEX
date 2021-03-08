/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function(num1, num2) {
    const result = new Array((num1.length + num2.length - 1)).fill(0);

    for(let int = (num1.length - 1); int >= 0; int--){
        for(let idx = (num2.length - 1); idx >= 0; idx--){
            const ans = (num1[int] * num2[idx]);
            result[int + idx] += ans;
        }
    }
    
    for(let int = (result.length - 1); int >= 0; int--){
        if(int - 1 >= 0){
            result[int - 1] += Math.floor(result[int] / 10);
            result[int] = (result[int] % 10);
        }
    }

    return result.join("").replace(/^0+/, '' ) === "" ? "0" : result.join("").replace(/^0+/, '' );
};

/**
 * Runtime: 92 ms, faster than 78.64% of JavaScript online submissions for Multiply Strings.
 * Memory Usage: 41.1 MB, less than 49.70% of JavaScript online submissions for Multiply Strings.
 */
const multiply = function(num1, num2) {
     if(num1 === "0" || num2 === "0"){
         return "0";
     }
    const result = new Array((num1.length + num2.length - 1)).fill(0);

    for(let int = (num1.length - 1); int >= 0; int--){
        for(let idx = (num2.length - 1); idx >= 0; idx--){
            const ans = (num1[int] * num2[idx]);
            result[int + idx] += ans;
        }
    }
    
    for(let int = (result.length - 1); int >= 0; int--){
        if(int - 1 >= 0){
            result[int - 1] += Math.floor(result[int] / 10);
            result[int] = (result[int] % 10);
        }
    }

    return result.join("").replace(/^0+/, '' );
};
/**
 * Runtime: 80 ms, faster than 98.20% of JavaScript online submissions for Multiply Strings.
 * Memory Usage: 40.9 MB, less than 60.68% of JavaScript online submissions for Multiply Strings.
 */

multiply("2", "3");
multiply("9", "9");
multiply("123", "456");