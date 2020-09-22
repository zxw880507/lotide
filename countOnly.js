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

module.exports = countOnly;