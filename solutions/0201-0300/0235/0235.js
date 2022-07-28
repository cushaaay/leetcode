var lowestCommonAncestor = function(root, p, q) {
  let cur = root;
  
  while(cur) {
    if (p.val > cur.val && q.val > cur.val) {
      cur = cur.right;
    } else if(p.val < cur.val && q.val < cur.val) {
      cur = cur.left;
    } else {
      return cur;
    }
  }
};