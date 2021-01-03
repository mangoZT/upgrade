/**
 * 标题：两数之和
 * 逻辑：通过map记录数字，一旦后面数字和target差值等于map里的，表示存在
 * 时间复杂度 O（n）
 */
var twoSum = function(nums, target) {
    var obj = {};
    for(var i = 0;i<nums.length;i++){
        if(obj[target-nums[i]]!==undefined){
            return [obj[target-nums[i]],i];
        }else{
            obj[nums[i]]=i;
        }
    }
    return [];
};