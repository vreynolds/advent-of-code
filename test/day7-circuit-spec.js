var circuit = require('../src/day7-circuit');

describe('Day 7: Circuit Board', function() {
	it('single input wire', function() {
		var input = '123 -> a';

		expect(circuit.run(input)).toBe(123);
	});

	it('ignore non-a wire', function() {
		var input = '123 -> x';

		expect(circuit.run(input)).toBe(0);
	});

	it('two wires chained', function() {
		var command1 = '123 -> x';
		var command2 = 'x -> a';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(123);
	});

	it('two wires chained non-sequentially', function() {
		var command1 = 'x -> a';
		var command2 = '123 -> x';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(123);
	});

	it('multiple wires chained non-sequentially', function() {
		var command1 = 'x -> a';
		var command2 = 'y -> x';
		var command3 = '123 -> y';
		var input = [command1, command2, command3].join('\n');

		expect(circuit.run(input)).toBe(123);
	});

	it('some dead-end wires', function() {
		var command1 = 'x -> a';
		var command2 = 'y -> x';
		var command3 = '123 -> y';
		var command4 = 'y -> q';
		var input = [command1, command2, command3, command4].join('\n');

		expect(circuit.run(input)).toBe(123);
	});

	it('single AND gate with two wire inputs', function() {
		var command1 = '123 -> x';
		var command2 = '456 -> y';
		var command3 = 'x AND y -> a';
		var input = [command1, command2, command3].join('\n');

		expect(circuit.run(input)).toBe(72);
	});

	it('single AND gate with single wire', function() {
		var command1 = '123 -> x';
		var command2 = 'x AND 1 -> a';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(1);
	});

	it('multiple AND gates', function() {
		var command1 = 'x AND 233 -> k';
		var command2 = '233 AND y -> m';
		var command3 = 'k AND m -> a';
		var command4 = '123 -> x';
		var command5 = '189 -> y';
		var input = [command1, command2, command3, command4, command5].join('\n');

		expect(circuit.run(input)).toBe(41);
	});

	it('single OR gate with two wire inputs', function() {
		var command1 = '123 -> x';
		var command2 = '456 -> y';
		var command3 = 'x OR y -> a';
		var input = [command1, command2, command3].join('\n');

		expect(circuit.run(input)).toBe(507);
	});

	it('single OR gate with single wire', function() {
		var command1 = '123 -> x';
		var command2 = 'x OR 1 -> a';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(123);
	});

	it('multiple OR gates', function() {
		var command1 = 'x OR 233 -> k';
		var command2 = '233 OR y -> m';
		var command3 = 'k OR m -> a';
		var command4 = '123 -> x';
		var command5 = '189 -> y';
		var input = [command1, command2, command3, command4, command5].join('\n');

		expect(circuit.run(input)).toBe(255);
	});

	it('single NOT gate', function() {
		var command1 = '123 -> x';
		var command2 = 'NOT x -> a';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(-124);
	});

	it('multiple NOT gates', function() {
		var command1 = '123 -> x';
		var command2 = 'NOT x -> y';
		var command3 = 'NOT y -> a';
		var input = [command1, command2, command3].join('\n');

		expect(circuit.run(input)).toBe(123);
	});

	it('single LSHIFT gate', function() {
		var command1 = '123 -> x';
		var command2 = 'x LSHIFT 1 -> a';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(246);
	});

	it('multiple LSHIFT gates', function() {
		var command1 = '123 -> x';
		var command2 = 'x LSHIFT 1 -> y';
		var command3 = 'y LSHIFT 2 -> a';
		var input = [command1, command2, command3].join('\n');

		expect(circuit.run(input)).toBe(984);
	});

	it('single RSHIFT gate', function() {
		var command1 = '44430 -> x';
		var command2 = 'x RSHIFT 2 -> a';
		var input = [command1, command2].join('\n');

		expect(circuit.run(input)).toBe(11107);
	});

	it('multiple RSHIFT gates', function() {
		var command1 = '123 -> xp';
		var command2 = 'xp RSHIFT 1 -> yc';
		var command3 = 'yc RSHIFT 2 -> a';
		var input = [command1, command2, command3].join('\n');

		expect(circuit.run(input)).toBe(15);
	});
});