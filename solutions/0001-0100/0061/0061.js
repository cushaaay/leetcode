var rotateRight = function(head, k) {
  if (!head) return head;

  let len = 1;
  let tail = head;
  let newHead = tail;

  while (tail.next) {
    tail = tail.next;
    len++;
  }
  tail.next = head;

  if (k %= len) {
    for (let i = 0; i < len - k; i++) tail = tail.next;
  }

  newHead = tail.next;
  tail.next = null;

  return newHead;
};