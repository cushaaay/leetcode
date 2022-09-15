**(№ 521) Longest Uncommon Subsequence I [easy]**

Дано две строки a и b. Нужно найти длину самой длинной необычной подпоследовательности из этих строк и вернуть ее. Если такой нет то вернуть -1.  
Подпоследовательность строки str это строка, которая может быть получена после удаления из строки str любого количества символов. Например str = 'aebdc'. Ее подподследовательность это строка 'abc'. Или 'aeb'. Или 'aebdc'.  
Необычная подпоследовательность между двух строк, это строка, которая является подпоследовательностью для одной строки, но не для двух одновременно. Например str1 = 'aebdc' и str2 = 'eabfc'. В str1 подпоследовательностью может быть строка 'abc'. Но такая подпоследовательность есть и во второй строке. Так ее нельзя назвать необычной. Но сама строка str1 может быть подпоследовательностью. И строку str1 нельзя получить удалив символы из str2. Поэтому самая длинная необычная подпоследовательность между этих двух строка будет иметь длину 5. 

**Решение на JavaScript**

```javascript
var findLUSlength = function(a, b) {
  return a === b ? -1 : Math.max(a.length, b.length);
};
```

**Объяснение решения**

На самом деле мы не будем удалять никакие символы, потому что нам нужно найти самую длинную подпоследовательность. Например строки str1 = 'aaa' и str2 = 'bab'. Подпоследовательность 'a' из строки str1 входит в строку str2, поэтому такую подпоследовательность нельзя назвать необычной. Но вот подпоследовательность 'aa' из строки str1 уже подходит, ее нет в str2. Но самая длинная это 'aaa'. Или 'bab'. Так что наша задача ориентироваться просто на длину. Если длины у строк одинаковые, тогда нужно проверить на совпадение самих строк. Если строки одинаковые то необычных подпоследовательностей нет, возвращем -1. Если строки либо разные, либо разной длины, тогда берем просто самую длинну и возвращем ее длину.

**Ссылка на задачу:** https://leetcode.com/problems/longest-uncommon-subsequence-i/