const findKeyByValue = require(`../findKeyByValue`);
const assert = require(`chai`).assert;

describe(`#findKeyByValue`, () => {
    const bestTVShowsByGenre = {
        sci_fi: "The Expanse",
        comedy: "Brooklyn Nine-Nine",
        drama: "The Wire"
    };
    it(`returns "drama" by 'The Wire' for {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };`, () => {
        assert.equal(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    });
    it(`returns undefined by "That '70s Show" for {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };`, () => {
        assert.equal(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
    });
})