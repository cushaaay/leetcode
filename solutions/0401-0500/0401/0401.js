var readBinaryWatch = function(turnedOn) {
  let times = [];
  
  for (let h = 0; h < 12; h++) {
    for (let m = 0; m < 60; m++) {
      if (bitCount(h * 64 + m) === turnedOn) {
        let minutes = String(m).padStart(2, '0');
        times.push(`${h}:${minutes}`);
      }
    }
  }
  
  return times;
};

function bitCount(num) {
  let count = 0;
  
  while (num !== 0) {
    num = num & (num - 1);
    count++;
  }
  
  return count;
}