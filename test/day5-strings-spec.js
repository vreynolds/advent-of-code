var judge = require('../src/day5-strings');

describe('Day 5: Nice or Naughty?', function() {

	describe('Nice String', function() {
		it('contains 3 vowels', function() {
			expect(judge.isNice('aeibb')).toBe(true);
		});

		it('contains more than 3 vowels', function() {
			expect(judge.isNice('ouaebb')).toBe(true);
		});

		it('contains some consonants and at lease 3 vowels', function() {
			expect(judge.isNice('xazegovv')).toBe(true);
		});

		it('contains at least one letter that appears twice in a row in the end', function() {
			expect(judge.isNice('aeii')).toBe(true);
		});

		it('contains at least one letter that appears twice in a row in the beginning', function() {
			expect(judge.isNice('aaei')).toBe(true);
		});

		it('does not contain ab, cd, pq, or xy', function() {
			expect(judge.isNice('aeii')).toBe(true);
		});

		it('simple example 1: aaa', function() {
			expect(judge.isNice('aaa')).toBe(true);
		});

		it('complex example 1: ugknbfddgicrmopn', function() {
			expect(judge.isNice('ugknbfddgicrmopn')).toBe(true);
		});
	});

	describe('Naughty String', function() {
		var baseNiceString = 'aeii';

		it('contains less than 3 vowels', function() {
			expect(judge.isNice('dvszwmarrgswjxmb')).toBe(false);
		});

		it('contains only consonants', function() {
			expect(judge.isNice('bcd')).toBe(false);
		});

		it('contains no letters that appear twice in a row', function() {
			expect(judge.isNice('jchzalrnumimnmhp')).toBe(false);
		});

		it('contains ab', function() {
			expect(judge.isNice(baseNiceString + 'ab')).toBe(false);
		});

		it('contains cd', function() {
			expect(judge.isNice(baseNiceString + 'cd')).toBe(false);
		});

		it('contains pq', function() {
			expect(judge.isNice(baseNiceString + 'pq')).toBe(false);
		});

		it('contains xy', function() {
			expect(judge.isNice('haegwjzuvuyypxyu')).toBe(false);
		});
	});
});