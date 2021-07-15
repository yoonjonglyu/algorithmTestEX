/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    const result = [];
    let row = 0;
    let direction = "R";

    getSpiral();

    function getSpiral(){
        if(direction === "R" && matrix.length > 0){
            result.push(...matrix.shift());
            direction = "D";
            getSpiral();
        }
        if(direction === "D" && matrix.length > 0){
            if(row < matrix.length){
                matrix[row].length > 0 && result.push(matrix[row].pop());
                row++;
            } else {
                row = 0;
                direction = "L";
            }
            getSpiral();
        }
        if(direction === "L" && matrix.length > 0){
            result.push(...matrix.pop().reverse());
            direction = "U";
            row = (matrix.length - 1);
            getSpiral();
        }
        if(direction === "U" && matrix.length > 0){
            if(row > 0){
                matrix[row].length > 0 && result.push(matrix[row].shift());
                row--;
            } else {
                row = 0;
                direction = "R";
            }
            getSpiral();
        }
    }
    
    return result;
};
/**
 * Runtime: 72 ms, faster than 79.83% of JavaScript online submissions for Spiral Matrix.
 * Memory Usage: 38.5 MB, less than 40.28% of JavaScript online submissions for Spiral Matrix.
 */

const spiralOrder = function (matrix) {
    const result = [];
    let row = 0;
    let direction = "R";

    getSpiral();

    function getSpiral(){
        if(direction === "R" && matrix.length > 0){
            result.push(...matrix.shift());
            direction = "D";
            getSpiral();
        }
        if(direction === "D" && matrix.length > 0){
            if(row < matrix.length && matrix[row].length > 0){
                result.push(matrix[row].pop());
                row++;
            } else {
                row = 0;
                direction = "L";
            }
            getSpiral();
        }
        if(direction === "L" && matrix.length > 0){
            result.push(...matrix.pop().reverse());
            direction = "U";
            row = (matrix.length - 1);
            getSpiral();
        }
        if(direction === "U" && matrix.length > 0){
            if(row > 0 && matrix[row].length > 0){
                matrix[row].length > 0 && result.push(matrix[row].shift());
                row--;
            } else {
                row = 0;
                direction = "R";
            }
            getSpiral();
        }
    }
    
    return result;
};
/**
 * Runtime: 60 ms, faster than 98.91% of JavaScript online submissions for Spiral Matrix.
 * Memory Usage: 38.6 MB, less than 40.28% of JavaScript online submissions for Spiral Matrix.
 */