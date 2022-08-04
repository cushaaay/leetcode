**(№ 290) Word Pattern [easy]**

Дано две строки pattern и s. В строке pattern только символы, например 'abba'. В строке s слова, через пробелы, например 'dog cat cat dog'. Нужно определить соответствует ли строка s шаблону, записанному в переменной pattern. То есть одному символу из pattern может соответствовать только одно слово из строки s. Если соответствует вернуть true, если нет false.  
Например pattern = 'abba' и s = 'dog cat cat dog' вернут true. Символ 'a' = 'dog', а символ 'b' = 'cat'.  
Еще пример  pattern = 'abba' и s = 'dog cat cat fish' вернут false. Потому что на месте слова 'fish' должно стоять слово 'dog', по шаблону.

**Решение на JavaScript**

```javascript
var wordPattern = function(pattern, s) {
  let words = s.split(' ');
  if (pattern.length !== words.length) return false;
  
  let charToWord = {};
  let wordToChar = {}
  
  for (let i = 0; i < words.length; i++) {
    let char = pattern[i];
    let word = words[i];
    if (charToWord[char] && charToWord[char] !== word) return false;
    if (wordToChar[word] && wordToChar[word] !== char) return false;
    charToWord[char] = word;
    wordToChar[word] = char;
  }
  
  return true;
};
```

**Объяснение решения**

Заведем два объекта charToWord и wordToChar. В первом будем хранить в качестве ключа символ из строки pattern, а в качестве значения слово из s. Во втором наоборот ключ это слово, а значение это символ. Это нужно, чтобы убедиться, что один символ шифрует одно слово. Например шаблон 'aaaa' соответствует строке 'dog cat cat dog', но символ 'a' два слова шифрует. Дальше идем по всем словам и по всем символам одновременно и проверяем есть ли они в объектах. Если есть проверяем правильное слово зашифровано символов или нет. Если нет, возвращаем false. Если нет, добавляем слово.

**Ссылка на задачу:** https://leetcode.com/problems/word-pattern/