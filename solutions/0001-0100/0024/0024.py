class Solution:
  def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
    if not head or not head.next: return head

    item = head.next
    head.next = self.swapPairs(head.next.next)
    item.next = head

    return item