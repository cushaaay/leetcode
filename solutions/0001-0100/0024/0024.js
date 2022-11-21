var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let item = head.next;
  head.next = swapPairs(head.next.next);
  item.next = head;

  return item;
};