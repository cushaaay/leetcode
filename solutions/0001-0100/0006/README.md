**(№ 6) Zigzag Conversion [middle]**

Дана строка s и отдельно число numRows. Символы из строки s представлены в зигзагообразном виде и помещаются на количестве строк записанном в numRows. Нужно вернуть строку символов, которые записаны в такой последовательности, как будто мы этот зизгазообразный вид читали слева направо построчно.
Например строка `s = PAYPALISHIRING` и `numRows = 3`, зигзагообразный вид будет выглядеть так:  
```
P       A       H       N  
  A   P   L   S   I   I   G  
    Y       I       R  
```
А построчный вид выглядит так: `PAHNAPLSIIGYIR`.

**Решение на JavaScript**

```javascript
var convert = function(s, numRows) {
  if (numRows === 1) return s;
  
  let res = '';
  for (let i = 0; i < numRows; i++) {
    let inc = 2 * (numRows - 1);
    
    for (let j = i; j < s.length; j += inc) {
      res += s[j];
      if (i > 0 && i < numRows - 1 && (j + inc - 2 * i) < s.length) {
        res += s[j + inc - 2 * i];
      }
    }
  }
  
  return res;
};
```

**Объяснение решения**

Coming soon

**Ссылка на задачу:** https://leetcode.com/problems/zigzag-conversion/