/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
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
    let result = '';
    let state = Object.entries(romanValue).sort((a, b) => {
        if(a[1] > b[1]){
            return -1;
        } else {
            return 1;
        }
    });

    for(const [value, key] of state){
        while((num - key) >= 0){
            num -= key;
            result += value;
        }
        if(num === 0){
            break;
        }
    }
    
    return result;
};
/**
 * Runtime: 176 ms, faster than 34.09% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 47.6 MB, less than 16.10% of JavaScript online submissions for Integer to Roman.
 */
const intToRoman = function(num) {
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
    let result = '';

    for(const [value, key] of Object.entries(romanValue).sort((a, b) => {
        if(a[1] > b[1]){
            return -1;
        } else {
            return 1;
        }
    })){
        while((num - key) >= 0){
            num -= key;
            result += value;
        }
        if(num === 0){
            break;
        }
    }
    
    return result;
};
/**
 * Runtime: 168 ms, faster than 53.59% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 47.4 MB, less than 16.93% of JavaScript online submissions for Integer to Roman.
 */
const intToRoman = function(num) {
    const romanNumbers = {
        1000 : "M",
        900 : "CM",
        500 : "D",
        400 : "CD",
        100 : "C",
        90 : "XC",
        50 : "L",
        40 : "XL",
        10 : "X",
        9 : "IX",
        5 : "V",
        4 : "IV",
        1 : "I",
    };
    const romanValue = [
        1000,
        900,
        500,
        400,
        100,
        90,
        50,
        40,
        10,
        9,
        5,
        4,
        1
    ];
    let result = '';

    for(let int = 0; int < romanValue.length; int++){
        while((num - romanValue[int]) >= 0){
            num -= romanValue[int];
            result += romanNumbers[romanValue[int]];
        }
        if(num === 0){
            break;
        }
    }
    
    return result;
};
/**
 * Runtime: 144 ms, faster than 96.30% of JavaScript online submissions for Integer to Roman.
 * Memory Usage: 45.8 MB, less than 35.07% of JavaScript online submissions for Integer to Roman.
 */


intToRoman(3);
intToRoman(4);
intToRoman(9);
intToRoman(58);
intToRoman(1994);