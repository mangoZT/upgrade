/**
 * 标题：最长不重复子串
 * 逻辑：通过滑动窗口模式计算出每次不重复子串的最大长度
 * 时间复杂度 O（n）
 */
var lengthOfLongestSubstring = function(s) {
    var max = 0;
    var arr = s.split("");
    for(var i =0;i<s.length;i++){
        var cur = [];
        var j=i;
        while(cur.indexOf(arr[j]) === -1 && j< s.length){
            cur.push(arr[j]);
            j++
        }
        if(max < cur.length){
            max=cur.length;
        }
    }
    return max;
};