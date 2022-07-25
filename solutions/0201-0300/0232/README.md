**(№ 232) Implement Queue using Stacks [easy]**

Нужно реализовать стек FIFO (первый пришел, первый обслужен).  
У него должны быть такие функции:
1) push  - добавлять элемент на вершину стека
2) pop   - удалять элемент с начала стека и возвращать его
3) peek   - просто возвращаться элемент с начала стека
4) empty - проверять пустой стек или нет и возвращать true или false

**Решение на JavaScript**

```javascript
var MyQueue = function() {
  this.queue = [];
};

MyQueue.prototype.push = function(x) {
  this.queue.push(x);
};

MyQueue.prototype.pop = function() {
  return this.queue.shift();
};

MyQueue.prototype.peek = function() {
  return this.queue[0];
};

MyQueue.prototype.empty = function() {
  return this.queue.length === 0;
};
```

**Объяснение решения**

В качестве стека будем использовать обычный массив. Метод push стандартный из языка. Метод pop почти стандартный из языка, только заменяем его на противоположный, то есть на метод shift, который удаляет не из конца массива как pop, а из начала. Метод peek обращается по индексу к первому элементу в массиве. Метод empty просто проверяет длину массива. Если нулевая, возвращает true.

**Ссылка на задачу:** https://leetcode.com/problems/implement-queue-using-stacks/