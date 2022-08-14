**(№ 383) Ransom Note [easy]**

Даны две строки ransomNote и magazine. Нужно определить можно ли строку ransomNote составить из символов строки magazine и если да вернуть true, если нет false. Каждую букву можно использовать только один раз.

**Решение на JavaScript**

```javascript
var canConstruct = function(ransomNote, magazine) {
  let hash = {};
  
  for (let i = 0; i < magazine.length; i++) {
    if (!hash[magazine[i]]) {
      hash[magazine[i]] = 1;
    } else {
      hash[magazine[i]] += 1;
    }
  }
  for (let i = 0; i < ransomNote.length; i++) {
    if (hash[ransomNote[i]] > 0) {
      hash[ransomNote[i]] -= 1;
    } else {
      return false;
    }
  }
  
  return true;
};
```

**Объяснение решения**

Заводим объект hash, в которой в качестве ключей будем хранить символы из строки magazine, а в качестве значений ключа сколько раз такой символ встречался в этой строке. Потом пойдем циклом по строке ransomeNote и будем проверять есть ли такой символ в hash и если есть уменьшать его значение на единицу, мы как бы забираем один этот символ для составления строки. Если после прохода все символы были найдены в hash то строку составить можно возвращаем true.

**Ссылка на задачу:** https://leetcode.com/problems/ransom-note/