**(№ 237) Delete Node in a Linked List [easy]**

Дана ссылка на узел в связанном списке. Нужно этот узел удалить из списка.

**Решение на JavaScript**

```javascript
var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
```

**Объяснение решения**

У данного узла меняем значение на значение из его связанного значения. И само связанное значение заменяем связанным значением его связанного значения.

**Ссылка на задачу:** https://leetcode.com/problems/delete-node-in-a-linked-list/