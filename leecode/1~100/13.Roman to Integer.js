/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
    const romanValue = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000,
        "IV" : 4,
        "IX" : 9,
        "XL" : 40,
        "XC" : 90,
        "CD" : 400,
        "CM" : 900,
    };
    const romanNumbers = [
        "IV",
        "IX",
        "XL",
        "XC",
        "CD",
        "CM",
        "I",
        "V",
        "X",
        "L",
        "C",
        "D",
        "M"
    ];
    let result = 0;
    let pivot = 0;
    
    while(s.length > 0){
        const state = s.includes(romanNumbers[pivot]);
        if(state === true){
            const reg = new RegExp(romanNumbers[pivot]);
            s = s.replace(reg, '');
            result += romanValue[romanNumbers[pivot]];
        } else {
            pivot++;
        }
    }

    return result;
};

/**
 * Runtime: 164 ms, faster than 71.24% of JavaScript online submissions for Roman to Integer.
 * Memory Usage: 46.2 MB, less than 6.64% of JavaScript online submissions for Roman to Integer.
 */
romanToInt("III");
romanToInt("IV");
romanToInt("IX");
romanToInt("MCMXCIV");
