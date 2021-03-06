**(№ 110) Balanced Binary Tree [easy]**

Дано бинарное дерево. Нужно понять сбалансированно ли оно по высоте.
Сбалансированное, это когда поддеревья каждого узла отличаются по высоте не более чем на 1.
То есть если максимальная глубина левой ветки 5, а правой 4, то дерево сбалансированно. Если левой 5, а правой 3, то нет.

**Решение на JavaScript**

```javascript
var isBalanced = function(root) {
  function dfs(root) {
    if (!root) return [true, 0];
    
    let left = dfs(root.left);
    let right = dfs(root.right);
    let balanced = (left[0] && right[0] && Math.abs(left[1] - right[1]) <= 1);
      
    return [balanced, 1 + Math.max(left[1], right[1])];
  } 
    
  return dfs(root)[0];
};
```

**Объяснение решения**

Для каждого узла запустим функцию dfs. Сначала находим все отсутствующие узлы, и присваиваем им массив [true, 0]. Второй аргумент здесь говорит о глубине узла. Вообще отсчет глубины будем делать с конца. Отсутствующий узел имеет глубину 0, последний глубину 1, предпоследний глубину 2. Наша задача каждому узлу присвоить уровень глубины. И на каждом узле сравнить разницу между глубинами левой ветки и правой. Если даже где-то на внутреннем узле узнаем, что пошел рассинхрон, то есть разница между глубиной веток больше чем 1, тогда считать выше нет смысла, дерево уже не сбалансированное. Но мы все равно считаем правда.

**Ссылка на задачу:** https://leetcode.com/problems/balanced-binary-tree/