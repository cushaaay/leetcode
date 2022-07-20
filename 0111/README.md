**(№ 111) Minimum Depth of Binary Tree [easy]**

Дано бинарное дерево. Найти его минимальную глубину.
Минимальная глубина - это количество узлов начиная с первого узла до ближайшего последнего в любой ветке.

**Решение на JavaScript**

```javascript
var minDepth = function(root) {
  if (!root) return 0;
  
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  
  return (left === 0 || right === 0) ? left + right + 1 : Math.min(left, right) + 1;
};
```

**Объяснение решения**

Всем нулевым узлам присваиваем глубину 0. Дальше двигаясь с самых глубоких узлов будем сравнивать попарно его левую и правую ветки. Если одна из них нулевая, тогда глубина узла это глубина ненулевой ветки плюс 1. Если обе ветки ненулевые, тогда мы выбираем ту из них, что меньше и тоже прибавляем 1, и это будет глубина узла.

**Ссылка на задачу:** https://leetcode.com/problems/minimum-depth-of-binary-tree/