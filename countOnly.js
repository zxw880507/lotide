// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (let item of allItems) {
    if (itemsToCount[item]) {
      output[item] ? output[item] += 1 : output[item] = 1;
    }
  }
  return output;
};
// assertEqual Function
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);