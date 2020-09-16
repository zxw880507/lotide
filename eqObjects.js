const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};



// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
assertEqual(eqObjects(ab, ba), true);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
const obj1 = { a: 1, b: [1, 2, 3], c: 2 };
const obj2 = { a: 1, b: [1, 2, 4], c: 2 };
assertEqual(eqObjects(obj1, obj2), false);
const obj3 = { a: "1", b: "2", g: obj1, c: "3" };
const obj4 = { a: "1", b: "2", g: obj1, c: "3" };
assertEqual(eqObjects(obj3, obj4), true);