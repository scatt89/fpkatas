const luhnTest = require('../lib/01_cap/luhnTest');

describe('01_luhn_test', () => {
    "use strict";

    it('When redoce is invoked in people array the result should be', () => {
        expect(true).toEqual(luhnTest.test('49927398716'));
        expect(false).toEqual(luhnTest.test('4992739871'));
    });
});