/**
 * 标题：链表有环
 * 逻辑：使用快慢指针判断是否有环,一但快指针追上指针，表示有环
 * 时间复杂度 O（n）
 */
function reverLinked(node) {
    if (!node || !node.next) return;
    let slow = node;
    let fast = node.next;

    while (fast && fast.next) {
        if (fast === slow) {
            return true
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return false;
}