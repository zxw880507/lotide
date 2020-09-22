const eqObjects = require(`../eqObjects`);
const assert = require(`chai`).assert;

describe(`#eqObjects`, () => {
    it(`returns true`, () => {
        const ab = { a: "1", b: "2" };
        const ba = { b: "2", a: "1" };
        assert.equal(eqObjects(ab, ba), true);
    });
    it(`returns false`, () => {
        const ab = { a: "1", b: "2" };
        const abc = { a: "1", b: "2", c: "3" };
        assert.equal(eqObjects(ab, abc), false);
    });
    it(`returns false`, () => {
        const obj1 = { a: 1, b: [1, 2, 3], c: 2 };
        const obj2 = { a: 1, b: [1, 2, 4], c: 2 };
        assert.equal(eqObjects(obj1, obj2), false);
    });
    it(`returns true`, () => {
        const obj1 = { a: 1, b: [1, 2, 3], c: 2 };
        const obj3 = { a: "1", b: "2", g: obj1, c: "3" };
        const obj4 = { a: "1", b: "2", g: obj1, c: "3" };
        assert.equal(eqObjects(obj3, obj4), true);
    });
});