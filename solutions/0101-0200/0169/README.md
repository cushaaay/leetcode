**(№ 169) Majority Element [easy]**

Дан массив чисел. Нужно вернуть мажоритарный элемент.
Что такое мажоритарный элемент? Когда в массиве n значений, а какой-то элемент встречается более чем в половине случаев (больше чем n / 2), этот элемент мажоритарный. Например массив из 8 элементов [1, 1, 1, 2, 2, 2, 2, 2]. Половина массива это 4 элемента. Число 1 встречается три раза, что меньше половины массива. А число 2 встречается 5 раз, что больше половины массива. Значит число 2 - мажоритарный элемент.

**Решение на JavaScript**

```javascript
var majorityElement = function(nums) {
  let res = 0;
  let count = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (count === 0) res = nums[i];
    count += (nums[i] === res ? 1 : -1);
  }
  
  return res;
};
```

**Объяснение решения**

Будем пользоваться тем, что мажоритарный элемент занимает больше половины элементов. Получается, что на каждый не мажоритарный элемент приходится один мажоритарный элемент. Значит наша задача найти все пары мажоритарный + не мажоритарный, они друг друга нейтрализуют, и посмотреть какие элементы остались. Те, что остались и есть искомое значение. В переменной res будем хранить предполагаемый мажоритарный элемент. Сначала предполагаем, что самое первое число и есть нужное нам. В переменной count будем считать количество вхождений этого числа res в массив. Когда встречаем похожее увеличиваем счетчик. Если встречаем иное число, то уменьшаем счетчик. То есть счетчик превратится в ноль, когда на каждый мажоритарный элемент найдется не мажоритарный элемент. Когда счетчик обнуляется предполагаем что следующее число новый мажоритарный элемент и ищем ему не мажоритарный. Если не найдем ему не мажоритарный, чтобы его нейтрализовать, то это и есть мажоритарный элемент.

**Ссылка на задачу:** https://leetcode.com/problems/majority-element/submissions/