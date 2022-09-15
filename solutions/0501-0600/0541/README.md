**(№ 541) Reverse String II [easy]**

Дана строка s и число k. Нужно в строке перевернуть k символов с начала строки и сделать это для каждых 2k символов. То есть например есть строка s = 'abcdefg' и число k = 2. Каждый 2k символов это первый и второй символ переворачиваем, потом пропускаем k символов, то есть третий и четвертый, потом снова k символов, пятый и шестой переворачиваем и так далее. Получится 'bacdfeg'.  
Если остается меньше чем k символов нужно перевернуть их все. Например строка s = 'abcdefgh' и число k = 3. Переворачиваем первые три, вторые три пропускаем, а дальше остается только два символа. Это меньше чем k, но их все равно нужно перевернуть. Получится 'cbadefhg'.

**Решение на JavaScript**

```javascript
var reverseStr = function(s, k) {
  let a = s.split('');
  
  for (let start = 0; start < a.length; start += 2 * k) {
    let i = start;
    let j = Math.min(start + k - 1, a.length - 1);
    while (i < j) {
      let temp = a[i];
      a[i++] = a[j];
      a[j--] = temp;
    }
  }
  
  return a.join('');
};
```

**Объяснение решения**

Пойдем по строке циклом, но с шагом 2k, а не по каждому символу. На каждой итерации в переменной j будем проверять где находится конец ряда чисел длиной k. Если он выходит за границы строки s, то гда концом ряда чисел k мы устанавливаем конец строки. То есть это случай, когда символов осталось меньше чем число k. Если конец все еще в пределах строки, тогда просто переворачиваем все символы и идем на следующую итерацию. 

**Ссылка на задачу:** https://leetcode.com/problems/reverse-string-ii/