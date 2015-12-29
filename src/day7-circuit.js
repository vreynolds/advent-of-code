_ = require('underscore');
_s = require('underscore.string');

var findSourceSignal = function(wires, signals, wire) {
	var signal = _.findWhere(signals, {
		src: wire.src
	});

	if (signal) {
		return signal.signal;
	}

	if (_s.include(wire.src, 'AND')) {

		var gateInputs = wire.src.split(' AND ');
		var gateInput1 = findSourceSignal(wires, signals, {
			src: gateInputs[0]
		});
		var gateInput2 = findSourceSignal(wires, signals, {
			src: gateInputs[1]
		});

		signals.push({
			src: wire.dest,
			signal: gateInput1 & gateInput2
		});

		return gateInput1 & gateInput2;
	}

	if (_s.include(wire.src, 'OR')) {

		var gateInputs = wire.src.split(' OR ');
		var gateInput1 = findSourceSignal(wires, signals, {
			src: gateInputs[0]
		});
		var gateInput2 = findSourceSignal(wires, signals, {
			src: gateInputs[1]
		});

		signals.push({
			src: wire.dest,
			signal: gateInput1 | gateInput2
		});

		return gateInput1 | gateInput2;
	}

	if (_s.include(wire.src, 'LSHIFT')) {

		var gateInputs = wire.src.split(' LSHIFT ');
		var gateInput1 = findSourceSignal(wires, signals, {
			src: gateInputs[0]
		});
		var gateInput2 = _s.toNumber(gateInputs[1]);

		signals.push({
			src: wire.dest,
			signal: gateInput1 << gateInput2
		});

		return gateInput1 << gateInput2;
	}

	if (_s.include(wire.src, 'RSHIFT')) {

		var gateInputs = wire.src.split(' RSHIFT ');
		var gateInput1 = findSourceSignal(wires, signals, {
			src: gateInputs[0]
		});
		var gateInput2 = _s.toNumber(gateInputs[1]);

		signals.push({
			src: wire.dest,
			signal: gateInput1 >> gateInput2
		});

		return gateInput1 >> gateInput2;
	}

	if (_s.include(wire.src, 'NOT')) {

		var gateInputs = wire.src.split('NOT ');
		var gateInput = findSourceSignal(wires, signals, {
			src: gateInputs[1]
		});

		signals.push({
			src: wire.dest,
			signal: ~gateInput
		});

		return ~gateInput;
	}

	var source = _.findWhere(wires, {
		dest: wire.src
	});

	if (!source) {
		var sourceSignal = _s.toNumber(wire.src);
		signals.push({
			src: wire.dest,
			signal: sourceSignal
		});

		return sourceSignal;
	}

	return findSourceSignal(wires, signals, source);
};

var run = function(input) {
	var commands = _s.lines(input);
	var wires = [];
	var signals = [];

	for (var i = 0; i < commands.length; i++) {

		var command = commands[i].split(' -> ');
		var wire = {
			src: command[0],
			dest: command[1]
		};

		wires.push(wire);
	}

	var wireA = _.findWhere(wires, {
		dest: 'a'
	});
	if (!wireA) {
		return 0;
	}

	return findSourceSignal(wires, signals, wireA);
};

module.exports = {
	run: run
};