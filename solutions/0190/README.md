**(№ 190) Reverse Bits [easy]**

Дано десятичное число n. Нужно представить его в двоичном виде, сделать реверс цифр и вернуть полученное число в десятичном виде. Знак числа, положительное или отрицательное число, учитывать не надо.

**Решение на JavaScript**

```javascript
var reverseBits = function(n) {  
  let res = 0;
  
  for (let i = 0; i < 32; i++) {
    res <<= 1;
    if ((n & 1) == 1) res++;
    n >>= 1;
  }
  
  return res >>> 0;
};
```

**Объяснение решения**

Пройдемся циклом по двоичному виду числа n и будем смотреть на его последнюю цифру. Если она равна единице, значит в переменную res добавляем единицу, если она равна нулю, то в res добавляем 0. В двоичном виде числа занимают 32 бита. Так что цикл продлится 32 итерации. По умолчанию число res это число состоящее из 32 нулей. На каждой итерации мы считаем, что в числе n последняя цифра это 0, так что мы просто сдвигаем res на один бит влево. То есть в конце числа res появляется ноль, а все цифры левее сдвигаются на одну позицию левее. Потом мы прибавляем к числу n единицу с помощью побитового сложения. Побитовое сложение возвращает результат сложения только для тех разрядов, которые участвовали в сложении. Так как мы прибавляем только 1, то участвовал только самый младший разряд, то есть самая последняя цифра. А это значит, что если в числе n последняя цифра 1, то и результат сложения будет один. А это значит, что в переменную res надо прибавить единицу. Ну и на каждом шаге сдвигаем число n тоже на единицу, только вправо. Так мы стираем последнюю цифру, чтобы на следующей итерации смотреть новую последнюю цифру. Может случится ситуация, что полученное в результате число начинается с 1 в двоичном виде, за которым идет 0. Такой вид числа воспринимается как число с отрицательным знаком. Чтобы это отменить, мы используем в результате оператор >>>. Он помогает воспринимать первые цифры не как знак, а как часть числа.

**Ссылка на задачу:** https://leetcode.com/problems/reverse-bits/