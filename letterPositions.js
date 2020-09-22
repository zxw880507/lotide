// letterPositions function
const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    //    access every character in the sentence by index incrementing
    for (let i = 0; i < sentence.length; i++) {
        // To justify whether the character is an aphabetical letter
        if (/[a-z]/i.test(sentence[i])) {
            // tenary operation to check if the key of letter existing in the result
            // exists then push the current index into the key value
            // or create an new array as a value of the key and store the current index
            results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
        }
    }
    return results;
};

module.exports = letterPositions;