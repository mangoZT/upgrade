/**
 * 标题：插入排序
 * 时间复杂度 O（n^2）
 * 逻辑：从第二位开始，每次选择一个冒泡进前面的有序数组
 */
function insertSort(arr){
    if (!arr || !Array.isArray(arr) || arr.length === 1) return; // 做好边界判断加分
    const len = arr.length;

    for (let i = 1; i < len; i++){
        
        for (let j = i; j >0 ;j--){ 
            if (arr[j] < arr[j-1]) {
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            }
        }
        
    }
    return arr;
}