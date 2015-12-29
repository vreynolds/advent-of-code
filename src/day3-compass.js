var _ = require('underscore');

var deliver = function(directions) {

	var servedHouses = [{
		x: 0,
		y: 0
	}];
	var currentX = 0;
	var currentY = 0;

	for (var i = 0; i < directions.length; i++) {
		var direction = directions.charAt(i);

		if (direction === '>') {
			currentX++;
		} else if (direction === '<') {
			currentX--;
		} else if (direction === '^') {
			currentY++;
		} else if (direction === 'v') {
			currentY--;
		}

		var currentHouse = {
			x: currentX,
			y: currentY
		};
		var previouslVisitedHouse = _.findWhere(servedHouses, currentHouse);
		if (!previouslVisitedHouse) {
			servedHouses.push(currentHouse);
		}

	}
	return servedHouses.length;
};

var superDeliver = function(directions) {
	var servedHouses = [{
		x: 0,
		y: 0
	}];
	var currentSantaX = 0;
	var currentSantaY = 0;

	var currentRoboX = 0;
	var currentRoboY = 0;

	var santaTurn = true;
	for (var i = 0; i < directions.length; i++) {
		var direction = directions.charAt(i);

		if (direction === '>') {
			if (santaTurn) {
				currentSantaX++;
			} else {
				currentRoboX++;
			}
		} else if (direction === '<') {
			if (santaTurn) {
				currentSantaX--;
			} else {
				currentRoboX--;
			}
		} else if (direction === '^') {
			if (santaTurn) {
				currentSantaY++;
			} else {
				currentRoboY++;
			}
		} else if (direction === 'v') {
			if (santaTurn) {
				currentSantaY--;
			} else {
				currentRoboY--;
			}
		}

		var currentHouse;
		if (santaTurn) {
			currentHouse = {
				x: currentSantaX,
				y: currentSantaY
			};
		} else {
			currentHouse = {
				x: currentRoboX,
				y: currentRoboY
			};
		}

		var previouslVisitedHouse = _.findWhere(servedHouses, currentHouse);
		if (!previouslVisitedHouse) {
			servedHouses.push(currentHouse);
		}

		santaTurn = !santaTurn;

	}
	return servedHouses.length;
};

module.exports = {
	deliver: deliver,
	superDeliver: superDeliver
};