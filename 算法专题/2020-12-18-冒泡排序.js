/**
 * 标题：冒泡排序最优解
 * 逻辑：两两比较，将最大逐步移到最后
 * 时间复杂度 O（n^2）
 * 优化点1:去除有序的遍历
 * 优化点2:提前完成遍历即可退出 最大可能性O（n）
 */
function bubbleSort(arr){
    if (!arr || !Array.isArray(arr) || arr.length === 1) return; // 做好边界判断加分
    const len = arr.length;
    for (let i = 0; i < len - 1; i++){
        let allSort = true; // 优化点2:用allSort来标记当前循环已经是有序状态，如果一次交换都没有，就是有序，直接结束
        for (let j = 0; j < len - 1 - i;j++){ // 优化点1这里-i完成已经排序的片段无法过滤
            if (arr[j] > arr[j + 1]) {
                allSort = false;
                [arr[j+1],arr[j]] = [arr[j],arr[j+1]]
            }
        }
        if (allSort) {
            return arr;
        }
    }
    return arr;
}