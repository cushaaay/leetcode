**(№ 119) Pascal's Triangle II [easy]**

Дано число rowIndex. Это число - номер строки треугольника Паскаля. Нужно вернуть все числа в виде массива, которые стоят на этой строке в треугольнике. Вершину треугольника надо считать за строку под номером 0.

**Решение на JavaScript**

```javascript
var getRow = function(rowIndex) {
  let res = [[1]];
  for (let i = 0; i < rowIndex; i++) {
    let last = res.length - 1;
    let temp = [0, ...res[last], 0];
    let row = [];
    for (let j = 0; j < res[last].length + 1; j++) {
      row.push(temp[j] + temp[j + 1]);
    }
    res.push(row);
  } 
  
  return res[res.length - 1];
};
```

**Объяснение решения**

Создаем треугольник Паскаля построчно. Заканчиваем на строке номер которой записан в rowIndex. Потом эту строку возвращаем.

**Ссылка на задачу:** https://leetcode.com/problems/pascals-triangle-ii/