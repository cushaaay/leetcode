**(№ 401) Binary Watch [easy]**

У нас есть бинарные часы на которых два экрана. На первом экране 4 светодиода, которые представляю часы. На втором экране 6 светодиодов показывающие минуты. Например экран с часами выглядит так: 8 4 2 1. Подсветив определенный цифры можно показать какой сейчас час от 0 до 11. Экран с минутами выглядит так: 32 16 8 4 2 1. Из комбинации цифр тоже можно составить число от 0 до 59. Если бы часы показывали время 4:51, то на часах загорелся светодиод с цифрой 4, а на минутах загорелись светодиоды с цифрами 32 16 2 1.

Нам дано число turnedOn, обозначеющее количество включенных светодиодов. Нужно определить какое время могли показывать часы, все варианты в любом порядке и вернуть в массиве, где каждое число строка вида '0:00'. То есть если количество часов одинарное число оно не добивается незначащими нулями. А минуты добиваются. Не 04:51, а 4:51. И не 4:4, а 4:04.

**Решение на JavaScript**

```javascript
var readBinaryWatch = function(turnedOn) {
  let times = [];
  
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (bitCount(h * 64 + m) === turnedOn) {
        let minutes = String(m).padStart(2, '0');
        times.push(`${h}:${minutes}`);
      }
    }
  }
  
  return times;
};

function bitCount(num) {
  let count = 0;
  
  while (num !== 0) {
    num = num & (num - 1);
    count++;
  }
  
  return count;
}
```

**Объяснение решения**

Будем абсолютно для всех вариантов возможных времен генерировать двоичное число, в котором сначала идут биты отвечающие за часы, а потом сразу идут биты отвечающие за минуты, считать количество битов и если оно совпадает с числом из переменной turnedOn, то добавлять это число в массив в нужном формате.  
Вычисления `h * 64 + m` это создание единого числа для часов и минут. Число 64 в двоичном виде это 1 и 6 нулей. 6 нулей, то есть 6 битов как раз столько нужно чтобы зашифровать любое количество минут. Так что они отвечают за минуты. А когда мы умножаем h на 64, это мы из двоичного вида числа 64 умножаем первую 1 на количество часов, и это произведение становится вместо 1, а остальные 6 нулей не трогаются.  
Чтобы посчитать количество битов в двоичном числе создаем дополнительную функцию bitCount. В ней заводим переменную count, которая и будет считать количество единиц. Берем число num и число меньшее не единицу от него, то есть num - 1, и складываем их в двоичном виде. Дело в том, что после каждого такого сложения мы будем убирать самую младшую единицу в двоичном виде числа num. И нам нужно убирать эти единицы до тех пор, пока число num не превратиться в 0.  
Например у нас есть число 784. В двоичном виде выглядит 1100010000. Если мы сложим его с числом меньшим на единицу, 783, то вот что будет:  
```
784 | 1100010000
-
783 | 1100001111
=
768 | 1100000000
```
Тут видно, что первые 5 цифр не меняются. То есть все цифры, до самой младшей единицы. Поэтому в переменной count мы будем после каждого сложения считать сколько младших единиц мы «убили», пока не дойдем но нуля.
```
768 | 1100000000
-
767 | 1011111111
=
512 | 1000000000
```
Все что до самой младшой единицы не меняется. То есть первая единица.
```
512 | 1000000000
-
511 |  111111111
=
0   | 0000000000
```
Произошло три итерации. Именно столько у нас было единиц в исходном числе.

**Ссылка на задачу:** https://leetcode.com/problems/binary-watch/