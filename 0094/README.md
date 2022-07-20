**(№ 94) Binary Tree Inorder Traversal [easy]**

Дано бинарное дерево. Нужно вернуть неупорядоченный обход значений его узлов.
Бинарное дерево выглядит так: [1, null, [2, [3, null, null], null]]. Это значит первый аргумент это значение узла, второй аргумент это левое поддерево, третий - правое поддерево. У поддерева есть свои поддеревья. Если поддерева нет, вместо него стоит null.
Правда когда мы его записываем в сокращенном виде мы сначала записываем значение первого уровня, потом значения вторых уровней, затем значения третьих уровней и так далее. В примере выше значение первого уровня это 1. Значения второго уровня это null и 2. Значение третьего уровня это 3 и null. 
Еще пример побольше.
[1, [2, [4, null, [6, null, null]], [5, null, null]], [3, null, null]]
Первый уровень - 1. Вторые 2 и 3. Третьи - 4, 5, null и null. Четвертые - null и 6. В сокращенном виде поэтому это будет выглядеть так: [1,2,3,4,5,null,null,null,6].
Неупорядоченный обход значений это когда мы сначала посещаем левое поддерево, затем сам узел, а потом правое поддерево.

**Решение на JavaScript**

```javascript
var inorderTraversal = function(root) {
  let res = [];
  let stack = [];
  let cur = root;
    
  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    res.push(cur.val);
    cur = cur.right;
  }
  return res;
};
```

**Объяснение решения**

Сначала будем смотреть левое поддерево. Для этого устанавливаем курсор на все дерево. Смотрим есть ли в нем хоть что-то. Если да, добавляем все дерево в stack. А курсор перемещаем на левое поддерево. Снова смотрим есть ли в этом левом поддереве что-то, если да, добавляем в stack. И так пока вся левая ветка не будет добавлена в stack. После этого в stack будет храниться список левых поддеревьев. Берем из stack последнее значение, это самый глубокий узел. Удаляем его из stack и помещаем на него курсор. Добавляем значение узла этого поддерева в заранее заготовленный пустой массив res. Устанавливаем курсор на правую ветку этого узла. Если значение есть проверяем нет ли у него левых веток. Если есть сначала добавляем их в res. А если нет добавляем значение правого узла в res. Так будем двигаться пока stack не опустошится.

**Ссылка на задачу:** https://leetcode.com/problems/binary-tree-inorder-traversal/