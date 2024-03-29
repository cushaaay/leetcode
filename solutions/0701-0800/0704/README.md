**(№ 704) Binary Search [easy]**

Дан массив чисел nums и отдельное число target. Числа в массиве отсортированы по возрастанию. Нужно найти число target в массиве и вернуть его индекс. Если такого числа нет, тогда вернуть -1.

**Решение на JavaScript**

```javascript
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let middle = left + Math.floor((right - left + 1) / 2);

    if (nums[middle] > target) {
      right = middle - 1;
    } else {
      left = middle;
    }
  }

  return nums[left] === target ? left : -1;
};
```

**Объяснение решения**

Используем бинарный поиск. Главная задача сокращать количество проверок вдвое отсекая те числа, которые точно не подоходят. Для этого мы находим центр диапазона чисел и спрашиваем, наше искомое число больше чем число стоящее по центру или меньше. Если больше то числа слева больше рассматривать смысла нет. Если меньше, то числа справа рассматривать смысла нет. В конечном итоге мы дойдем то того, что в диапазоне останется одно число. И вот тогда проверяем сопадает оно с искомым числом `target` или нет.

```javascript
var search = function(nums, target) {
  // (1) Заводим переменные left и right, в которых будет хранить левые и правые
  // границы рассматриваемого диапазона чисел
  let left = 0;
  let right = nums.length - 1;

  // (2) Заводим цикл, который будет проверять, что диапазон рассматриваемых
  // чисел не сократился до одного числа. На каждой итерации цикла мы будем
  // менять границы рассматриваемого диапазона (5) и (6). Мы ожидаем, что сужая
  // границы рассматриваемого диапазона, в конце дойдем до того, что в диапазоне
  // останется одно число и храниться оно будет в переменной left
  while (left < right) {

    // (3) Чтобы сократить количество вычислений нужно найти центр рассматриваемого
    // диапазона чисел. Сохраняем его в переменную middle
    let middle = left + Math.floor((right - left + 1) / 2);

    // (4) Когда знаем центр диапазона, то пытаемся узнать находится наше контрольное
    // число target слева от центра или справа
    if (nums[middle] > target) {

      // (5) Если контрольное число target находится слева от центра, тогда правой
      // границей диапазона мы устанавливаем число, находящееся левее от центра
      // диапазона. Потому что это значит, что все числа стоящие после центра нам не
      // подходят и их незачем больше проверять. Так мы сокращаем количество
      // проверок вдвое
      right = middle - 1;
    } else {

      // (6) Если контрольное число target находится справа от центра, тогда левой
      // границей диапазона мы устанавливаем число, стоящее по центру. Не число стоящее
      // справа от центра, а ровно то, что стоит по центру, потому что может случиться
      // ситуация, когда искомым числом будет число стоящим по центру. И так как мы
      // это число собираемся сохранить в переменной left, то именно в этой переменной
      // мы это число учитываем. В переменной right мы центральное число исключали из
      // диапазона (5) как раз потому что расчитываем, что в переменной left оно будет
      // учтено
      left = middle;
    }
  }

  // (7) Если оставшее число совпадает с контрольным числом target, тогда возвращаем
  // индекс этого числа. Если не совпадает возвращаем -1
  return nums[left] === target ? left : -1;
};
```

**Ссылка на задачу:** https://leetcode.com/problems/binary-search/