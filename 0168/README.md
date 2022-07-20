**(№ 168) Excel Sheet Column Title [easy]**

Дано число - номер столбца в таблице Excel. Но у столбцов в Excel не числовые значения, а буквенные. 1 стобец буква A, второй - B, двадцать шестой - Z, двадцать седьмой - AA и так далее. Нужно вернуть буквенное значение столбца, номер которого нам дан.

**Решение на JavaScript**

```javascript
var convertToTitle = function(columnNumber) {
  let capitals = [];
  let result = [];
  
  for (let i = 'A'.charCodeAt(); i < 'Z'.charCodeAt() + 1; i++) {
    capitals.push(String.fromCharCode(i));
  }
  
  while (columnNumber > 0) {
    result.unshift(capitals[(columnNumber - 1) % 26]);
    columnNumber = Math.floor((columnNumber - 1) / 26);
  }
  
  return result.join('');
};
```

**Объяснение решения**

Если в число columnNumber хоть раз входит число 26 и после деления есть остаток, то значит буквенное значение больше, чем однозначное. Нам не важно сколько раз число 26 входит, мы просто будет смотреть остается ли остаток. Если остается, то смотрим какому числу он соответствует в заготовленном алфавите capitals и добавляем его в result. И на каждом шаге наше изначальное число будем заменять на результат его деления на 26. Каждый раз деля на 26 мы как бы отсекаем единичный разряд.

**Ссылка на задачу:** https://leetcode.com/problems/excel-sheet-column-title/