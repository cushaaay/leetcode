**(№ 145) Binary Tree Postorder Traversal [easy]**

Дано бинарное дерево. Нужно вернуть в массиве все его значения двигаясь снизу вверх.

**Решение на JavaScript**

```javascript
var postorderTraversal = function(root) {
  let ret = [];
  let stack = [root];
  
  while (stack.length > 0) {
    let node = stack.pop();
    
    if (node) {
      ret.push(node.val);
      stack.push(node.left);
      stack.push(node.right);
    }
  }
  
  return ret.reverse();
};
```

**Объяснение решения**

Сначала действуем так, как будто собираем значения сверху вниз. Добавляем в stack каждое значение. Одновременно проверяем если значение не равно null, тогда сохраняем его в переменную ret. В конце, когда все значения записаны в массив ret переворачиваем его.

**Ссылка на задачу:** https://leetcode.com/problems/binary-tree-postorder-traversal/