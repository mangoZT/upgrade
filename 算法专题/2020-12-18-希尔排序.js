/**
 * 标题：希尔排序
 * 逻辑：获取增量值h，每次h/2进行插入排序直到到h等于1，最后进行一次插入排序
 * 时间复杂度 O（logn）
 */
function shellSort(arr){
    if (!arr || !Array.isArray(arr) || arr.length === 1) return; // 做好边界判断加分
    const len = arr.length;
    let h = 1;
    while (h < len/2) {
        h=h*2+1
    }
    while (h >= 1) {
        for (var i = h; i < len; i++){
            for (var j = i; j >=0; j -= h){
                if (arr[j - h] > arr[j]) {
                    [arr[j - h], arr[j]] = [arr[j], arr[j - h]];
                }
            }
        }
        h = Math.floor(h / 2);
    }
    return arr;
}