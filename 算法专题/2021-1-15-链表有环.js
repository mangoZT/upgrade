/**
 * 标题：链表是否有环
 * 时间复杂度 O（n^2）
 * 逻辑：stringify针对循环引用会报错
 */
var removeNthFromEnd = function(head, n) {
       // try {
    //     JSON.stringify(head)
    //     return false
    // } catch {
    //     return true
    // }
    if(head ==null || head.next ===null) return false;
    // 快慢针
    var fast = head.next.next;
    var slow = head;
    while(fast){
        if(fast === slow){
            return true;
        }
        if(!fast.next) return false;
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
};