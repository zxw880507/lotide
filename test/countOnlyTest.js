const countOnly = require(`../countOnly`);
const assert = require('chai').assert;

describe('#countOnly', () => {
    const firstNames = [
        "Karl",
        "Salima",
        "Agouhanna",
        "Fang",
        "Kavith",
        "Jason",
        "Salima",
        "Fang",
        "Joe"
    ];
    const result = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
    it(`returns 1 for 'jason'`, () => {
        assert.equal(result['Jason'], 1);
    });
    it(`returns undefined for 'Karima'`, () => {
        assert.equal(result['Karima'], undefined);
    });
    it(`returns undefined for 'Agouhanna'`, () => {
        assert.equal(result['Agouhanna'], undefined);
    });
    it(`returns 2 for 'Fang'`, () => {
        assert.equal(result['Fang'], 2);
    });
    it(`returns { Fang: 2, Jason: 1 } for result`, () => {
        assert.deepEqual(result, { 'Fang': 2, 'Jason': 1 });
    });
});