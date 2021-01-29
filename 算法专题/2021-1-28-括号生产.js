/**
 * 标题：括号生成
 * 时间复杂度 O（n^3）
 * 空间复杂度 O(n)
 * 逻辑：回溯思想，递归方式，从第一个选项开始，循环递归添加，当满足最大长度时候截止保存，退回上一级继续循环，反复执行一直到推出
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    let res = []
      function dfs(left, right, n, s) {
        if (left === n && right === n) {
          res.push(s)
          return
        }
    
        if (left < n) {
          dfs(left + 1, right, n, s + "(")
        }
    
        if (left > right) {
          dfs(left, right + 1, n, s + ")")
        }
      }
      dfs(0, 0, n, "")
      return res
    };