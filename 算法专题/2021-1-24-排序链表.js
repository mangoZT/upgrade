/**
 * 标题：排序链表
 * 时间复杂度 O（n）
 * 逻辑：i = i-1+i-2  
 */
var sortList = function(head) {
    var start = {val:0,next:null}
    start.next = head
    let max = head;
    while (head) {
        var next = head.next
        if (max.val <= head.val) max = head
        else {
            var left = start
            while(left.next && left.next.val < head.val) left = left.next
            max.next = head.next
            head.next = left.next
            left.next = head
        }
        head = next
    }
    return start.next
};
