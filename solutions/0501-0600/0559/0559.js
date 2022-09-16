var maxDepth = function(root) {
  if (!root) return 0;
  
  let queue = [root];
  let depth = 0;
  while (queue.length > 0) {    
    let size = queue.length;
    
    for (let i = 0; i < size; i++) {
      let current = queue.shift();
      queue.push(...current.children);
    }
    
    depth++;
  }
  
  return depth;
};