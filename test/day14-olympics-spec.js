var meter = require('../src/day14-olympics');

describe('Day 14: Reindeer Olympics', function() {
    describe('part 1: winning distance', function() {
        it('with no reindeer', function() {
            expect(meter.winningDistance('', 10)).toBe(0);
        });
        it('with some reindeer but 0 seconds', function() {
            var input1 = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningDistance(input, 0)).toBe(0);
        });
        it('with one reindeer and 1 second', function() {
            var input1 = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningDistance(input, 1)).toBe(19);
        });
        it('with one reindeer and 2 seconds', function() {
            var input1 = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningDistance(input, 2)).toBe(38);
        });
        it('with one reindeer and one sprint', function() {
            var input1 = 'Vixen can fly 2 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningDistance(input, 8)).toBe(14);
        });
        it('with one reindeer and multiple sprints', function() {
            var input1 = 'Vixen can fly 2 km/s for 2 seconds, but then must rest for 3 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningDistance(input, 10)).toBe(8);
        });
        it('with multiple reindeer', function() {
            var input1 = 'Rudolph can fly 2 km/s for 2 seconds, but then must rest for 3 seconds.';
            var input2 = 'Vixen can fly 2 km/s for 3 seconds, but then must rest for 2 seconds.';
            var input = [input1, input2].join('\n');
            expect(meter.winningDistance(input, 10)).toBe(12);
        });
        it('example', function() {
            var input1 = 'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.';
            var input2 = 'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.';
            var input = [input1, input2].join('\n');
            expect(meter.winningDistance(input, 1000)).toBe(1120);
        });
    });
    describe('part 2: winning points', function() {
        it('with no reindeer', function() {
            expect(meter.winningPoints('', 10)).toBe(0);
        });
        it('with some reindeer but 0 seconds', function() {
            var input1 = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningPoints(input, 0)).toBe(0);
        });
        it('with one reindeer and 1 second', function() {
            var input1 = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningPoints(input, 1)).toBe(1);
        });
        it('with one reindeer and 2 seconds', function() {
            var input1 = 'Vixen can fly 19 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningPoints(input, 2)).toBe(2);
        });
        it('with one reindeer and one sprint', function() {
            var input1 = 'Vixen can fly 2 km/s for 7 seconds, but then must rest for 124 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningPoints(input, 8)).toBe(8);
        });
        it('with one reindeer and multiple sprints', function() {
            var input1 = 'Vixen can fly 2 km/s for 2 seconds, but then must rest for 3 seconds.';
            var input = [input1].join('\n');
            expect(meter.winningPoints(input, 10)).toBe(10);
        });
        it('with multiple reindeer', function() {
            var input1 = 'Rudolph can fly 2 km/s for 2 seconds, but then must rest for 3 seconds.';
            var input2 = 'Vixen can fly 2 km/s for 3 seconds, but then must rest for 2 seconds.';
            var input = [input1, input2].join('\n');
            expect(meter.winningPoints(input, 10)).toBe(10);
        });
        it('example', function() {
            var input1 = 'Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.';
            var input2 = 'Dancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.';
            var input = [input1, input2].join('\n');
            expect(meter.winningPoints(input, 1000)).toBe(689);
        });
    });
});