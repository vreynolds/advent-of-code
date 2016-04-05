var analyzer = require('../src/day16-sue');

describe('Day 16: Aunt Sue', function() {
    describe('part 1 criteria matching', function() {
        it('given no sues', function() {
            var criteria = { cats: '2' };
            expect(analyzer.whichSue('', criteria)).toBe(0);
        });
        it('given one sue that matches the criteria', function() {
            var criteria = { goldfish: '9', cars: '0', samoyeds: '9' };
            var input = 'Sue 1: goldfish: 9, cars: 0, samoyeds: 9';
            expect(analyzer.whichSue(input, criteria)).toBe(1);
        });
        it('given one sue that does not match the criteria', function() {
            var criteria = { goldfish: '9', cars: '0', samoyeds: '0' };
            var input = 'Sue 1: goldfish: 9, cars: 0, samoyeds: 9';
            expect(analyzer.whichSue(input, criteria)).toBe(0);
        });
        it('given one sue that partially matches the criteria', function() {
            var criteria = { goldfish: '9', cars: '0', samoyeds: '0', cats: '5' };
            var input = 'Sue 1: goldfish: 9, cars: 0, samoyeds: 0';
            expect(analyzer.whichSue(input, criteria)).toBe(1);
        });
        it('given multiple sues', function() {
            var criteria = { goldfish: '9', cars: '0', samoyeds: '0', cats: '5' };
            var input1 = 'Sue 1: goldfish: 9, cars: 0, samoyeds: 1';
            var input2 = 'Sue 2: goldfish: 9, cars: 0, cats: 5';
            var input = [input1, input2].join('\n');
            expect(analyzer.whichSue(input, criteria)).toBe(2);
        });
    });
    describe('part 2 criteria range matching', function() {
        it('given greater than value', function() {
            var criteria = { goldfish: '>8', cars: '0', samoyeds: '9', cats: '5' };
            var input1 = 'Sue 1: goldfish: 9, cars: 0, cats: 5';
            var input2 = 'Sue 2: goldfish: 8, cars: 0, cats: 5';
            var input = [input1, input2].join('\n');
            expect(analyzer.whichSue(input, criteria)).toBe(1);
        });
        it('given less than value', function() {
            var criteria = { goldfish: '>8', cars: '<9', samoyeds: '9', cats: '5' };
            var input1 = 'Sue 1: goldfish: 9, cars: 9, cats: 5';
            var input2 = 'Sue 2: goldfish: 9, cars: 8, cats: 5';
            var input = [input1, input2].join('\n');
            expect(analyzer.whichSue(input, criteria)).toBe(2);
        });
    });
});