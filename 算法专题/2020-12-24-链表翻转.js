/**
 * 标题：翻转链表
 * 逻辑：从头节点开始，将所有next指向前一个节点，丢出最终节点
 * 时间复杂度 O（n）
 * 优化点1:去除有序的遍历
 * 优化点2:提前完成遍历即可退出 最大可能性O（n）
 */
function reverLinked(node) {
    if (!node) return;
    // 链表结尾的next是null，翻转后以后null开始
    let pre = null;
    let cur = node;
    while (cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
}