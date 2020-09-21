const assertEqual = require(`../assertEqual`);
const assertArraysEqual = require(`../assertArraysEqual`);
const tail = require(`../tail`);

// TEST CODE
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertArraysEqual(result, ["Lighthouse", "Labs"]);


const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!