/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
    let result = '';
    const state = [];
    for(let int = 0; int < numRows; int++){
        state.push([]);
    }
    const zigCount = parseInt(numRows / 2);
    const index = [0, 1, 0];

    for(let int = 0; int < s.length; int++){
        if(index[1] % 2 === 0){
            while(index[0] < ((numRows - zigCount - 1) + index[2])){
                state[index[0]].push('');
                index[0]++;
            }
        }

        state[index[0]].push(s[int]);
        
        if(index[1] % 2 === 0){
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
 *  1차 테스트케이스 통과 일단 지그재그를 만들고, 그다음에 사이사이 규칙을 찾아서 적용시키는 과정에서 막혔다.
 *  오늘은 컨디션이 안좋으니 다음에 다시 생각하자.
 */

convert("PAYPALISHIRING", 4);

convert("PAYPALISHIRING", 3);
convert("A", 1);