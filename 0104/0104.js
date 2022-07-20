var maxDepth = function(root) {
  let stack = [[root, 1]];
  let res = 0;
    
  while (stack.length > 0) {
    let item = stack.pop();
    let node = item[0];
    let depth = item[1];
    if (node) {
      res = Math.max(res, depth);
      depth++;
      stack.push([node.left, depth]);
      stack.push([node.right, depth]);
    }
  }
    
  return res;
}
