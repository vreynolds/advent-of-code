var climber = require('../src/day1-stairs');

describe("Day 1: Floor climber", function() {
	it("starts on the zero floor", function() {
		expect(climber.climb('')).toBe(0);
	});

	it("goes up 1 floor for one (", function() {
		expect(climber.climb('(')).toBe(1);
	});

	it("goes down 1 floor for one )", function() {
		expect(climber.climb(')')).toBe(-1);
	});

	it("ends up on zero floor after ))((", function() {
		expect(climber.climb('))((')).toBe(0);
	});
});

describe("Day 1: First time in the basement", function() {
	it("first move", function() {
		expect(climber.basement(')')).toBe(1);
	});

	it("up and down", function() {
		expect(climber.basement('())')).toBe(3);
	});

	it("with additional steps", function() {
		expect(climber.basement('()))')).toBe(3);
	});
});