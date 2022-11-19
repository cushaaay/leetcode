class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
      if not head: return head

      len = 1;
      newHead = tail = head;

      while tail.next:
        tail = tail.next
        len += 1
      tail.next = head

      k = k % len
      if k:
        for i in range(len - k): tail = tail.next

      newHead = tail.next
      tail.next = None

      return newHead