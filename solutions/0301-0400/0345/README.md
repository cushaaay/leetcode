**(№ 345) Reverse Vowels of a String [easy]**

Дана строка s. Нужно сделать реверс всех гласных букв внутри строки. А согласные оставить на своих местах.  
Например слово 'leetcode'. Первая гласная 'e' и последняя гласная 'e'. Меняем местами. Потом вторая гласная 'e' и предпоследняя гласная 'o'. Получается 'leotcede'.

**Решение на JavaScript**

```javascript
var reverseVowels = function(s) {
  let word = s.split('');
  let vowels = 'aeiouAEIOU';
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    while (left < right && !vowels.includes(word[left])) left++;
    while (left < right && !vowels.includes(word[right])) right--;
    
    let temp = word[left];
    word[left] = word[right];
    word[right] = temp;
    left++;
    right--;
  }
  
  return word.join('');
};
```

**Объяснение решения**

У нас два курсора left и right. Курсор left указывает на первую гласную. А курсор right на последнюю гласную. Мы сначала находим на какую букву они указываеют, то есть надо найти из списка заготовленных гласных. А когда найдем просто с помощью дополнительной переменной temp поменять буквы с мест двух этих курсоров местами, а потом перейти к следующим гласным.

**Ссылка на задачу:** https://leetcode.com/problems/reverse-vowels-of-a-string/