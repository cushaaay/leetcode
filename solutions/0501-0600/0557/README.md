**(№ 557) Reverse Words in a String III [easy]**

Дана строка s. Нужно перевернуть все слова в строке, при этом пробелы и первоначальный порядок слов сохранить.

**Решение на JavaScript**

```javascript
var reverseWords = function(s) {
  let lastSpaceIndex = -1;
  let chArray = s.split('');
  for (let strIndex = 0; strIndex <= s.length; strIndex++) {
    if (strIndex === s.length || chArray[strIndex] === ' ') {
      let startIndex = lastSpaceIndex + 1;
      let endIndex = strIndex - 1;
      
      while (startIndex < endIndex) {
        let temp = chArray[startIndex];
        chArray[startIndex] = chArray[endIndex];
        chArray[endIndex] = temp;
        startIndex++;
        endIndex--;
      }
      lastSpaceIndex = strIndex;
    }
  }
  
  return chArray.join('');
};
```

**Объяснение решения**

В переменной lastSpaceIndex будем хранить индекс пробела, он каждый раз будет сдвигаться на следующий пробел. Затем пойдем по всей строке и будем искать следующий пробел. Когда найдем будем считать, что все что до этого пробела это слово. Тогда берем первый символ этого слова и последний и меняем местами. Потом второй символ этого слова и предпоследний символ меняем местами. И так далее пока все слово не перевернем. После этого помещаем в lastSpaceIndex место пробела и двигаемся в следующему слову.

**Ссылка на задачу:** https://leetcode.com/problems/reverse-words-in-a-string-iii/