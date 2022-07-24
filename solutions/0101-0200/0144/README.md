**(№ 144) Binary Tree Preorder Traversal [easy]**

Дано бинарное дерево. Нужно вернуть в массиве все его значения двигаясь сверху вниз.

**Решение на JavaScript**

```javascript
var preorderTraversal = function(root) {
  let ret = [];
  let stack = [root];
  
  while(stack.length > 0) {
    let node = stack.pop();
    
    if (node) {
      ret.push(node.val);
      stack.push(node.right);
      stack.push(node.left);
    }
  }
  
  return ret;
};
```

**Объяснение решения**

Добавляем в stack каждое значение. Одновременно проверяем если значение не равно null, тогда сохраняем его в переменную ret.

**Ссылка на задачу:** https://leetcode.com/problems/binary-tree-preorder-traversal/
