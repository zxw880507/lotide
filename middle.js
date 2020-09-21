// middle function returns an array with only the middle element(s) of the provided array
const middle = function(array) {
  let result = [];
  let middleIndex = array.length / 2;
  if (middleIndex > 1) {
    Number.isInteger(middleIndex) ? result = array.slice(middleIndex - 1, middleIndex + 1) :
      result.push(array[Math.floor(middleIndex)]);

  }
  return result;
};

module.exports = middle;