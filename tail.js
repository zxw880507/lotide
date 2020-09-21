const tail = function(array) {
  let arr = [];
  for (let i = array.length - 1; i > 0; i--) {
    arr.unshift(array[i]);
  }
  return arr;
};


module.exports = tail;