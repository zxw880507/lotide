// findKeyByValue function
const findKeyByValue = function(object, value) {
  // create an array contain all the keys of object
  let keys = Object.keys(object);
  // access each key in keys
  for (let key of keys) {
    // to check if one of the key has a value that passed into
    // if so, return to the key
    // otherwise the function will return to undefined after the loop
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;


// assertEqual function
// const assertEqual = function(actual, expected) {
//   actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
// };


// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);