**(№ 141) Linked List Cycle [easy]**

Дан связанный список. Нужно определить есть ли в нем цикл. Если есть вернуть true.
Цикл в связанном списке это когда до какого-то элемента можно снова добраться, если двигаться вперед по связанным спискам каждого значения (по указателю next).

**Решение на JavaScript**

```javascript
var hasCycle = function(head) {
  let slow = head;
  let fast = head;
  
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  
  return false;
};
```

**Объяснение решения**

Если в списке значение только одно, сразу возвращаем false, потому что цикла быть не может. Если значений больше одного, тогда делаем двойной проход по всем значением. Переменная slow движется по каждому значению. Переменная fast движется через одно значение. Если цикл есть, тогда рано или поздно они будут указывать на один и тот же узел. Но если одна из переменных наткнется на null, значит цикла нет.

**Ссылка на задачу:** https://leetcode.com/problems/linked-list-cycle/
