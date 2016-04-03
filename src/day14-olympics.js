var s = require('underscore.string');
var _ = require('underscore');

var winningDistance = function(input, seconds) {
    var reindeer = s.lines(input);
    var distances = [];

    for (var index = 0; index < reindeer.length; index++) {
        var input = reindeer[index];
        distances.push(calculateTotalDistance(input, seconds));
    }

    return _.max(distances);
};

var winningPoints = function(input, seconds) {
    var reindeer = s.lines(input);
    var distanceArrays = [];

    for (var index = 0; index < reindeer.length; index++) {
        var input = reindeer[index];
        var reindeerDistances = calculateDistanceBySecond(input, seconds);
        if (reindeerDistances.length > 0) {
            distanceArrays.push(reindeerDistances);
        }
    }

    if (distanceArrays.length < 1) {
        return 0;
    }

    return _.max(calculatePoints(distanceArrays, seconds));
};

var calculatePoints = function(distanceArrays, seconds) {
    var points = [];

    for (var index = 0; index < distanceArrays.length; index++) {
        points.push(0);
    }

    for (var second = 0; second < seconds; second++) {
        var winningReindeer = 0;
        var winningDistance = distanceArrays[0][0];
        for (var index = 0; index < distanceArrays.length; index++) {
            var reindeerDistances = distanceArrays[index];
            if (reindeerDistances[second] > winningDistance) {
                winningDistance = reindeerDistances[second];
                winningReindeer = index;
            }
        }
        points[winningReindeer] += 1;
        for (var index = 0; index < distanceArrays.length; index++) {
            var reindeerDistances = distanceArrays[index];
            if (index !== winningReindeer && reindeerDistances[second] === winningDistance) {
                points[index] += 1;
            }
        }
    }

    return points;
};

var calculateTotalDistance = function(input, seconds) {
    var words = s.words(input);

    var speed = s.toNumber(words[3]);
    var maxSprint = s.toNumber(words[6]);
    var restTime = s.toNumber(words[13]);

    var totalDistance = 0;
    while (words.length > 1 && seconds > 0) {
        var sprintResult = sprint(seconds, maxSprint, speed);
        totalDistance += sprintResult.distance;
        seconds = sprintResult.secondsRemaining - restTime;
    }

    return totalDistance;
};

var calculateDistanceBySecond = function(input, seconds) {
    var words = s.words(input);

    var speed = s.toNumber(words[3]);
    var maxSprint = s.toNumber(words[6]);
    var restTime = s.toNumber(words[13]);

    var distanceBySecond = [];
    var totalDistance = 0;
    while (words.length > 1 && seconds > 0) {
        var secondsRemaining = seconds + 0;
        var time = 0;
        while (secondsRemaining > 0 && time < maxSprint) {
            totalDistance += speed;
            time++;
            secondsRemaining--;
            distanceBySecond.push(totalDistance);
        }

        seconds = secondsRemaining - restTime;

        for (var index = 0; index < restTime; index++) {
            distanceBySecond.push(totalDistance);
        }
    }

    return distanceBySecond;
};

var sprint = function(seconds, maxSprint, speed) {
    var secondsRemaining = seconds + 0;
    var totalSprintDistance = 0;
    var time = 0;
    while (secondsRemaining > 0 && time < maxSprint) {
        totalSprintDistance += speed;
        time++;
        secondsRemaining--;
    }
    return {
        distance: totalSprintDistance,
        secondsRemaining: secondsRemaining
    };
};

module.exports = {
    winningDistance: winningDistance,
    winningPoints: winningPoints
};