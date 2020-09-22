const findKey = require(`../findKey`);
const assert = require(`chai`).assert;


describe('#findKey', () => {
    it(`returns "noma" for result1`, () => {
        const result1 = findKey({
            "Blue Hill": { stars: 1 },
            "Akaleri": { stars: 3 },
            "noma": { stars: 2 },
            "elBulli": { stars: 3 },
            "Ora": { stars: 2 },
            "Akelarre": { stars: 3 }
        }, x => x.stars === 2);
        assert.equal(result1, "noma");
    });
    it(`returns "Akaleri" for result2`, () => {
        const result2 = findKey({
            "Blue Hill": { stars: 1 },
            "Akaleri": { stars: 3 },
            "noma": { stars: 2 },
            "elBulli": { stars: 3 },
            "Ora": { stars: 2 },
            "Akelarre": { stars: 3 }
        }, x => x.stars === 3);
        assert.equal(result2, "Akaleri");
    });
    it(`returns undefined for result3`, () => {
        const result3 = findKey({
            "Blue Hill": { stars: 1 },
            "Akaleri": { stars: 3 },
            "noma": { stars: 2 },
            "elBulli": { stars: 3 },
            "Ora": { stars: 2 },
            "Akelarre": { stars: 3 }
        }, x => x.stars === 4);
        assert.equal(result3, undefined);
    });
});