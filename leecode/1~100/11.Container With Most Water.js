/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let result = 0;
    let left = 0;
    let right = (height.length - 1);

    while(left < right){
        const state = height[left] < height[right] ? height[left] : height[right];
        if(result < (state * (right - left))){
            result = (state * (right - left));
        }
        if(height[left] < height[right]){
            left++;
        } else {
            right--;
        }
    }
 
    return result;
};
/**
 * Runtime: 76 ms, faster than 93.06% of JavaScript online submissions for Container With Most Water.
 * Memory Usage: 40.5 MB, less than 11.39% of JavaScript online submissions for Container With Most Water.
 */

maxArea([1, 2, 4, 3]);
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
maxArea([1, 1]);
maxArea([0, 2]);
maxArea([4, 3, 2, 1, 4]);
maxArea([1, 2, 1]);