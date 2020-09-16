// strTrim function to remove non-alphabetical characters and lowercase them
const strTrim = function(string) {
  let newStr = '';
  let regExp = /[a-z]/i;
  for (let char of string) {
    if (regExp.test(char)) {
      newStr += char;
    }
  }
  return newStr.toLowerCase();
};


// countLetter function with argument string
const countLetters = function(string) {
  // make the input string consist of only lowercase alphabets
  let alphaStr = strTrim(string);
  // init a new object
  let obj = {};
  // iterate each character of string
  for (let char of alphaStr) {
    // if the alphabet as a key is stored in the obj
    // let its value as count number increment by 1
    // otherwise create the key and assign to 1
    obj[char] = obj[char] ? obj[char] + 1 : 1;
  }
  return obj;
};


// assertEqual TEST FUNCTION
const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) :
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};


// test
let tester = countLetters("lighthouse in the house");
console.log(tester);