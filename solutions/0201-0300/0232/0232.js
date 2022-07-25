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