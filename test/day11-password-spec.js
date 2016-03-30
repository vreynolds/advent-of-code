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

    describe('valid password', function() {
        it('has more than 2 consecutive letters', function() {
            var input = 'abczzzxx';
            expect(passwordManager.isValid(input)).toBe(true);
        });
        it('has consecutive letters anywhere in the password', function() {
            var input = 'zzzabcxx';
            expect(passwordManager.isValid(input)).toBe(true);
        });
        it('has no letters i, o, l', function() {
            var input = 'xxzzzzxyz';
            expect(passwordManager.isValid(input)).toBe(true);
        });
        it('has two different pairs of letters', function() {
            var input = 'aazzzzxyz';
            expect(passwordManager.isValid(input)).toBe(true);
        });
    });

    describe('invalid password', function() {
        it('has less than three consecutive letters', function() {
            var input = 'abzzzzzz';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('has consecutive letters with skips', function() {
            var input = 'abdzzzzz';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('has letter i', function() {
            var input = 'abczzzzi';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('has letter o', function() {
            var input = 'abczzzoz';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('has letter l', function() {
            var input = 'abczzlzz';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('has two of the same pair of letters', function() {
            var input = 'aazqaaxyz';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('example 1', function() {
            var input = 'hijklmmn';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('example 2', function() {
            var input = 'abbceffg';
            expect(passwordManager.isValid(input)).toBe(false);
        });
        it('example 3', function() {
            var input = 'abbcegjk';
            expect(passwordManager.isValid(input)).toBe(false);
        });
    });

    describe('next password', function() {
        it('example', function() {
            var input = 'abcdefgh';
            expect(passwordManager.nextPassword(input)).toBe('abcdffaa');
        });
    });
});