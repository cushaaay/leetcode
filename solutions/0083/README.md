**(№ 83) Remove Duplicates from Sorted List [easy]**

Дан отсортированный связанный список, нужно удалить из него все дубликаты и вернуть его.

**Решение на JavaScript**

```javascript
var deleteDuplicates = function(head) {
  let cur = head;
    
  while (cur) {
    while (cur.next && cur.next.val === cur.val) {
      cur.next = cur.next.next;
    }
    
    cur = cur.next;
  }
    
  return head;
};
```

**Объяснение решения**

Устанавливаем курсор на весь список. Проходим по всему списку и на каждой итерации проверяем если нынешнее значение совпадает со значением его связанного списка, тогда связанным списком нынешнего значения назначаем связанный список, который лежит в связанном списке нынешнего значения и перемещаем на него курсор.

**Ссылка на задачу:** https://leetcode.com/problems/remove-duplicates-from-sorted-list/