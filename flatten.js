const flatten = function(array) {
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {
            array.splice(i, 1, ...array[i]);
            return flatten(array);
        }
    }
    return array;
};


module.exports = flatten;