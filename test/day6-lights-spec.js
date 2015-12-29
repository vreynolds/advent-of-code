var grid = require('../src/day6-lights');

describe('Day 6: How many lights are on?', function() {
	it('single light on', function() {
		var input = 'turn on 0,0 through 1,1';

		expect(grid.light(input)).toBe(1);
	});

	it('multiple lights on', function() {
		var input = 'turn on 0,0 through 2,2';

		expect(grid.light(input)).toBe(4);
	});

	it('multiple lights on in succession', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'turn on 2,0 through 4,2';
		var input = command1 + '\n' + command2;

		expect(grid.light(input)).toBe(8);
	});

	it('multiple lights on in succession with overlap', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'turn on 1,0 through 4,2';
		var input = command1 + '\n' + command2;

		expect(grid.light(input)).toBe(8);
	});

	it('some lights are turned off', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'turn off 1,1 through 2,2';
		var input = command1 + '\n' + command2;

		expect(grid.light(input)).toBe(3);
	});

	it('some lights are turned off with overlap', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'turn off 1,1 through 2,2';
		var command3 = 'turn off 0,0 through 2,2';
		var input = [command1, command2, command3].join('\n');

		expect(grid.light(input)).toBe(0);
	});

	it('some lights are toggled off', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'toggle 1,1 through 2,2';
		var input = [command1, command2].join('\n');

		expect(grid.light(input)).toBe(3);
	});

	it('some lights are toggled on', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'turn off 1,1 through 2,2';
		var command3 = 'toggle 1,1 through 2,2';
		var input = [command1, command2, command3].join('\n');

		expect(grid.light(input)).toBe(4);
	});

	it('some lights are toggled on and off', function() {
		var command1 = 'turn on 0,0 through 2,2';
		var command2 = 'turn off 1,1 through 2,2';
		var command3 = 'toggle 0,0 through 2,2';
		var input = [command1, command2, command3].join('\n');

		expect(grid.light(input)).toBe(1);
	});
});