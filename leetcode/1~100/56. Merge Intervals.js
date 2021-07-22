/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const merge = function (intervals) {// 접근법 자체를 너무 어렵게 생각했다. 포기
    const intervalMap = new Map();

    intervals.forEach((interval) => {
        const state = intervals.filter((arr) => {
            if (arr !== interval) {
                if (arr[0] <= interval[1] && arr[1] >= interval[0]) return arr;
            }
        })[0];
        if (state) {
            const min = Math.min(interval[0], state[0]);
            const max = Math.max(interval[1], state[1]);
            if (!intervalMap.has(`${min}${max}`)) {
                intervalMap.set(`${min}${max}`, [min, max]);
            }
        } else {
            if (!intervalMap.has(`${interval[0]}${interval[1]}`)) {
                intervalMap.set(`${interval[0]}${interval[1]}`, interval);
            }
        }
    });

    return Array.from(intervalMap.values());
};
const merge = function (intervals) {
    const result = [];
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let preInterval = intervals.shift();
    result.push(preInterval);

    intervals.forEach((interval) => {
        if (preInterval[1] >= interval[0]) {
            preInterval[0] = Math.min(preInterval[0], interval[0]);
            preInterval[1] = Math.max(preInterval[1], interval[1]);
        } else {
            result.push(interval);
            preInterval = interval;
        }
    });

    return result;
}
/**
 * Runtime: 84 ms, faster than 82.64% of JavaScript online submissions for Merge Intervals.
 * Memory Usage: 40.6 MB, less than 65.02% of JavaScript online submissions for Merge Intervals.
*/
const merge = function (intervals) {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
    let preInterval = intervals.shift();
    const result = [preInterval];

    intervals.forEach((interval) => {
        if (preInterval[1] >= interval[0]) {
            preInterval[1] = Math.max(preInterval[1], interval[1]);
        } else {
            result.push(interval);
            preInterval = interval;
        }
    });

    return result;
}
/**
 * Runtime: 80 ms, faster than 92.85% of JavaScript online submissions for Merge Intervals.
 * Memory Usage: 40.3 MB, less than 92.66% of JavaScript online submissions for Merge Intervals
*/