/**
 * 标题：两数之和
 * 逻辑：通过map记录数字，一旦后面数字和target差值等于map里的，表示存在
 * 时间复杂度 O（n）
 */
var addTwoNumbers = function(l1, l2) {
    var dum = new ListNode();
    var result = dum;
    var carry = 0;
    while(l1 || l2){
         const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        let sum = n1 + n2 + carry;
        
        if(sum>9){
            sum=sum%10;
            carry = 1;
        }else{
            carry=0;
        }

        dum.next = new ListNode(sum);
        dum = dum.next;
        l1= l1 && l1.next;
        l2=l2 && l2.next;
    }
  
    if (carry > 0) {
        dum.next = new ListNode(carry);
    }
    return result.next;
};