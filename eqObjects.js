const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // to check if both objects(arrays)' lengths are equal, falsy means both are not identical
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // both objects have to be the same type, either objects or arrays, if not they are not identical
    if (Array.isArray(object1) !== Array.isArray(object2)) {
      return false;
    }
    // execute an iteration on the first object
    for (let key in object1) {
      //if the second object doesn't have the key that first one has, then they are not identical
      if (object2[key] === undefined) {
        return false;
      } else {
        // if they have the same key but both values are not equal,
        // it is necessary to check if both values are non-primitive values
        if (object1[key] !== object2[key]) {
          //it is necessary to check if values are null since the typeof null will return object
          if (object1[key] && object2[key] && typeof object1[key] === 'object' && typeof object2[key] === 'object') {
            //if both values are objects(arrays), we need to call the eq function recursively
            // to check if both are identical as objects/arrays
            if (!eqObjects(object1[key], object2[key])) {
              return false;
            }
          } else {
            return false; //if one value is null, both are not equal
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
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
const obj1 = { a: 1, b: [1, 2, 3], c: 2 };
const obj2 = { a: 1, b: [1, 2, 4], c: 2 };
assertEqual(eqObjects(obj1, obj2), false);
const obj3 = { a: "1", b: "2", g: obj1, c: "3" };
const obj4 = { a: "1", b: "2", g: obj1, c: "3" };
assertEqual(eqObjects(obj3, obj4), true);