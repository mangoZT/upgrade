/**
 * 标题：三数之和=0;
 * 时间复杂度 O（n^2）
 * 逻辑：先排序，选定c位后采用双撞针法
 */
var threeSum = function(nums) {

    const result=[];
    if(!nums || nums.length < 3) {
        return result;
    }
    nums.sort((a,b) =>  a-b);
    for(var i =0;i<nums.length;i++){
        if(nums[i] > 0) return result; // c位必然大于0
        if(i>0 && nums[i] === nums[i-1]) continue;
        let left = i+1;
        let right = nums.length-1;
        while(left < right){ 
            var sum = nums[i] + nums[left] + nums[right];
            if(sum > 0){
                right--;
            }
            if(sum<0){
                left++;
            }
            if(sum === 0){
                result.push([nums[i], nums[left] , nums[right]]);
                while(nums[left] ===nums[left+1]){
                    left++;
                };
                left++;
                
                while(nums[right] ===nums[right-1]){
                    right--;
                };
                right--;
            }
        }
    }
    return result;
};