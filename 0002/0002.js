var addTwoNumbers = function(l1, l2) {
  let root = new ListNode();
  let cur = root;
  let carry = 0;
  let v1, v2, val;
    
  while (l1 || l2 || carry) {
    v1 = l1 ? l1.val : 0;
    v2 = l2 ? l2.val : 0;
      
    val = v1 + v2 + carry;
    carry = Math.floor(val / 10);
    val %= 10;
    cur.next = new ListNode(val);
      
    cur = cur.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
    
  return root.next;
};
