/**
 * 标题：合并两个链表
 * 时间复杂度 O（n）
 * 逻辑：比较大小进行迭代
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null) {
        return l2;
    } else if (l2 === null) {
        return l1;
    } 

    const result = new ListNode();
    let cur = result;
    while(l1 && l2){
        if(l1.val > l2.val){
            cur.next = l2;
            l2=l2.next;
        }else{
             cur.next = l1;
            l1=l1.next;
        }
         cur=cur.next;
    }
    if(l1){
        cur.next=l1;
    }
    if(l2){
        cur.next=l2;
    }
    return result.next;
};