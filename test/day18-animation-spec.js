var animator = require('../src/day18-animation');

describe('Day 18: Like a GIF For Your Yard', function() {
    describe('part 1', function() {
        it('given an empty grid', function() {
            var input = '';
            var steps = 10;
            expect(animator.light(input, steps)).toBe(0);
        });
        it('given 0 steps', function() {
            var input1 = '.#.';
            var input2 = '#.#';
            var input3 = '.#.';
            var input = [input1, input2, input3].join('\n');
            var steps = 0;
            expect(animator.light(input, steps)).toBe(4);
        });
        it('on light stays on when 2 or 3 neighbors are on', function() {
            var input1 = '###';
            var input2 = '...';
            var input3 = '...';
            var input = [input1, input2, input3].join('\n');
            var steps = 1;
            expect(animator.light(input, steps)).toBe(2);
        });
        it('on light turns off when less than 2 neighbors are on', function() {
            var input1 = '##.';
            var input2 = '...';
            var input3 = '...';
            var input = [input1, input2, input3].join('\n');
            var steps = 1;
            expect(animator.light(input, steps)).toBe(0);
        });
        it('on light turns off when more than 3 neighbors are on', function() {
            var input1 = '###';
            var input2 = '###';
            var input3 = '...';
            var input = [input1, input2, input3].join('\n');
            var steps = 1;
            expect(animator.light(input, steps)).toBe(5);
        });
        it('off light turns on when 3 neighbors are on', function() {
            var input1 = '###';
            var input2 = '...';
            var input3 = '...';
            var input = [input1, input2, input3].join('\n');
            var steps = 1;
            expect(animator.light(input, steps)).toBe(2);
        });
        it('off light stays off when less than 3 neighbors are on', function() {
            var input1 = '##';
            var input2 = '..';
            var input = [input1, input2].join('\n');
            var steps = 1;
            expect(animator.light(input, steps)).toBe(0);
        });
        it('off light stays off when more than 3 neighbors are on', function() {
            var input1 = '###';
            var input2 = '...';
            var input3 = '###';
            var input = [input1, input2, input3].join('\n');
            var steps = 1;
            expect(animator.light(input, steps)).toBe(2);
        });
        it('multistep example', function() {
            var input1 = '.#.#.#';
            var input2 = '...##.';
            var input3 = '#....#';
            var input4 = '..#...';
            var input5 = '#.#..#';
            var input6 = '####..';
            var input = [input1, input2, input3, input4, input5, input6].join('\n');
            var steps = 4;
            expect(animator.light(input, steps)).toBe(4);
        });
    });
    describe('part 2 with stuck corners', function() {
        it('given an empty grid', function() {
            var input = '';
            var steps = 10;
            expect(animator.light(input, steps, true)).toBe(0);
        });
        it('given 0 steps', function() {
            var input1 = '###';
            var input2 = '#.#';
            var input3 = '###';
            var input = [input1, input2, input3].join('\n');
            var steps = 0;
            expect(animator.light(input, steps, true)).toBe(8);
        });
        it('corners are not affected by rules', function() {
            var input1 = '###';
            var input2 = '...';
            var input3 = '###';
            var input = [input1, input2, input3].join('\n');
            var steps = 1;
            expect(animator.light(input, steps, true)).toBe(6);
        });
        it('multistep example', function() {
            var input1 = '##.#.#';
            var input2 = '...##.';
            var input3 = '#....#';
            var input4 = '..#...';
            var input5 = '#.#..#';
            var input6 = '####.#';
            var input = [input1, input2, input3, input4, input5, input6].join('\n');
            var steps = 5;
            expect(animator.light(input, steps, true)).toBe(17);
        });
    });
});