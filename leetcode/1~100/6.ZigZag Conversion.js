/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) { // 너무 더러워서 손절 ㅜㅜ
    let result = '';
    const state = [];
    for(let int = 0; int < numRows; int++){
        state.push([]);
    }
    const zigCount = parseInt(numRows / 2);
    const index = [0, 1, 0];
    for(let int = 0; int < s.length; int++){
        if(index[1] % 2 === 0 && numRows !== 2){
            while(index[0] < (zigCount - index[2])){
                state[index[0]].push('');
                index[0]++;
            }

            index[2]++;
            if(index[2] >= zigCount){
                index[2] = 0;
            }
        }

        state[index[0]].push(s[int]);
        
        if(index[1] % 2 === 0 && numRows !== 2){
            while((index[0] + 1) < numRows){
                index[0]++;
                state[index[0]].push('');
            }
        }
        
        if((index[0] + 1) < numRows){ // zig
            index[0]++;
        } else {
            if(index[2] === 0){
                index[1]++;
            }
            index[0] = 0;
        }
    }

    result = state.map((arr) => arr.join('')).join('');

    return result;
};
/**
 *  다시 생각한 코드
 */
const convert = function(s, numRows) {
    let result = '';
    const state = [];
    const index = [0, true];

    for(let int = 0; int < numRows; int++){
        state.push([]);
    }
    if(numRows > 1){
        for(let int = 0; int < s.length; int++){
            state[index[0]].push(s[int]);
            
            if((index[0] + 1) <= numRows && index[1] === true){ // zig
                index[0]++;
            } else if((index[0] - 1) >= -1 && index[1] === false){
                index[0]--;
            }
            
            if(index[0] === numRows){
                index[0] -= 2;
                index[1] = false;
            } else if (index[0] === -1){
                index[0] += 2;
                index[1] = true;
            }
        }
    
        result = state.map((arr) => arr.join('')).join('');
    } else {
        result = s;
    }


    return result;
};

/**
 * Runtime: 112 ms, faster than 58.60% of JavaScript online submissions for ZigZag Conversion.
Memory Usage: 45.7 MB, less than 5.34% of JavaScript online submissions for ZigZag Conversion.
 */

convert("AB", 1);
convert("ABC", 2);
convert("ABCD", 2);
convert("PAYPALISHIRING", 4);

convert("PAYPALISHIRING", 3);
convert("A", 1);

