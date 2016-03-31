var counter = require('../src/day12-accounting');

describe('Day 12 JSAbacusFramework.io', function() {
    describe('numbers total', function() {
        it('is 0 when empty array', function() {
            expect(counter.totalNumbers('[]')).toBe(0);
        });
        it('is 0 when empty object', function() {
            expect(counter.totalNumbers('{}')).toBe(0);
        });
        it('is 0 when object with no numbers', function() {
            expect(counter.totalNumbers('{"a":"b"}')).toBe(0);
        });
        it('is 0 when array with no numbers', function() {
            expect(counter.totalNumbers('["c","d"]')).toBe(0);
        });
        it('can count plain numbers in a number-only array', function() {
            var input = '[0,1]';
            expect(counter.totalNumbers(input)).toBe(1);
        });
        it('can count plain numbers in a mixed array', function() {
            var input = '["a",1,2,{"a":"b"}]';
            expect(counter.totalNumbers(input)).toBe(3);
        });
        it('can count numbers in an object with only number values', function() {
            var input = '{"a":2,"b":1}';
            expect(counter.totalNumbers(input)).toBe(3);
        });
        it('can count numbers in an object with mixed values', function() {
            var input = '{"a":2,"b":"c"}';
            expect(counter.totalNumbers(input)).toBe(2);
        });
        it('can count numbers in a nested array', function() {
            var input = '[1,"a",[2,"b"]]';
            expect(counter.totalNumbers(input)).toBe(3);
        });
        it('can count numbers in a nested mixed array', function() {
            var input = '[0,[1,"b",{"a":2}]]';
            expect(counter.totalNumbers(input)).toBe(3);
        });
        it('can count numbers in a nested object', function() {
            var input = '{"a":1,"b":{"c":2}}';
            expect(counter.totalNumbers(input)).toBe(3);
        });
        it('can count numbers in a nested mixed object', function() {
            var input = '{"a":[1,2]}';
            expect(counter.totalNumbers(input)).toBe(3);
        });
    });
    describe('redless numbers total', function() {
        it('ignores object with red value', function() {
            var input = '{"a":"red","b":2}';
            expect(counter.totalNumbers(input, true)).toBe(0);
        });
        it('does not ignore arrays with red value', function() {
            var input = '[1,"red"]';
            expect(counter.totalNumbers(input, true)).toBe(1);
        });
        it('ignores nested object with red value', function() {
            var input = '[1,{"c":"red","b":2},3]';
            expect(counter.totalNumbers(input, true)).toBe(4);
        });
        it('ignores object with red value even with nested array', function() {
            var input = '{"d":"red","e":[1,2,3,4],"f":5}';
            expect(counter.totalNumbers(input, true)).toBe(0);
        });
    });
});