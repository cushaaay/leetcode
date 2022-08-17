**(№ 404) Sum of Left Leaves [easy]**

Дано бинарное дерево, нужно вернуть сумму всех левых листьев.  
Лист - это узел без потомков.

**Решение на JavaScript**

```javascript
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;
  
  let res = 0;
  
  if (root.left) {
    if (!root.left.left && !root.left.right) {
      res += root.left.val;
    } else {
      res += sumOfLeftLeaves(root.left);
    }
  }
  res += sumOfLeftLeaves(root.right);
  
  return res;
};
```

**Объяснение решения**

Для каждого узла запускаем функцию sumOfLeftLeaves. Внутри проверяем если левый лист существует есть ли у него потомки. Если нет, то значение этого левого узла прибавляем к заранее заготовленной переменной res, в которой будет храниться сумма всех левых листьев, ее и возвращаем в конце.

**Ссылка на задачу:** https://leetcode.com/problems/sum-of-left-leaves/