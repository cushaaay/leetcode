**(№ 326) Power of Three [easy]**

Дано число n. Нужно понять является ли оно степенью числа 3.  
Допустим число n = 27  
3^3=27, да, есть такое число, после возведения в которое тройку у нас получится 27, так что 27 - это степень числа 3.

**Решение на JavaScript**

```javascript
var isPowerOfThree = function(n) {
  if (n > 1) {
   while (n % 3 === 0) n /= 3;
  }
  
  return n === 1;
};
```

**Объяснение решения**

Делим число n на 3 пока не дойдем до единицы. Если дойдем до единицы, тогда число n степень числа 3, возвращаем true, если не дойдем возвращаем false.

**Ссылка на задачу:** https://leetcode.com/problems/power-of-three/