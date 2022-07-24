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