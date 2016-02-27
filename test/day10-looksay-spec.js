var looksaygame = require('../src/day10-looksay');

describe('Day 10: Elves Look, Elves Say, part 1: play', function() {
	it('given no input, single play result is empty', function() {
		expect(looksaygame.length(null, 1)).toBe('');
	});
	it('given blank input, single play result is empty', function() {
		expect(looksaygame.length('', 1)).toBe('');
	});
	it('given a single digit, single play results in 1 of that digit', function() {
		var input = '1';
		expect(looksaygame.length(input, 1)).toBe('11');
	});
	it('given two single digits, single play results in 1 of each digit', function() {
		var input = '12';
		expect(looksaygame.length(input, 1)).toBe('1112');
	});
	it('given a double digit, single play results in 2 of that digit', function() {
		var input = '11';
		expect(looksaygame.length(input, 1)).toBe('21');
	});
	it('given two double digits, single play results in 2 each digit', function() {
		var input = '1122';
		expect(looksaygame.length(input, 1)).toBe('2122');
	});
	it('given 0 play times, result is empty', function() {
		var input = '1';
		expect(looksaygame.length(input, 0)).toBe('');
	});
	it('given a single digit, 2 play results in 2 of that digit', function() {
		var input = '1';
		expect(looksaygame.length(input, 2)).toBe('21');
	});
	it('example', function() {
		var input = '1';
		expect(looksaygame.length(input, 5)).toBe('312211');
	});
});