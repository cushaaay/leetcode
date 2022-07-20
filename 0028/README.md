**(№ 28) Implement strStr() [easy]**

Даны две строки. Нужно проверить входит ли вторая строка в первую. Если да вернуть индекс символа, с которого вторая строка начинается в первой строке.
Если нет вернуть -1. А если строка нулевая, то вернуть 0.

**Решение на JavaScript**

```javascript
var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  for (let i = 0; i < haystack.length + 1 - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) return i;
  }
    
  return -1;
};
```

**Объяснение решения**

Проходим по всей строке и вырезаем из нее на каждой итерации кусочек длиной равной длине второй строки и сравниваем их.

**Ссылка на задачу:** https://leetcode.com/problems/implement-strstr/