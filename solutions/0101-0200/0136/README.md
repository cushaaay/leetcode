**(№ 136) Single Number [easy]**

Дан массив чисел. Каждое число в массиве встречается два раза, кроме одного числа, одно число в единичном экземпляре. Нужно найти это число.

**Решение на JavaScript**

```javascript
var singleNumber = function(nums) {
  let res = 0;
  
  for (let i = 0; i < nums.length; i++) {
    res = nums[i] ^ res;
  }
  
  return res;
};
```

**Объяснение решения**

Пойдем по всем числам циклом. Заводим переменную res в которой будем хранить сумму всех чисел. Но суммироваться числа будут не в десятичном виде, а двоичном, с помощью оператора xor - ^. Он так работает, что если складывать одинаковые числа, то они будут не складываться, а вычитаться. Поэтому в переменной res после прохода по всем числам все одинаковые числа сократятся и останется в сумме только число, для которого пары не нашлось. Эту сумму и возвращаем.
Но как xor понимает, что похожее число мы уже проходили? Никак. Сложение происходит в двоичном виде по разрядам. Если на одинаковых разрядах в двух разных числах стоят одинаковые значения тогда они не складываются, а превращаются в ноль.

Например если сложить 1 \+ 1  
0001 \- 1  
\+  
0001 \- 1  
\=  
0000 \- 0  
И в первом и во втором числе на четвертом месте стоят 1. Поэтому в результате на четвертом месте стоит ноль.  

Но другой пример 1 \+ 7  
0001 \- 1  
\+  
0111 \- 7  
\=  
0110 \- 6  
Здесь тоже и в первом и во втором числе на четвертом месте стоит цифра 1. В результате на четвертом месте ноль. Но в двоичном виде результат 6. Как будто бы мы из 7 вычли 1.  

Хочется сказать как будто мы из большего числа вычитаем меньше, но нет.  

Например 1 \+ 10  
0001 \- 1  
\+  
1010 \- 10  
\=  
1011 \- 11  
Здесь мы из большего не вычитали меньшее, потому что в двоичном виде нет такого разряда, где в первом и во втором числе совпали значения.

**Ссылка на задачу:** https://leetcode.com/problems/single-number/