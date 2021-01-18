/**
 * 标题：有效的括号
 * 时间复杂度 O（n）
 * 逻辑：利用栈思想
 */
var isValid = function(s) {
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const Map = {
        ']':'[',
        '}':'{',
        ')':'('
    }
    const stk = [];
    for (let i = 0; i < s.length; i++) {
        if (Map[s[i]]) {
            if (!stk.length || stk[stk.length - 1] !== Map[s[i]]) {
                return false;
            }
            stk.pop();
        } 
        else {
            stk.push(s[i]);
        }
    }
    return !stk.length;
};