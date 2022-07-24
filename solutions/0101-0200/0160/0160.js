var getIntersectionNode = function(headA, headB) {
  let l1 = headA;
  let l2 = headB;
  
  while (l1 !== l2) {
    l1 = l1 ? l1.next : headB;
    l2 = l2 ? l2.next : headA;
  }
  
  return l1;
};
