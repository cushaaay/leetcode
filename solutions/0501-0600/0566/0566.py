class Solution:
  def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
    n = len(mat)
    m = len(mat[0])
    
    if m * n != r * c: return mat
    
    res = [[0] * c for i in range(r)]
    for i in range(r * c):
      res[int(i/c)][i%c] = mat[int(i/m)][i%m]
    
    return res