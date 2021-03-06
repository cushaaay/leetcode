**(№ 228) Summary Ranges [easy]**

Дан отсортированный массив целых чисел nums. Нужно вернуть новый массив, в котором будут все диапазоны непрерывного ряда чисел из nums.  
Непрерывный ряд чисел - это когда каждое следующее число больше предыдущего на 1.  
Например 1, 2, 3 - это непрерывный диапазон. А 1, 3, 4 - нет, потому что отсутствует число 2.  
Диапазоны нужно вернуть в виде такой строки 'начальное число диапазона->конечное число'. Если в диапазоне только одно число, то просто одно число в виде строки.  
Например [0,1,2,4,5,7]. Здесь отсутствуют числа 3 и 6. Поэтому диапазоны здесь будут такими.
1) '0 -> 2', когда мы не нашли 3, поняли что 2 это конец диапазона
2) '4 -> 5', теперь отсутсвие 6 закончило диапазон на 5
3) '7'

**Решение на JavaScript**

```javascript
var summaryRanges = function(nums) {
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
    let start = nums[i];
    
    while (i + 1 < nums.length && nums[i + 1] === nums[i] + 1) i++;
    
    if (start !== nums[i]) {
      res.push(`${start}->${nums[i]}`);
    } else {
      res.push(`${start}`);
    }
  }
  
  return res;
};
```

**Объяснение решения**

Пойдем по всему массиву nums циклом. Фиксируем первое число массива в переменной start как начало диапазона. А дальше проверяем если второе число больше первого на 1, тогда переходим дальше смотрим больше ли третье число второго на 1. И так далее пока не поймем, что следующее число больше не на 1. Значит нашли конец диапазона, генерируем строку.

**Ссылка на задачу:** https://leetcode.com/problems/summary-ranges/