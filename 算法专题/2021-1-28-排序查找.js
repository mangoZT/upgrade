/**
 * 标题：在排序数组中查找元素的第一个和最后一个位置
 * 时间复杂度 O（n^3）
 * 空间复杂度 O(n)
 * 逻辑：
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var searchRange = function(nums, target) {
    return [nums.indexOf(target),nums.lastIndexOf(target)]
};