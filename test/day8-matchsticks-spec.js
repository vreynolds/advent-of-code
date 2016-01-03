var matchsticks = require('../src/day8-matchsticks');

describe('Day 8: Matchsticks', function() {
	describe('characters', function() {
		it('starts out as 0', function() {
			var counter = new matchsticks.counter();
			expect(counter.total()).toBe(0);;
		});
		it('single character string ', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('1');
			counter.add('"');
			expect(counter.total()).toBe(3);;
		});
		it('ignores new lines', function() {
			var counter = new matchsticks.counter();
			counter.add('\n');
			expect(counter.total()).toBe(0);
		});
		it('ignores blank space', function() {
			var counter = new matchsticks.counter();
			counter.add(' ');
			expect(counter.total()).toBe(0);
		});
	});
	describe('string length', function() {
		it('starts out as 0', function() {
			var counter = new matchsticks.counter();
			expect(counter.stringLength()).toBe(0);;
		});
		it('empty string ', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('"');
			expect(counter.stringLength()).toBe(0);;
		});
		it('single character ', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('1');
			counter.add('"');
			expect(counter.stringLength()).toBe(1);;
		});
		it('escaped quote ', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('\\');
			counter.add('"');
			counter.add('"');
			expect(counter.stringLength()).toBe(1);;
		});
		it('escaped ASCII character ', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('\\');
			counter.add('x');
			counter.add('1');
			counter.add('2');
			counter.add('"');
			expect(counter.stringLength()).toBe(1);;
		});
		it('three different escaped sequences ', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('\\');
			counter.add('\\');
			counter.add('\\');
			counter.add('"');
			counter.add('\\');
			counter.add('x');
			counter.add('a');
			counter.add('b');
			counter.add('"');
			expect(counter.stringLength()).toBe(3);;
		});
		it('escaped ASCII sequence with other characters', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('x');
			counter.add('\\');
			counter.add('x');
			counter.add('2');
			counter.add('x');
			counter.add('x');
			counter.add('"');
			expect(counter.stringLength()).toBe(3);
		});
		it('escaped quote and backslash with other characters', function() {
			var counter = new matchsticks.counter();
			counter.add('"');
			counter.add('1');
			counter.add('\\');
			counter.add('"');
			counter.add('2');
			counter.add('\\');
			counter.add('\\');
			counter.add('3');
			counter.add('"');
			expect(counter.stringLength()).toBe(5);
		});
		it('ignores new lines', function() {
			var counter = new matchsticks.counter();
			counter.add('\n');
			expect(counter.stringLength()).toBe(0);
		});
		it('ignores blank space', function() {
			var counter = new matchsticks.counter();
			counter.add('  ');
			expect(counter.stringLength()).toBe(0);
		});
	});
	it('example', function() {
		var counter = new matchsticks.counter();
		counter.add('"');
		counter.add('"');
		counter.add('\n');
		counter.add('"');
		counter.add('a');
		counter.add('b');
		counter.add('c');
		counter.add('"');
		counter.add('\n');
		counter.add('"');
		counter.add('a');
		counter.add('a');
		counter.add('a');
		counter.add('\\');
		counter.add('"');
		counter.add('a');
		counter.add('a');
		counter.add('a');
		counter.add('"');
		counter.add('\n');
		counter.add('"');
		counter.add('\\');
		counter.add('x');
		counter.add('2');
		counter.add('7');
		counter.add('"');

		expect(counter.total() - counter.stringLength()).toBe(12);
	});
});