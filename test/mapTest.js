const map = require(`../map`);
const assert = require(`chai`).assert;

describe(`#map`, () => {
    const words = ["ground", "control", "to", "major", "tom"];
    it(`returns ['g', 'c', 't', 'm', 't']`, () => {
        const results1 = map(words, word => word[0]);
        assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
    });
    it(`returns ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']`, () => {
        const results2 = map(words, word => word.toUpperCase());
        assert.deepEqual(results2, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']);
    });
    it(`returns ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']`, () => {
        const results3 = map(words, word => {
            let newWord = '';
            for (let i = word.length - 1; i >= 0; i--) {
                newWord += word[i];
            }
            return newWord;
        });
        assert.deepEqual(results3, ['dnuorg', 'lortnoc', 'ot', 'rojam', 'mot']);
    });
})