var containers = require('../src/day17-containers');

describe('Day 17: No Such Thing as Too Much', function() {
    describe('part 1 container combinations', function() {
        it('given no containers', function() {
            expect(containers.getCombinations('', 10)).toBe(0);
        });
        it('given no liters', function() {
            var input = ['1'];
            expect(containers.getCombinations(input, 0)).toBe(0);
        });
        it('given 1 container that fits', function() {
            var input = ['1'];
            expect(containers.getCombinations(input, 1)).toBe(1);
        });
        it('given 1 container that does not fit', function() {
            var input = ['1'];
            expect(containers.getCombinations(input, 2)).toBe(0);
        });
        it('given multiple containers with no surplus containers', function() {
            var input1 = ['1'];
            var input2 = ['2'];
            var input = [input1, input2].join('\n');
            expect(containers.getCombinations(input, 3)).toBe(1);
        });
        it('given multiple containers with possible surplus containers', function() {
            var input1 = ['3'];
            var input2 = ['2'];
            var input3 = ['1'];
            var input = [input1, input2, input3].join('\n');
            expect(containers.getCombinations(input, 3)).toBe(2);
        });
        it('given duplicate containers', function() {
            var input1 = ['1'];
            var input2 = ['1'];
            var input3 = ['2'];
            var input = [input1, input2, input3].join('\n');
            expect(containers.getCombinations(input, 3)).toBe(2);
        });
        it('example', function() {
            var input1 = ['20'];
            var input2 = ['15'];
            var input3 = ['10'];
            var input4 = ['5'];
            var input5 = ['5'];
            var input = [input1, input2, input3, input4, input5].join('\n');
            expect(containers.getCombinations(input, 25)).toBe(4);
        });
    });
});