var _s = require('underscore.string');
var _ = require('underscore');

var turnLightOn = function(lightedCells, currentLight) {
	if (!_.findWhere(lightedCells, currentLight)) {
		lightedCells.push(currentLight);
	}
};

var turnLightOff = function(lightedCells, currentLight) {
	var light = _.findWhere(lightedCells, currentLight);
	if (light) {
		lightedCells.splice(lightedCells.indexOf(light));
	}
};

var toggleLight = function(lightedCells, currentLight) {
	var light = _.findWhere(lightedCells, currentLight);
	if (light) {
		lightedCells.splice(lightedCells.indexOf(light), 1);
	} else {
		lightedCells.push(currentLight);
	}
};

var processCommand = function(coordinates, lightedCells, handler) {
	var startCoordinates = coordinates[0].split(',');
	var stopCoordinates = coordinates[1].split(',');

	var x1 = _s.toNumber(startCoordinates[0]);
	var y1 = _s.toNumber(startCoordinates[1]);
	var x2 = _s.toNumber(stopCoordinates[0]);
	var y2 = _s.toNumber(stopCoordinates[1]);

	var rows, cols;

	for (var row = (y1 + 1); row <= y2; row++) {
		for (var col = (x1 + 1); col <= x2; col++) {
			var currentLight = {
				r: row,
				c: col
			};

			handler(lightedCells, currentLight);
		}
	}
};

var light = function(input) {
	var commands = _s.lines(input);
	var lightedCells = [];

	for (var i = 0; i < commands.length; i++) {
		var command = commands[i];

		if (_s.include(command, 'turn on')) {
			var coordinates = _s.strRight(command, 'turn on ').split(' through ');
			processCommand(coordinates, lightedCells, turnLightOn);
		} else if (_s.include(command, 'turn off')) {
			var coordinates = _s.strRight(command, 'turn off ').split(' through ');
			processCommand(coordinates, lightedCells, turnLightOff);
		} else {
			var coordinates = _s.strRight(command, 'toggle ').split(' through ');
			processCommand(coordinates, lightedCells, toggleLight);
		}
	}

	return lightedCells.length;
};

module.exports = {
	light: light
};