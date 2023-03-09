**(№ 771) Jewels and Stones [easy]**

Даны строки `jewels` и `stones`. Строка `jewels` представляет типы камней, которые считаются драгоценными. Строка `stones` представляет камни, которые у нас есть. Нужно определить сколько камней из тех что у нас есть являются драгоценными и вернуть это количество. Регистр букв важен. 

**Решение на JavaScript**

```javascript
var numJewelsInStones = function(jewels, stones) {
  let res = 0;
  let set = new Set();

  Array.from(jewels).forEach((el) => {
    set.add(el);
  });
  Array.from(stones).forEach((el) => {
    if (set.has(el)) return res++;
  });

  return res;
};
```

**Объяснение решения**

```javascript
var numJewelsInStones = function(jewels, stones) {
  // (1) В переменной res будем считать количество драгоценный камней
  let res = 0;

  // (2) В переменной set сохраним все типы камней, которые мы считам драгоценными.
  let set = new Set();

  // (3) Проходим по строке jewels, берем каждый камень и сохраняем в переменной set
  Array.from(jewels).forEach((el) => {
    set.add(el);
  });

  // (4) Проходим по строке strones и проверяем каждый камень есть ли похожий камень
  // в списке set. Если есть, значит это драгоценный камень у нас и увеличиваем
  // переменную res на единицу
  Array.from(stones).forEach((el) => {
    if (set.has(el)) return res++;
  });

  // (5) В конце просто возвращаем количество имеющихся у нас драгоценных корней
  return res;
};
```

**Ссылка на задачу:** https://leetcode.com/problems/jewels-and-stones/