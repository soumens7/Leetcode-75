/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0; // Starting Pointer
    let right = height.length - 1;// Ending pointer
    let max_area = 0; // Initialize Maximum Area

    while (left < right) {
        // Calculate the area
        let width = right - left;
        let current_area = Math.min(height[left], height[right]) * width;
        // Update the maximum area if current area is greater
        max_area = Math.max(max_area, current_area);
        // Moving the pointer 
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return max_area;
};