import null2undefined from './index';

describe('null2undefined', () => {
    describe('converting works correctly', () => {
        it('if passed param is object', () => {
            const obj = {
                a: null,
                b: 'd',
                c: 'c'
            };
            expect(null2undefined(obj)).toEqual({"a": undefined, "b": "d", "c": "c"});
        });
        it('if passed param is object with another object in values', () => {
            const obj = {
                a: null,
                b: 'd',
                c: {
                    a: null
                }
            };
            expect(null2undefined(obj)).toEqual({"a": undefined, "b": "d", "c": {"a": undefined}});
        });
        it('if passed param is null', () => {
            expect(null2undefined(null)).toEqual(undefined);
        });
    });

    describe('returns passed value if it is not an object', () => {
        it('but string', () => {
            const value = '';
            expect(null2undefined(value)).toEqual(value);
        });
        it('but number', () => {
            const value = 1;
            expect(null2undefined(value)).toEqual(value);
        });
    });

    describe('do not convert null to undefined inside array', () => {
        it('if array was passed like param', () => {
            const value = ['item', null, null];
            expect(null2undefined(value)).toEqual(value);
        });
        it('if object was passed, but one of values is array', () => {
            const value = {
                a: 'a',
                b: [null, 'a', null]
            };
            expect(null2undefined(value)).toEqual({"a": "a", "b": [null, "a", null]});
        });
    });
});
