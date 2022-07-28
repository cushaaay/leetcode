**(№ 202) Happy Number [easy]**

Дано число n. Нужно понять это счастливое число или нет. Если да, вернуть true, если нет false.
Счастливое число, это когда берем каждую цифру в числе возводим в квадрат и складываем. С полученной суммой делаем тоже самое. И так делаем до тех пор пока не поймем, что получился бесконечный цикл вычислений - это значит, что число не счастливое. Или делаем до тех пор пока сумма не превратиться в единицу - это значит, что число счастливое. Например число 19. 1^2+9^2=82. 8^2+2^2=68. 6^2+8^2=100. 1^2+0^2+0^2=1. Число счастливое.

**Решение на JavaScript**

```javascript
var isHappy = function(n) {
  let visit = new Set();
  
  while (!visit.has(n)) {
    visit.add(n);
    n = sumOfSquares(n);
    
    if (n === 1) return true;
  }
  
  return false;
};

function sumOfSquares(n) {
  let output = 0;
  
  while (n) {
    let digit = n % 10;
    digit = digit ** 2;
    output += digit;
    n = Math.floor(n / 10);
  }
  
  return output;
}
```

**Объяснение решения**

Заводим отдельную функцию sumOfSquares, которая нужная чтобы возводить каждую цифру числа в квадрат и складывать их. Когда в такую функцию попадает однозначное число она все равно делает расчеты так, как будто число двузначное или больше. Просто вместо вторых, третьих слагаемых использует нули.  
Вводим число 9:  
9^2 + 0^2 = 81  
8^2 + 1^2 = 65  
6^2 + 5^2 = 61  
6^2 + 1^2 = 37  
3^2 + 7^2 = 58  
5^2 + 8^2 = 89  
8^2 + 9^2 = 145  
1^2 + 4^2 + 5^2 = 42  
4^2 + 2^2 = 20  
2^2 + 0^2 = 4  
4^2 + 0^2 = 16  
1^2 + 6^2 = 37  
а 37 уже было, значит надо заканчивать расчеты, потому что получится бесконечный цикл.  
Чтобы определять было уже число или нет заводим массив Set. После каждых вычислений сохраняем туда результат сложения и перед тем как делать расчеты для нового числа будем проверять не делали мы их уже раньше. Если да, значит будет бесконечный цикл, заканчиваем вычисления.

**Ссылка на задачу:** https://leetcode.com/problems/happy-number/