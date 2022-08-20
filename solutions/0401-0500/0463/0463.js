var islandPerimeter = function(grid) {
  let land = 0;
  let neighbours = 0;
  
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        land++;
        if (i < grid.length - 1 && grid[i + 1][j] === 1) neighbours++;
        if (j < grid[i].length - 1 && grid[i][j + 1] === 1) neighbours++;
      }
    } 
  }
  
  return land * 4 - neighbours * 2;
};