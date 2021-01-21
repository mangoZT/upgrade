/**
 * 标题：爬楼梯 & 斐波那挈数列
 * 时间复杂度 O（n）
 * 逻辑：i = i-1+i-2  
 */
var climbStairs = function(n) {
    const dp = [];
    dp[0] = 1;
    dp[1] = 1;
    for(let i = 2; i <= n; i++) {
        const dp1 = dp[1];
        dp[1] = dp[0] + dp[1];
        dp[0] = dp1;
    }
    return dp[1];
};