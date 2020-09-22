const without = function(source, itemsToRemove) {
  let output = [];
  for (let elm of source) {
    if (itemsToRemove.indexOf(elm) === -1) {
      output.push(elm);
    }
  }
  return output;
};

module.exports = without;





// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// console.log(without(words, ["lighthouse"]));
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);