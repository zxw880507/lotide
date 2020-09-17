// map function
const map = function(array, callback) {
  let results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]); // expecting [ 'g', 'c', 't', 'm', 't' ];
const results2 = map(words, word => word.toUpperCase()); // expecting [ 'GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM' ]
const results3 = map(words, word => {
  let newWord = '';
  for (let i = word.length - 1; i >= 0; i--) {
    newWord += word[i];
  }
  return newWord;
}); // expecting [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]



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

const assertArraysEqual = function(actual, expected) {
  let arrayEqual = eqArrays(actual, expected);
  arrayEqual ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
assertArraysEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
assertArraysEqual(results3, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);