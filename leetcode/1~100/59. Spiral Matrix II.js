/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
    const result = new Array(n).fill(0).map((_) => new Array(n).fill(true));
    const MaxLength = n * n;

    let rdx = 0;
    let cdx = 0;
    let direction = "R";
    for (let int = 1; int <= MaxLength; int++) {
        result[rdx][cdx] = int;

        if (direction === "R") {
            if (result[rdx][cdx + 1] === true) {
                cdx++;
            } else {
                rdx++;
                direction = "D";
            }
        } else if (direction === "D") {
            if (result[rdx + 1] !== undefined && result[rdx + 1][cdx] === true) {
                rdx++;
            } else {
                cdx--;
                direction = "L";
            }
        } else if (direction === "L") {
            if (result[rdx][cdx - 1] === true) {
                cdx--;
            } else {
                rdx--;
                direction = "U";
            }
        }
        else if (direction === "U") {
            if (result[rdx - 1] !== undefined && result[rdx - 1][cdx] === true) {
                rdx--;
            } else {
                cdx++;
                direction = "R";
            }
        }
    }

    return result;
};
/**
 * Runtime: 68 ms, faster than 92.59% of JavaScript online submissions for Spiral Matrix II.
 * Memory Usage: 38.8 MB, less than 61.42% of JavaScript online submissions for Spiral Matrix II.
 */
 const generateMatrix = function (n) {
    const result = new Array(n).fill(0).map((_) => new Array(n).fill(true));
    const MaxLength = n * n;

    let rdx = 0;
    let cdx = 0;
    let direction = "R";
    for (let int = 1; int <= MaxLength; int++) {
        result[rdx][cdx] = int;

        if (direction === "R") {
            if (result[rdx][cdx + 1] === true) {
                cdx++;
            } else {
                rdx++;
                direction = "D";
            }
        } else if (direction === "D") {
            if (result[rdx + 1] !== undefined && result[rdx + 1][cdx] === true) {
                rdx++;
            } else {
                cdx--;
                direction = "L";
            }
        } else if (direction === "L") {
            if (result[rdx][cdx - 1] === true) {
                cdx--;
            } else {
                rdx--;
                direction = "U";
            }
        }
        else if (direction === "U") {
            if (result[rdx - 1][cdx] === true) {
                rdx--;
            } else {
                cdx++;
                direction = "R";
            }
        }
    }

    return result;
};
/**
 * Runtime: 64 ms, faster than 98.77% of JavaScript online submissions for Spiral Matrix II.
 * Memory Usage: 38.8 MB, less than 61.42% of JavaScript online submissions for Spiral Matrix II.
 */