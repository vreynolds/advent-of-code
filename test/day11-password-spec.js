var passwordManager = require('../src/day11-password');

describe('Day 11: Corporate Policy', function() {
    describe('password increment', function() {
        it('increments rightmost letter by one', function() {
            var input = 'aaaaaaaa';
            expect(passwordManager.increment(input)).toBe('aaaaaaab');
        });
        it('increments rightmost z', function() {
            var input = 'aaaaaaaz';
            expect(passwordManager.increment(input)).toBe('aaaaaaba');
        });
        it('increments many successive z', function() {
            var input = 'azzzzzzz';
            expect(passwordManager.increment(input)).toBe('baaaaaaa');
        });
    });
});