/**
 * 标题：号码组合
 * 时间复杂度 O（n^3）
 * 空间复杂度 O(n)
 * 逻辑：回溯思想，递归方式，从第一个选项开始，循环递归添加，当满足最大长度时候截止保存，退回上一级继续循环，反复执行一直到推出
 */
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if(!digits) return [];
    const result = [];
    const phone = {
        2:['a','b','c'],
        3:['d','e','f'],
        4:['g','h','i'],
        5:['j','k','l'],
        6:['m','n','o'],
        7:['p','q','r','s'],
        8:['t','u','v'],
        9:['w','x','y','z']
    };
    const dfs = (str,index) => {
        if(index >= digits.length){
            result.push(str);
            return;
        } 
        const phoneMap = phone[digits[index]];
        if(!phoneMap) return;
        for(let i =0;i<phoneMap.length;i++){
            dfs(str+phoneMap[i],index+1);
        }
    }
    dfs('',0)
    return result;
};