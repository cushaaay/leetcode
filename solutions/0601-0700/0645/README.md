**(№ 645) Set Mismatch [easy]**

Дан массив чисел nums состоящий из цифр от 1 до n. Произошла ошибка и одно число продублировалось один раз, но из-за этого было стерто какое-то другое число. Нужно вернуть массив, в котором на первом месте будет продублированное число, а на втором будет число, которое было удалено.

**Решение на JavaScript**

```javascript
var findErrorNums = function(nums) {
  const n = nums.length;
  let duplicate = 0;
  let missing = 0;
  let sum = 0;
  let expectedSum = (n + 1) * (n / 2);

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (nums.indexOf(nums[i]) !== i) {
      duplicate = nums[i];
    }
  }

  missing = expectedSum - (sum - duplicate);

  return [duplicate, missing];
};
```

**Объяснение решения**

```javascript
var findErrorNums = function(nums) {
  const n = nums.length;
  // заводим переменную duplicate чтобы сохранить в нее повторяющееся число
  let duplicate = 0;
  // заводим переменную missing чтобы сохранить в нее удаленное число
  let missing = 0;
  // заводим переменную sum, в которой будем складывать все числа массива. Это нужно
  // чтобы найти потом удаленное число
  let sum = 0;
  // высчитываем с помощью арифметической прогрессии сумму всех элементов массива так,
  // как будто из массива небыло удалено одно число.
  let expectedSum = (n + 1) * (n / 2);

  // проходим по всему массиву и в переменную sum складывает все числа массива
  for (let i = 0; i < n; i++) {
    sum += nums[i];

    // если число, стоящее по индексу i не совпадает с числом i, значит это число
    // не на своем месте, а это значит, что оно дубликат, сохраняем его
    // в переменную duplicate
    if (nums.indexOf(nums[i]) !== i) {
      duplicate = nums[i];
    }
  }

  // чтобы найти недостающее число вычитаем из ожидаемой суммы ряда фактическую
  // сумму ряда и значение дубликата
  missing = expectedSum - (sum - duplicate);

  // и возвращаем найденные значения в виде массива
  return [duplicate, missing];
};
```

**Ссылка на задачу:** https://leetcode.com/problems/set-mismatch/