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






// function arrayEqual
const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

// assertArraysEqual to test result
const assertArraysEqual = function(actual, expected) {
  let arrayEqual = eqArrays(actual, expected);
  arrayEqual ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// TEST

assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);