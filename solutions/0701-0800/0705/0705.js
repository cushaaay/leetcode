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