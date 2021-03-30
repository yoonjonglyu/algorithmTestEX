/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 const rotate = function(matrix) {
    const matrixLength = (matrix.length - 1);

    for(let y = 0; y < parseInt((matrix.length + 1) / 2); y++){
        for(let x = 0; x < parseInt(matrix.length / 2); x++){
            const state = matrix[matrixLength - x][y];
            matrix[matrixLength - x][y] = matrix[matrixLength - y][matrixLength - x];
            matrix[matrixLength - y][matrixLength - x] = matrix[x][matrixLength - y];
            matrix[x][matrixLength - y] = matrix[y][x];
            matrix[y][x] = state;
        }
    }
};
/**
 * Runtime: 76 ms, faster than 81.49% of JavaScript online submissions for Rotate Image.
 * Memory Usage: 38.7 MB, less than 66.63% of JavaScript online submissions for Rotate Image.
 */
/**
 *  Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]
 *  Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]] 
 * 규칙성 가장 끝자리 배열의 첫번째 자리부터 결과의 가장 첫번째 앞자리를 차지함
 * y의 마지막 15 => r의 y0의 첫번째 y의 마지막에서 두번째 13 => r의 y0의 2번째 이런식으로 반복된다.
 */
 const rotate = function(matrix) {
    const matrixLength = (matrix.length - 1);

    for(let y = 0; y < parseInt((matrix.length + 1) / 2); y++){
        for(let x = 0; x < parseInt(matrix.length / 2); x++){
            const state = matrix[matrixLength - x][y];
            matrix[matrixLength - x][y] = matrix[matrixLength - y][matrixLength - x];
            matrix[matrixLength - y][matrixLength - x] = matrix[x][matrixLength - y];
            matrix[x][matrixLength - y] = matrix[y][x];
            matrix[y][x] = state;
        }
    }
};

rotate([[1,2],[3,4]]);
rotate([[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]);