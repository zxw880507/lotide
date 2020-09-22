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