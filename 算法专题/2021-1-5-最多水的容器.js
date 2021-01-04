/**
 * 标题：最大区域
 * 逻辑：通过双指针法，遇小移动，计算每次的最大区域
 * 时间复杂度 O（n）
 */
var maxArea = function(height) {
    if(!height || height.length<2) return 0;
        var max = 0;
        let left = 0, right = height.length-1;
        while (left < right) {
            var cur = Math.min(height[left], height[right]) * (right - left);
            if (cur > max) max = cur;
            if (height[left] > height[right]) {
                right--;
            } else {
                left++
            }
        }
        return max
};