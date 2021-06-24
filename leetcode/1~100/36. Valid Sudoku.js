/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    const row = [];
    const column = [];
    const box = [];

    for(let rdx = 0; rdx < board.length; rdx++){
        const brx = ((rdx - (rdx % 3)) / 3);
        if(row[rdx] === undefined){
            row.push({});
        }
        if(box[brx] === undefined){
            box.push([]);
        }
        for(let cdx = 0; cdx < board.length; cdx++){
            const crx = ((cdx - (cdx % 3)) / 3);
            if(column[cdx] === undefined){
                column.push({});
            }
            if(box[brx][crx] === undefined){
                box[brx].push({});
            }

            const currentState = board[rdx][cdx];
            if(currentState !== "."){
                if(row[rdx][currentState] === undefined){
                    row[rdx][currentState] = 0;
                }
                if(column[cdx][currentState] === undefined){
                    column[cdx][currentState] = 0;
                }
                if(box[brx][crx][currentState] === undefined){
                    box[brx][crx][currentState] = 0;
                }
                row[rdx][currentState]++;
                column[cdx][currentState]++;
                box[brx][crx][currentState]++;

                if(row[rdx][currentState] > 1 || column[cdx][currentState] > 1 || box[brx][crx][currentState] > 1){
                    return false;
                }
            }
        }
    }

    return true;
};
/**
 * Runtime: 88 ms, faster than 96.98% of JavaScript online submissions for Valid Sudoku.
 * Memory Usage: 42.9 MB, less than 45.35% of JavaScript online submissions for Valid Sudoku.
 */

isValidSudoku([["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]);
isValidSudoku([["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]);