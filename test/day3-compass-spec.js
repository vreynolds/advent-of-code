var compass = require('../src/day3-compass');

describe('Day 3: Compass', function() {
	it('delivers to single house at starting location', function() {
		expect(compass.deliver('')).toBe(1);
	});

	it('delivers to 2 houses when >', function() {
		expect(compass.deliver('>')).toBe(2);
	});

	it('delivers to 2 houses when repeats same house going back West', function() {
		expect(compass.deliver('><')).toBe(2);
	});

	it('delivers to 2 houses when repeats same house going back East', function() {
		expect(compass.deliver('<>')).toBe(2);
	});

	it('delivers to 2 houses when repeats same house going back South', function() {
		expect(compass.deliver('^v')).toBe(2);
	});

	it('delivers to 2 houses when repeats same house going back North', function() {
		expect(compass.deliver('v^')).toBe(2);
	});

	it('devlivers to 4 houses in a square, twice to the first hosue', function(){
		expect(compass.deliver('^>v<')).toBe(4);
	});

	it('delivers to 2 houses over and over again', function(){
		expect(compass.deliver('^v^v^v^v^v')).toBe(2);
	});
});