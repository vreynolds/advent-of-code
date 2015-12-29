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

	it('devlivers to 4 houses in a square, twice to the first hosue', function() {
		expect(compass.deliver('^>v<')).toBe(4);
	});

	it('delivers to 2 houses over and over again', function() {
		expect(compass.deliver('^v^v^v^v^v')).toBe(2);
	});
});

describe('Day 3: with Robo-Santa', function() {
	it('delivers twice to single house at starting location', function() {
		expect(compass.superDeliver('')).toBe(1);
	});
	it('only santa gets to move', function() {
		expect(compass.superDeliver('>')).toBe(2);
	});
	it('both santa and robo-santa get to move to different houses East-West', function() {
		expect(compass.superDeliver('><')).toBe(3);
	});
	it('both santa and robo-santa get to move to different houses North-South', function() {
		expect(compass.superDeliver('^v')).toBe(3);
	});
	it('both santa and robo-santa get to move to same house East', function() {
		expect(compass.superDeliver('>>')).toBe(2);
	});
	it('both santa and robo-santa get to move to same house West', function() {
		expect(compass.superDeliver('<<')).toBe(2);
	});
	it('both santa and robo-santa get to move to same house North', function() {
		expect(compass.superDeliver('^^')).toBe(2);
	});
	it('both santa and robo-santa get to move to same house South', function() {
		expect(compass.superDeliver('vv')).toBe(2);
	});
	it('both santa and robo-santa repeat the first house', function() {
		expect(compass.superDeliver('<>><')).toBe(3);
	});
	it('both santa and robo-santa repeat different houses', function() {
		expect(compass.superDeliver('^v^vv^')).toBe(5);
	});
	it('both santa and robo-santa go in different directions', function() {
		expect(compass.superDeliver('^v^v^v^v^v')).toBe(11);
	});
});