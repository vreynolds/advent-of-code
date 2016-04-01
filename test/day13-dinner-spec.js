var seater = require('../src/day13-dinner');

describe('Day 13: Knights of the Dinner Table', function() {
    describe('part 1', function() {
        it('optimal happiness with no input is 0', function() {
            expect(seater.optimize('')).toBe(0);
        });
        it('optimal happiness with 2 people and all gains', function() {
            var entry1 = 'Alice would gain 3 happiness units by sitting next to Bob.';
            var entry2 = 'Bob would gain 2 happiness units by sitting next to Alice.';
            var input = [entry1, entry2].join('\n');
            expect(seater.optimize(input)).toBe(5);
        });
        it('optimal happiness with 2 people and all losses', function() {
            var entry1 = 'Alice would lose 3 happiness units by sitting next to Bob.';
            var entry2 = 'Bob would lose 2 happiness units by sitting next to Alice.';
            var input = [entry1, entry2].join('\n');
            expect(seater.optimize(input)).toBe(-5);
        });
        it('optimal happiness with 2 people and mixed gains and losses', function() {
            var entry1 = 'Alice would gain 3 happiness units by sitting next to Bob.';
            var entry2 = 'Bob would lose 2 happiness units by sitting next to Alice.';
            var input = [entry1, entry2].join('\n');
            expect(seater.optimize(input)).toBe(1);
        });
        it('optimal happiness with 3 people', function() {
            var entry1 = 'Alice would gain 3 happiness units by sitting next to Bob.';
            var entry2 = 'Alice would lose 2 happiness units by sitting next to Job.';
            var entry3 = 'Bob would lose 1 happiness units by sitting next to Alice.';
            var entry4 = 'Bob would gain 2 happiness units by sitting next to Job.';
            var entry5 = 'Job would gain 1 happiness units by sitting next to Alice.';
            var entry6 = 'Job would lose 3 happiness units by sitting next to Bob.';
            var input = [entry1, entry2, entry3, entry4, entry5, entry6].join('\n');
            expect(seater.optimize(input)).toBe(0);
        });
        it('optimal happiness with 4 people', function() {
            var entry1 = 'Alice would gain 1 happiness units by sitting next to Bob.';
            var entry2 = 'Alice would lose 2 happiness units by sitting next to Job.';
            var entry3 = 'Alice would lose 3 happiness units by sitting next to Amy.';
            var entry4 = 'Bob would lose 1 happiness units by sitting next to Alice.';
            var entry5 = 'Bob would gain 2 happiness units by sitting next to Job.';
            var entry6 = 'Bob would gain 3 happiness units by sitting next to Amy.';
            var entry7 = 'Job would gain 1 happiness units by sitting next to Alice.';
            var entry8 = 'Job would lose 2 happiness units by sitting next to Bob.';
            var entry9 = 'Job would gain 3 happiness units by sitting next to Amy.';
            var entry10 = 'Amy would lose 1 happiness units by sitting next to Alice.';
            var entry11 = 'Amy would gain 2 happiness units by sitting next to Bob.';
            var entry12 = 'Amy would lose 3 happiness units by sitting next to Job.';
            var input = [entry1, entry2, entry3, entry4, entry5, entry6,
                entry7, entry8, entry9, entry10, entry11, entry12].join('\n');
            expect(seater.optimize(input)).toBe(4);
        });
        it('example', function() {
            var entry1 = 'Alice would gain 54 happiness units by sitting next to Bob.';
            var entry2 = 'Alice would lose 79 happiness units by sitting next to Carol.';
            var entry3 = 'Alice would lose 2 happiness units by sitting next to David.';
            var entry4 = 'Bob would gain 83 happiness units by sitting next to Alice.';
            var entry5 = 'Bob would lose 7 happiness units by sitting next to Carol.';
            var entry6 = 'Bob would lose 63 happiness units by sitting next to David.';
            var entry7 = 'Carol would lose 62 happiness units by sitting next to Alice.';
            var entry8 = 'Carol would gain 60 happiness units by sitting next to Bob.';
            var entry9 = 'Carol would gain 55 happiness units by sitting next to David.';
            var entry10 = 'David would gain 46 happiness units by sitting next to Alice.';
            var entry11 = 'David would lose 7 happiness units by sitting next to Bob.';
            var entry12 = 'David would gain 41 happiness units by sitting next to Carol.';
            var input = [entry1, entry2, entry3, entry4, entry5, entry6,
                entry7, entry8, entry9, entry10, entry11, entry12].join('\n');
            expect(seater.optimize(input)).toBe(330);
        });
    });
    
    describe('part 2: adding an ambivalent guest', function() {
        it('optimal happiness with 3 (+1) people', function() {
            var entry1 = 'Alice would gain 3 happiness units by sitting next to Bob.';
            var entry2 = 'Alice would lose 2 happiness units by sitting next to Job.';
            var entry3 = 'Bob would lose 1 happiness units by sitting next to Alice.';
            var entry4 = 'Bob would gain 2 happiness units by sitting next to Job.';
            var entry5 = 'Job would gain 1 happiness units by sitting next to Alice.';
            var entry6 = 'Job would lose 3 happiness units by sitting next to Bob.';
            var input = [entry1, entry2, entry3, entry4, entry5, entry6].join('\n');
            expect(seater.optimize(input, true)).toBe(1);
        });
    });
});