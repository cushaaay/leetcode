var constructRectangle = function(area) {
  let w = Math.floor(area ** 0.5);
  
  while (area % w !== 0) w--;
  
  return [area / w, w];
};