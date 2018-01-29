'use strict';

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('null2undefined', function () {
    describe('converting works correctly', function () {
        it('if passed param is object', function () {
            var obj = {
                a: null,
                b: 'd',
                c: 'c'
            };
            expect((0, _index2.default)(obj)).toEqual({ "a": undefined, "b": "d", "c": "c" });
        });
        it('if passed param is object with another object in values', function () {
            var obj = {
                a: null,
                b: 'd',
                c: {
                    a: null
                }
            };
            expect((0, _index2.default)(obj)).toEqual({ "a": undefined, "b": "d", "c": { "a": undefined } });
        });
        it('if passed param is null', function () {
            expect((0, _index2.default)(null)).toEqual(undefined);
        });
    });

    describe('returns passed value if it is not an object', function () {
        it('but string', function () {
            var value = '';
            expect((0, _index2.default)(value)).toEqual(value);
        });
        it('but number', function () {
            var value = 1;
            expect((0, _index2.default)(value)).toEqual(value);
        });
    });

    describe('do not convert null to undefined inside array', function () {
        it('if array was passed like param', function () {
            var value = ['item', null, null];
            expect((0, _index2.default)(value)).toEqual(value);
        });
        it('if object was passed, but one of values is array', function () {
            var value = {
                a: 'a',
                b: [null, 'a', null]
            };
            expect((0, _index2.default)(value)).toEqual({ "a": "a", "b": [null, "a", null] });
        });
    });
});