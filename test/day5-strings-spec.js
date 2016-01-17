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

describe('Day 5, part 2', function() {
	describe('Nice String', function() {
		it('contains a pair of letters twice',function(){
			expect(judge.isNicer('xyxy')).toBe(true);
		});
		it('repeating pair of letters is in the middle',function(){
			expect(judge.isNicer('abxyxy')).toBe(true);
		});
		it('repeats a letter with a single letter in between',function(){
			expect(judge.isNicer('abaxybxy')).toBe(true);
		});
		it('example 1', function(){
			expect(judge.isNicer('qjhvhtzxzqqjkmpb')).toBe(true);
		});
		it('example 2', function(){
			expect(judge.isNicer('xxyxx')).toBe(true);
		});
	});

	describe('Naughty String', function() {
		it('does not contain any letters',function(){
			expect(judge.isNicer('')).toBe(false);
		});
		it('contains a pair of letters once',function(){
			expect(judge.isNicer('xy')).toBe(false);
		});
		it('contains two overlapping pairs of letters',function(){
			expect(judge.isNicer('aaa')).toBe(false);
		});
		it('does not repeat a letter with a single letter in between',function(){
			expect(judge.isNicer('abxycd')).toBe(false);
		});
		it('example 1',function(){
			expect(judge.isNicer('uurcxstgmygtbstg')).toBe(false);
		});
		it('example 2',function(){
			expect(judge.isNicer('ieodomkazucvgmuy')).toBe(false);
		});
	});
});