/**
 * 标题：最深路径
 * 时间复杂度 O（n）
 * 逻辑：递归查找最深路径
 */
var maxDepth = function(root) {
    if(root == null) {
        return 0;
    } else {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};