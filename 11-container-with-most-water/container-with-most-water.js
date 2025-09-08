/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length -1;
    let maxAmnt = 0;
    while(left < right){
        const area = Math.min(height[left], height[right]) * (right - left);
        maxAmnt = Math.max(maxAmnt, area);
        if(height[left] < height[right]){
            left++;
        } else{
            right--;
        }
    }
    return maxAmnt;
};