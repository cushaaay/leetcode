**(№ 125) Valid Palindrome [easy]**

Дана строка s. Нужно определить после удаления всех символов кроме букв и цифр и приведении всех символов к нижнему регистру строка является палиндромом или нет. Если да, вернуть true.

**Решение на JavaScript**

```javascript
var isPalindrome = function(s) {
  let left = 0;
  let right = s.length - 1;
  
  while (left < right) {
    while (left < right && !alphabetNumber(s[left])) {
      left++;
    }
    while (left < right && !alphabetNumber(s[right])) {
      right--;
    }
    if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    left++;
    right--;
  }

  function alphabetNumber(char) {
    return (('A'.charCodeAt() <= char.charCodeAt() && char.charCodeAt() <= 'Z'.charCodeAt()) ||
            ('a'.charCodeAt() <= char.charCodeAt() && char.charCodeAt()  <= 'z'.charCodeAt()) ||
            ('0'.charCodeAt() <= char.charCodeAt() && char.charCodeAt()  <= '9'.charCodeAt()))
  }
  
  return true;
};
```

**Объяснение решения**

Идем одновременно с начала и с конца. Везде проверяем с помощью функции alphabetNumber() чтобы каждый символ был или буквой или цифрой. Если нет, тогда пропускаем символ и переходим к следующему (или предыдущему). Каждый раз когда выяснили, что символ подходящий и слева, и справа, сравниваем их. Если одинаковые, значит переходим к следующим символам. Если не совпадают значит строка не палиндром.

**Ссылка на задачу:** https://leetcode.com/problems/valid-palindrome/