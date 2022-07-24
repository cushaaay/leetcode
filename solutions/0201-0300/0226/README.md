**(№ 226) Invert Binary Tree [easy]**

Дано бинарное дерево. Нужно его полностью развернуть, инвертировать. То есть чтобы во всех узлах правые ветки стали левым, левые правыми.

**Решение на JavaScript**

```javascript
var invertTree = function(root) {
  if (!root) return null;
  
  let temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
};
```

**Объяснение решения**

Для каждого узла запустим функцию invertTree. Ссылку на левую ветку сохраним во временную переменную temp. Затем в левую ветку ставим ссылку на правую ветку. А в правую ветку ставим ссылку на левую ветку, которая теперь хранится в переменной temp. Если у какого-то узла нет одного или всех потомков, тогда вместо них возвращаем null.

**Ссылка на задачу:** https://leetcode.com/problems/invert-binary-tree/