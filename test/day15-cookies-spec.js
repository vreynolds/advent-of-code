var cookies = require('../src/day15-cookies');

describe('Day 15: Science for Hungry People', function() {
    describe('part 1 the best recipe score', function() {
        it('given no ingredients', function() {
            expect(cookies.bestScore('', 10)).toBe(0);
        });
        it('given 0 spoons', function() {
            var input = 'Sprinkles: capacity 2, durability 0, flavor -2, texture 0, calories 3';
            expect(cookies.bestScore(input, 0)).toBe(0);
        });
        it('given 1 ingredient and 1 spoon', function() {
            var input = 'Sprinkles: capacity 1, durability 2, flavor 3, texture 4, calories 3';
            expect(cookies.bestScore(input, 1)).toBe(24);
        });
        it('given negative properties result in 0s', function() {
            var input = 'Sprinkles: capacity -2, durability 2, flavor 3, texture 4, calories 3';
            expect(cookies.bestScore(input, 1)).toBe(0);
        });
        it('given 1 ingredient and multiple spoons', function() {
            var input = 'Sprinkles: capacity 1, durability 2, flavor 3, texture 4, calories 3';
            expect(cookies.bestScore(input, 2)).toBe(384);
        });
        it('given multiple ingredients and 1 spoon', function() {
            var input1 = 'Sprinkles: capacity 1, durability 2, flavor 3, texture 4, calories 3';
            var input2 = 'Butterscotch: capacity 1, durability 2, flavor 3, texture 5, calories 3';
            var input = [input1, input2].join('\n');
            expect(cookies.bestScore(input, 1)).toBe(30);
        });
        it('given same number of ingredients and spoons', function() {
            var input1 = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8';
            var input2 = 'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3';
            var input = [input1, input2].join('\n');
            expect(cookies.bestScore(input, 2)).toBe(8);
        });
        it('given more ingredients than spoons', function() {
            var input1 = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8';
            var input2 = 'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3';
            var input3 = 'Chocolate: capacity 0, durability 0, flavor 5, texture 2, calories 8';
            var input = [input1, input2, input3].join('\n');
            expect(cookies.bestScore(input, 2)).toBe(18);
        });
        it('given more spoons than ingredients', function() {
            var input1 = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8';
            var input2 = 'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3';
            var input = [input1, input2].join('\n');
            expect(cookies.bestScore(input, 3)).toBe(24);
        });
        it('example', function() {
            var input1 = 'Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8';
            var input2 = 'Cinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3';
            var input = [input1, input2].join('\n');
            expect(cookies.bestScore(input, 100)).toBe(62842880);
        });
    });
});