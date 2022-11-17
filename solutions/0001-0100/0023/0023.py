class Solution(object):

  def mergeKLists(self, lists):
    amount = len(lists)
    interval = 1

    while interval < amount:
      for i in range(0, amount - interval, interval * 2):
        lists[i] = self.mergeTwoLists(lists[i], lists[i + interval])
      interval *= 2

    return lists[0] if amount > 0 else None

  def mergeTwoLists(self, list1, list2):
    mergeHead = cur = ListNode(0)

    while list1 and list2:
      if list1.val > list2.val:
        cur.next = list2
        list2 = list2.next
      else:
        cur.next = list1
        list1 = list1.next

      cur = cur.next

    cur.next = list1 or list2

    return mergeHead.next