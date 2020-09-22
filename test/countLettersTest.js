const countLetters = require(`../countLetters`);
const assert = require(`chai`).assert;

describe(`#countLetters`, () => {
    it(`returns {
      l: 1,
      i: 2,
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1,
    } for "lighthouse in the house"`, () => {
        assert.deepEqual(countLetters("lighthouse in the house"), {
            l: 1,
            i: 2,
            g: 1,
            h: 4,
            t: 2,
            o: 2,
            u: 2,
            s: 2,
            e: 3,
            n: 1,
        });
    });
});