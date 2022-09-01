var findWords = function(words) {
  return words.filter((el) => {
    return el.match(/^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/gi);
  });
};