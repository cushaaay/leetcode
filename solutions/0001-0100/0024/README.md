**(№ 24) Swap Nodes in Pairs [medium]**

Дан связный список. Нужно поменять местами каждые два соседних узла. Первый со вторым, третий с четвертым и так далее. При этом нужно поменять именно узлы, а не только значения.

**Решение на JavaScript**

```javascript
var swapPairs = function(head) {
  if (!head || !head.next) return head;

  let item = head.next;
  head.next = swapPairs(head.next.next);
  item.next = head;

  return item;
};
```

**Объяснение решения**

Берем второй узел сохраняем его в переменную item. После этого на место второго узла мы ставим результат переворота третьего и четвертого узла. Потом первый узел делаем связным значением для второго узла. К моменту когда мы будет вставлять перевернутый третий и четвертый узлы будут уже перевернуты пятый и шестой, седьмой и восьмой и так до конца. Потому что мы запускаем этот переворот рекурсивно. Поэтому первый и второй узлы перевернутся в последнюю очередь.

**Ссылка на задачу:** https://leetcode.com/problems/swap-nodes-in-pairs/