**(№ 705) Design HashSet [easy]**

Нужно реализовать HashSet. У него должно быть три возможности:
1. Метод add(). Добавляет ключ в HashSet
2. Метод remove(). Удаляет ключ из HashSet. Если ключа нет, ничего не делает.
3. Метод contains(). Проверяет есть переданный в него ключ в HashSet или нет.

**Решение на JavaScript**

```javascript
var MyHashSet = function() {
  this.set = [];
};

MyHashSet.prototype.add = function(key) {
  if (!this.set[key]) this.set[key] = 1;
};

MyHashSet.prototype.remove = function(key) {
  if (this.set[key]) this.set[key] = undefined;
};

MyHashSet.prototype.contains = function(key) {
  return this.set[key] !== undefined;
};
```

**Объяснение решения**

Делаем на базе массива. Заводим для этого массив set. Метод add() проверяет есть ли по индексу key в массиве set значение. Если нет - устанавливаем для него значение 1. Если есть - ничего не делаем. Метод remove() проверяет если ли по индексу key в массиве set значение. Если нет - ничего не делаем. Если есть - обнуляем значение с помощью undefined. Метод contains() проверяет равно ли значение по индексу key значению undefined. Если не равно - значит ключ в массиве есть. Если равно - значит такого ключа в массиве нет.

**Ссылка на задачу:** https://leetcode.com/problems/design-hashset/