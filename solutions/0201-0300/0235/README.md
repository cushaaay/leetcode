**(№ 235) Lowest Common Ancestor of a Binary Search Tree [easy]**

Дано бинарное дерево root и две ссылки p и q на два узла из этого дерева. Нужно определить какой у этих узлов самый ближайший общий предок. При этом сами узлы p и q тоже могут быть предком для самого себя. То есть если p предок для q, то ближайший общий предок это p.

**Решение на JavaScript**

```javascript
var lowestCommonAncestor = function(root, p, q) {
  let cur = root;
  
  while(cur) {
    if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right;
    } else if(p.val < cur.val && q.val < cur.val) {
      cur = cur.left;
    } else {
      return cur;
    }
  }
};
```

**Объяснение решения**

Можно заметить, что у каждого узла в левой ветке значение меньше, чем значение в узле. А в правой ветке больше. Поэтому и нам чтобы найти общего предка надо чтобы p или q кто-то был меньше, кто-то больше предполагаемого общего предка. Пойдем от корня дерева и будем сравнивать значения p с родителем и q и родителем. Если и p и q больше узла, значит надо переместить курсор на правый потомок, потому что так мы увеличиваем значение предполагаемого узла и возможно оно станет больше или p или q и тогда это будет ответ. А если оба числа меньше значит надо переместить курсор на левый потомок.

**Ссылка на задачу:** https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/