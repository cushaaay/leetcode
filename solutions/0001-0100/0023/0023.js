var mergeKLists = function(lists) {
  let amount = lists.length;
  let interval = 1;

  while (interval < amount) {
    for (let i = 0; i < amount - interval; i += interval * 2) {
      lists[i] = mergeTwoLists(lists[i], lists[i + interval]);
    }
    interval *= 2;
  }

  return amount > 0 ? lists[0] : null;
};

function mergeTwoLists(list1, list2) {
  let mergeHead = new ListNode(0);
  let cur = mergeHead;

  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;  
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }

    cur = cur.next;
  }

  cur.next = list1 || list2;

  return mergeHead.next;
}