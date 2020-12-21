/**
 * 标题：选择排序
 * 时间复杂度 O（n^2）
 * 逻辑：假定第一个数是最小，然后顺序比较后面数字，最后跟实际最小索引交换
 */
function chooseSort(arr){
    if (!arr || !Array.isArray(arr) || arr.length === 1) return; // 做好边界判断加分
    const len = arr.length;

    for (let i = 0; i < len -1; i++){
        let min = i;
        for (let j = i+1; j < len ;j++){ 
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min !==i) {
            [arr[i],arr[min]] = [arr[min],arr[i]]
        }
    }
    return arr;
}