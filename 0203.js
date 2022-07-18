var removeElements = function(head, val) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;
  
  while (curr) {  
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    
    curr = curr.next;
  }
  
  return dummy.next;
};
