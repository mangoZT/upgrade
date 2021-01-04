/**
 * 标题：最长回文子串
 * 逻辑：通过臂长概念计算最长回文子串
 * 时间复杂度 O（n）
 */
var longestPalindrome = function(s) {
    if(!s || s.length<2) return s;
    var str = '';
    for (var i = 1; i < s.length; i++){
        let left = i,right=i;
        while(s.charAt(--left) ===s.charAt(i) && left>=0){
           
        }
        left++;
        while(s.charAt(++right) ===s.charAt(i) && right<s.length){
            
        }
        right--;
        do{
            left--;
            right++;
        }while(s.charAt(left) === s.charAt(right) && left>=0 && right <s.length)

        left++;
        right--;

        if( right -left > str.length-1){
            str = s.substr(left, right -left +1);
        }
    }
    return str||s.substr(0,1);
};