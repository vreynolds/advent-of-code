var replacer = require('../src/day19-reindeer');

describe('Day 19: Medicine for Rudolph', function () {
    describe('part 1', function () {
        it('is 0 given no input', function () {
            var replacements = [];
            var molecule = '';
            expect(replacer.replace(replacements, molecule)).toBe(0);
        });
        it('is 0 when no letters can be replaced', function () {
            var replacements = ['H => HO'];
            var molecule = 'BO'
            expect(replacer.replace(replacements, molecule)).toBe(0);
        });
        it('is 1 given single replacement', function () {
            var replacements = ['H => HO'];
            var molecule = 'HO'
            expect(replacer.replace(replacements, molecule)).toBe(1);
        });
        it('is 2 given two replacements of the same letter', function () {
            var replacements = ['H => HO'];
            var molecule = 'HOH'
            expect(replacer.replace(replacements, molecule)).toBe(2);
        });
        it('is 1 given two replacements that are duplicates', function () {
            var replacements = ['H => HO', 'O => OO'];
            var molecule = 'HO'
            expect(replacer.replace(replacements, molecule)).toBe(1);
        });
    });
});