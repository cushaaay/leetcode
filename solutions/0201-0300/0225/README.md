**(№ 225) Implement Stack using Queues [easy]**

Нужно реализовать стек LIFO (последний пришел, первый ушел).  
У него должны быть такие функции:
1) push  - добавлять элемент на вершину стека
2) pop   - удалять элемент с вершины стека и возвращать его
3) top   - просто возвращаться элемент с вершины стека
4) empty - проверять пустой стек или нет и возвращать true или false

**Решение на JavaScript**

```javascript
var MyStack = function() {
  this.queue = [];
};

MyStack.prototype.push = function(x) {
  this.queue.push(x);
};

MyStack.prototype.pop = function() {
  return this.queue.pop();
};

MyStack.prototype.top = function() {
  return this.queue.at(-1);
};

MyStack.prototype.empty = function() {
  return this.queue.length === 0;
};
```

**Объяснение решения**

В качестве стека будем использовать обычный массив. Методы push и pop стандартные из языка. Метод top обращается по индексу к последнему элементу в массиве, а последний элемент это вершина стека. Метод empty просто проверяет длину массива. Если нулевая, возвращает true.

**Ссылка на задачу:** https://leetcode.com/problems/implement-stack-using-queues/