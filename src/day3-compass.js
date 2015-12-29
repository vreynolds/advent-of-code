var _ = require('underscore');

var deliver = function(directions) {

	var servedHouses = [{x:0,y:0}];
	var currentX = 0;
	var currentY = 0;

	for (var i = 0; i < directions.length; i++) {
		var direction = directions.charAt(i);

		if(direction === '>') {
			currentX++;
		} else if(direction === '<') {
			currentX--;
		} else if(direction === '^') {
			currentY++;
		} else if(direction === 'v') {
			currentY--;
		}

		var currentHouse = {x:currentX,y:currentY};
		var previouslVisitedHouse = _.findWhere(servedHouses, currentHouse);
		if(!previouslVisitedHouse){
			servedHouses.push(currentHouse);
		}

	}
	return servedHouses.length;
};

module.exports = {
	deliver: deliver
};