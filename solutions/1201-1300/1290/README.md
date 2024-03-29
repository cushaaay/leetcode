**(№ 1290) Convert Binary Number in a Linked List to Integer [easy]**

Дан связный в список в котором лежит двоичное число. Каждый разряд это отдельный узел. Нужно это двоичное число перевести в десятичный вид и вернуть его.

**Решение на JavaScript**

```javascript
var getDecimalValue = function(head) {
  let num = head.val;

  while (head.next) {
    num = num * 2 + head.next.val;
    head = head.next;
  }

  return num;
};
```

**Объяснение решения**

Для простоты разберем как создаются десятичные числа. Допустим у нас есть число 531. И так как оно лежит в связном списке, то это [5, 3, 1]. Когда мы подойдем к цифре 5 мы не знаем какого она разряда, единиц, десятков, сотен или других. Только когда мы подойдем к числу 3 мы поймем, что число 5 точно было не из разряда единиц. Тогда мы предполагаем, что 3 это из разряда единиц, а 5 из разряда десятков. Поэтому 5 мы умножаем на 10, получаем 50 и к нему прибавляем 3. Получается 53. Но у нас есть еще цифра 1. Когда мы к ней подойдем мы поймем, что 3 была не из разряда единиц и 5 не из разряда десятка. И нам значит надо было число 5 умножить не на 10 изначально, а на 100, так как разряд сотен. А число 3 умножить на 10. Но мы можем это сделать сейчас. У нас есть 53. Это (50 + 3) или (5 * 10 + 3). Мы знаем если умножить скобку на число, то каждое слагаемое будет умножено на это число. Умножаем (5 * 10 + 3) * 10 = 5 * 10 * 10 + 3 * 10. Именно то что нам нужно. Как будто умножили 5 на 100, а 3 на 10. Но мы не будет раскрывать так число 53, а просто умножим его на 10. Получится 530. И к нему прибавляем число 1.  
Такая же логика с двоичными числами. Берем первое число, сохраняем в переменную num. Затем подойдя к следующему числу num умножаем на 2 и прибавляем к нему это следующее число и все это сохраняем в num. Если существует еще следующее число, то повторяем. Повышаем разрядность предыдущего num умножением на 2 и прибавляем следующее число. Если следующего нет, тогда просто возвращаем num.


**Ссылка на задачу:** https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/