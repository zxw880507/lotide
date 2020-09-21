// function arrayEqual
const eqArrays = require(`./eqArrays`);

const assertArraysEqual = function(actual, expected) {
  let arrayEqual = eqArrays(actual, expected);
  arrayEqual ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertArraysEqual;