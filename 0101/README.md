**(№ 101) Symmetric Tree [easy]**

Дано бинарное дерево. Нужно узнать симметрично ли оно относительно своего центра.

**Решение на JavaScript**

```javascript
var isSymmetric = function(root) {
  if (!root) return true;
    
  let stack = [[root.left, root.right]];
  while (stack.length > 0) {
    let pair = stack.pop();
    let left = pair[0];
    let right = pair[1];
      
    if (!left && !right) continue;
    if (!left || !right) return false;
    if (left.val === right.val) {
      stack.push([left.left, right.right]);
      stack.push([left.right, right.left]);
    } else {
      return false;
    }
  }
  
  return true;
};
```

**Объяснение решения**

Добавляем бинарное дерево в stack. Проверяем совпадают ли узлы второго уровня. Если нет, сразу false. Если да, тогда добавляем в stack узлы третьего уровня, но так чтобы крайние узлы лежали рядом, внутренние лежали рядом. И повторяем с ними тоже самое, как если бы это было наше изначальное дерево. То есть теперь у узлов третьего уровня смотрим дочерние узлы. Если совпадают, то делаем дальнейшие проверки, если нет, то сразу false.

**Ссылка на задачу:** https://leetcode.com/problems/symmetric-tree/