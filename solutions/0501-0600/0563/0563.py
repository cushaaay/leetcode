class Solution:
  def findTilt(self, root: Optional[TreeNode]) -> int:
    result = 0
    
    def postOrder(root):
      nonlocal result
      
      if not root: return 0
      
      left = postOrder(root.left)
      right = postOrder(root.right)
      
      result += abs(left - right)
      
      return left + right + root.val
      
    postOrder(root)
    
    return result