const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

module.exports = findKey;

// let result1 = findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri": { stars: 3 },
//     "noma": { stars: 2 },
//     "elBulli": { stars: 3 },
//     "Ora": { stars: 2 },
//     "Akelarre": { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// let result2 = findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri": { stars: 3 },
//     "noma": { stars: 2 },
//     "elBulli": { stars: 3 },
//     "Ora": { stars: 2 },
//     "Akelarre": { stars: 3 }
// }, x => x.stars === 3); // => "Akaleri"

// let result3 = findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri": { stars: 3 },
//     "noma": { stars: 2 },
//     "elBulli": { stars: 3 },
//     "Ora": { stars: 2 },
//     "Akelarre": { stars: 3 }
// }, x => x.stars === 4); // => undefined


// assertEqual(result1, "noma");
// assertEqual(result2, "Akaleri");
// assertEqual(result3, undefined);