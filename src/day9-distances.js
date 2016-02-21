s = require('underscore.string');
_ = require('underscore');

var findPossibleRouteDistances = function(distances, currentLocation, unvisitedLocations) {

	var possibleRouteDistances = [];

	if (unvisitedLocations.length === 1) {
		var unvisitedLocation = unvisitedLocations[0];

		var currentDistance = _.findWhere(distances, {
			loc1: currentLocation,
			loc2: unvisitedLocation
		}) || _.findWhere(distances, {
			loc1: unvisitedLocation,
			loc2: currentLocation
		});

		possibleRouteDistances.push(currentDistance.dist);

	} else {

		for (var i = 0; i < unvisitedLocations.length; i++) {
			var possibleNextLocation = unvisitedLocations[i];
			var unvisitedLocationsCopy = unvisitedLocations.slice(0);
			unvisitedLocationsCopy.splice(i, 1);

			var currentDistance = _.findWhere(distances, {
				loc1: currentLocation,
				loc2: possibleNextLocation
			}) || _.findWhere(distances, {
				loc1: possibleNextLocation,
				loc2: currentLocation
			});

			var nextPossibleRouteDistances = findPossibleRouteDistances(distances, possibleNextLocation, unvisitedLocationsCopy);

			for (var j = 0; j < nextPossibleRouteDistances.length; j++) {
				possibleRouteDistances.push(currentDistance.dist + nextPossibleRouteDistances[j]);
			}
		}
	}

	return possibleRouteDistances;
};

var findAllDistances = function(input) {
	var distancesInputs = s.lines(input);

	var distances = [];
	var locationNames = [];
	for (var i = 0; i < distancesInputs.length; i++) {
		var inputs = distancesInputs[i].split(' = ');
		var locations = inputs[0].split(' to ');

		var location1 = locations[0];
		var location2 = locations[1];

		var distance = s.toNumber(inputs[1]);

		var locationDistance = {
			loc1: location1,
			loc2: location2,
			dist: distance
		};

		distances.push(locationDistance);
		locationNames.push(location1);
		locationNames.push(location2);
	}

	var uniqueLocations = _.uniq(locationNames);
	var routeDistances = [];

	var firstLocation = uniqueLocations[0];
	var uniqueLocationsCopy = uniqueLocations.slice(0);
	uniqueLocationsCopy.splice(0, 1);

	var results = [];

	for (var i = 0; i < uniqueLocations.length; i++) {
		var firstLocation = uniqueLocations[i];
		var uniqueLocationsCopy = uniqueLocations.slice(0);
		uniqueLocationsCopy.splice(i, 1);

		results = results.concat(findPossibleRouteDistances(distances, firstLocation, uniqueLocationsCopy));
	}

	return results;
};

var longest = function(input) {
	var allDistances = findAllDistances(input);
	return _.max(allDistances);
};

var shortest = function(input) {
	var allDistances = findAllDistances(input);
	return _.min(allDistances);
};

module.exports = {
	shortest: shortest,
	longest: longest
};