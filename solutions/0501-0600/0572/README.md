**(№ 572) Subtree of Another Tree [easy]**

Дано два дерева root и subRoot. Нужно определить есть ли внутри дерева root поддерево полностью совпадающее с деревом subRoot. Если есть вернуть true, если нет вернуть false.

**Решение на Python**

```python
class Solution:
  def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:
    if not subRoot: return True
    if not root: return False
    
    if self.sameTree(root, subRoot): return True
    
    return (self.isSubtree(root.left, subRoot) or self.isSubtree(root.right, subRoot))
  
  def sameTree(self, root, subRoot):
    if not root and not subRoot: return True
    if root and subRoot and root.val == subRoot.val:
      return (self.sameTree(root.left, subRoot.left) and
              self.sameTree(root.right, subRoot.right))
    
    return False
```

**Объяснение решения**

Пойдем по левой и правой ветке одновременно и для каждого узла будем запускать функцию `isSubtree`. Будем считать, что этот узел это корень поддерева и все что ниже должно полностью совпасть с деревом subRoot. Проверкой на такое совпадение занимается функция `sameTree`. Мы передаем в нее нынешний узел дерева `root` и дерево `subRoot`. И начинаем сравнивать в них узлы. Сначала мы смотрим совпадают ли корневой узел поддерева `root` с корневым узлом дерева `subRoot`. Если да, тогда начинаем сравнивать из дочерние узлы. Если все дочерние узлы совпали и закончились одновременно в двух деревьях, значит мы нашли в дереве `root` совпадающее поддерево, возвращаем `true`.

**Ссылка на задачу:** https://leetcode.com/problems/subtree-of-another-tree/