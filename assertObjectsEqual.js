// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ?
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(actual)}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(actual)}`);

};
// eqObjects function
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let key in object1) {
      if (object2[key] === undefined) {
        return false;
      } else {
        if (object1[key] !== object2[key]) {
          if (object1[key] && object2[key] && typeof object1[key] === 'object' && typeof object2[key] === 'object') {
            if (!eqObjects(object1[key], object2[key])) {
              return false;
            }
          } else {
            return false;
          }
        }
      }
    }
    return true;
  } else {
    return false;
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);
const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc);
const obj1 = { a: 1, b: [1, 2, 3], c: 2 };
const obj2 = { a: 1, b: [1, 2, 4], c: 2 };
assertObjectsEqual(obj1, obj2);
const obj3 = { a: "1", b: "2", g: obj1, c: "3" };
const obj4 = { a: "1", b: "2", g: obj1, c: "3" };
assertObjectsEqual(obj3, obj4);