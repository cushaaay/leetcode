**(№ 217) Contains Duplicate [easy]**

Дан массив чисел nums. Нужно определить есть ли в массиве числа, которые встречаются больше одного раза. Если есть вернуть true. Если нет false.

**Решение на JavaScript**

```javascript
var containsDuplicate = function(nums) {
  let hashset = new Set();
  
  for (let i = 0; i < nums.length; i++) {
    if (hashset.has(nums[i])) return true;
    hashset.add(nums[i])
  }
  
  return false;
};
```

**Объяснение решения**

Заведем массив hashset, в котором будет хранить каждое значение. Пойдем циклом по всем числам и будем проверять есть в hashset такое число или нет. Если нет, добавляем, если есть, значит число повторилось и возвращаем true.

**Ссылка на задачу:** https://leetcode.com/problems/contains-duplicate/