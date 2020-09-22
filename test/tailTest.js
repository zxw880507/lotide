const assert = require(`chai`).assert;
const tail = require(`../tail`);


describe('#tail', () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it('returns ["Lighthouse", "Labs"] for ["Yo Yo", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
  it(`returns 3 for the length of ["Yo Yo", "Lighthouse", "Labs"]`, () => {
    assert.deepEqual(words.length, 3);
  });
});