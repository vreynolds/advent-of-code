var distanceCalculator = require('../src/day9-distances');

describe('Day 9: Shortest Distance', function() {
	it('is 0 when no locations', function() {
		var input = '';

		expect(distanceCalculator.shortest(input)).toBe(0);
	});
	it('given only 2 locations is the distance between locations', function() {
		var input = 'place to somewhereElse = 10';

		expect(distanceCalculator.shortest(input)).toBe(10);
	});
	it('given 3 locations, longest distance first, calculates the shortest distance', function() {
		var distance1 = 'A to B = 100';
		var distance2 = 'A to C = 10';
		var distance3 = 'C to B = 80';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.shortest(input)).toBe(90);
	});
	it('given 3 locations, shortest distance first, calculates the shortest distance', function() {
		var distance1 = 'A to B = 10';
		var distance2 = 'A to C = 100';
		var distance3 = 'C to B = 80';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.shortest(input)).toBe(90);
	});
	it('given 3 locations, middle distance first, calculates the shortest distance', function() {
		var distance1 = 'A to B = 80';
		var distance2 = 'A to C = 100';
		var distance3 = 'C to B = 10';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.shortest(input)).toBe(90);
	});
	it('example', function() {
		var distance1 = 'London to Dublin = 464';
		var distance2 = 'London to Belfast = 518';
		var distance3 = 'Dublin to Belfast = 141';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.shortest(input)).toBe(605);
	});
});

describe('Day 9: Longest Distance', function() {
	it('is 0 when no locations', function() {
		var input = '';

		expect(distanceCalculator.longest(input)).toBe(0);
	});
	it('given only 2 locations is the distance between locations', function() {
		var input = 'place to somewhereElse = 10';

		expect(distanceCalculator.longest(input)).toBe(10);
	});
	it('given 3 locations, longest distance first, calculates the longest distance', function() {
		var distance1 = 'A to B = 100';
		var distance2 = 'A to C = 10';
		var distance3 = 'C to B = 80';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.longest(input)).toBe(180);
	});
	it('given 3 locations, shortest distance first, calculates the longest distance', function() {
		var distance1 = 'A to B = 10';
		var distance2 = 'A to C = 100';
		var distance3 = 'C to B = 80';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.longest(input)).toBe(180);
	});
	it('given 3 locations, middle distance first, calculates the longest distance', function() {
		var distance1 = 'A to B = 80';
		var distance2 = 'A to C = 100';
		var distance3 = 'C to B = 10';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.longest(input)).toBe(180);
	});
	it('example', function() {
		var distance1 = 'London to Dublin = 464';
		var distance2 = 'London to Belfast = 518';
		var distance3 = 'Dublin to Belfast = 141';
		var input = [distance1, distance2, distance3].join('\n');

		expect(distanceCalculator.longest(input)).toBe(982);
	});
});