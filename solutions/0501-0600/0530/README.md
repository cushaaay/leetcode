**(№ 530) Minimum Absolute Difference in BST [easy]**

Дано бинарное дерево root. Нужно найти два узла с самыми меньшими значениями и вернуть абсолютную разницу между ними.

**Решение на JavaScript**

```javascript
var getMinimumDifference = function(root) {
  let prev = null;
  let min = Number.MAX_SAFE_INTEGER;
  
  function inorderTraverse(root) {
    if (root === null) return min;
  
    inorderTraverse(root.left);
    
    if (prev !== null) {
      min = Math.min(min, root.val - prev);
    }
    prev = root.val;
    
    inorderTraverse(root.right);

    return min;
  };
  
  return inorderTraverse(root);
};
```

**Объяснение решения**

Сначала находим самый глубокий левый узел и записываем его в переменную prev. Затем начинаем двигаться вверх к корню дерева и при переходе на узел выше проверяем если из значения этого узла вычесть значение предыдущего узла, то получится число меньшее, чем записано в переменной min или нет. И если да, то перезаписываем переменную min этой разницей. А в переменную prev записываем значение этого узла. Так каждое значение побывает в переменной prev и будет вычтено из значения большего по данному дереву. И в переменной min в конечно итоге останется самая минимальная разница, ее и возвращаем.

**Ссылка на задачу:** https://leetcode.com/problems/minimum-absolute-difference-in-bst/