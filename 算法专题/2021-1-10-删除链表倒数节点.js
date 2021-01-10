/**
 * 标题：删除链表倒数节点;
 * 时间复杂度 O（n^2）
 * 逻辑：先排序，选定c位后采用双撞针法
 */
var removeNthFromEnd = function(head, n) {
    let fast = head, slow = head
    // 快先走 n 步
    while(--n) {
        fast = fast.next
    }
    if(!fast.next) return head.next // n=链表长度，表示删除的节点就是头节点
    fast = fast.next // 多走一步，让slow等于删除的节点之前一个
    // fast、slow 一起前进
    while(fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next
    return head
};