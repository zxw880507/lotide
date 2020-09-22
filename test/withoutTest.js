const without = require(`../without`);
const assert = require(`chai`).assert;

describe(`#without`, () => {
    const words = ["hello", "world", "lighthouse"];
    it(`returns ["hello", "world"]`, () => {
        assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
    });
    it(`returns an array without changing originals`, () => {
        assert.deepEqual(words, ["hello", "world", "lighthouse"]);
    });
});