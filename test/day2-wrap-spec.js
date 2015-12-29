var wrapper = require('../src/day2-wrap');

describe('Day 2: wrapping presents', function() {
	describe('surface area', function() {
		it('is 0 when 0x0x0', function() {
			expect(wrapper.surfaceArea('0x0x0')).toBe(0);
		});

		it('is 0 when 1x0x0', function() {
			expect(wrapper.surfaceArea('1x0x0')).toBe(0);
		});

		it('is 0 when 0x1x0', function() {
			expect(wrapper.surfaceArea('0x1x0')).toBe(0);
		});

		it('is 0 when 0x0x1', function() {
			expect(wrapper.surfaceArea('0x0x1')).toBe(0);
		});

		it('is 2 when 1x1x0', function() {
			expect(wrapper.surfaceArea('1x1x0')).toBe(2);
		});

		it('is 2 when 0x1x1', function() {
			expect(wrapper.surfaceArea('0x1x1')).toBe(2);
		});

		it('is 2 when 1x0x1', function() {
			expect(wrapper.surfaceArea('1x0x1')).toBe(2);
		});

		it('is 6 when 1x1x1', function() {
			expect(wrapper.surfaceArea('1x1x1')).toBe(6);
		});

		it('is 10 when 2x1x1', function() {
			expect(wrapper.surfaceArea('2x1x1')).toBe(10);
		});
	});

	describe('smallest side area', function() {
		it('is 0 when 0x0x0', function() {
			expect(wrapper.smallestSideArea('0x0x0')).toBe(0);
		});

		it('is 0 when 1x0x0', function() {
			expect(wrapper.smallestSideArea('1x0x0')).toBe(0);
		});

		it('is 0 when 0x1x0', function() {
			expect(wrapper.smallestSideArea('0x1x0')).toBe(0);
		});

		it('is 0 when 0x0x1', function() {
			expect(wrapper.smallestSideArea('0x0x1')).toBe(0);
		});

		it('is 0 when 1x1x0', function() {
			expect(wrapper.smallestSideArea('1x1x0')).toBe(0);
		});

		it('is 0 when 1x0x1', function() {
			expect(wrapper.smallestSideArea('1x0x1')).toBe(0);
		});

		it('is 0 when 0x1x1', function() {
			expect(wrapper.smallestSideArea('0x1x1')).toBe(0);
		});

		it('is 1 when 1x1x1', function() {
			expect(wrapper.smallestSideArea('1x1x1')).toBe(1);
		});

		it('is 2 when 3x2x1', function() {
			expect(wrapper.smallestSideArea('3x2x1')).toBe(2);
		});
	});

	describe('wrapping paper is surface area plus smallest side area', function() {
		it('is 58 when 2x3x4', function() {
			expect(wrapper.wrap('2x3x4')).toBe(58);
		});

		it('is 43 when 1x1x10', function() {
			expect(wrapper.wrap('1x1x10')).toBe(43);
		});
	});
});

describe('Day 2: ribbon', function() {
	describe('length is the smallest perimeter', function() {
		it('is 0 when 0x0x0', function() {
			expect(wrapper.ribbon('0x0x0')).toBe(0);
		});
		it('all perimeters equal', function() {
			expect(wrapper.ribbon('1x1x1')).toBe(4);
		});
		it('longer length', function() {
			expect(wrapper.ribbon('2x1x1')).toBe(4);
		});
		it('longer width', function() {
			expect(wrapper.ribbon('1x2x1')).toBe(4);
		});
		it('longer height', function() {
			expect(wrapper.ribbon('1x1x2')).toBe(4);
		});
	});

	describe('bow is the volume', function() {
		it('is 0 when 0x0x0', function() {
			expect(wrapper.bow('0x0x0')).toBe(0);
		});
		it('all sides 1', function() {
			expect(wrapper.bow('1x1x1')).toBe(1);
		});
		it('all sides equal', function() {
			expect(wrapper.bow('2x2x2')).toBe(8);
		});
		it('all sides different', function() {
			expect(wrapper.bow('2x3x4')).toBe(24);
		});
	});

	describe('total ribbon is length + bow', function() {
		it('2x3x4 is 34', function() {
			expect(wrapper.totalRibbon('2x3x4')).toBe(34);
		});
		it('1x1x10 is 14', function() {
			expect(wrapper.totalRibbon('1x1x10')).toBe(14);
		});
	});
});