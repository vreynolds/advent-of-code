var _ = require('underscore');

var totalNumbers = function(input, ignoreRed) {
    var inputJson = JSON.parse(input);

    return processElement(inputJson, ignoreRed);
};

var processElement = function(element, ignoreRed) {
    var sum = 0;
    if (isNumber(element)) {
        sum += element;
    } else if (isNotString(element)) {
        var hasRed = false;
        for (var key in element) {
            var value = element[key];
            if(value === 'red' && isNaN(key)) {
                hasRed = true;
            }
            sum += processElement(element[key]);
        }
        if(hasRed) {
            sum = 0;
        }
    }

    return sum;
};

var isNotString = function(element) {
    return typeof element !== 'string';
};

var isNumber = function(element) {
    return _.isNumber(element);
};

module.exports = {
    totalNumbers: totalNumbers
};