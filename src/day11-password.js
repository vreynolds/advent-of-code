var _ = require('underscore');

var increment = function(input) {
    var incrementedPassword = '';
    var index;
    for (index = 7; index >= 0; index--) {
        var incrementedLetter = incrementLetter(input[index]);
        incrementedPassword = incrementedLetter + incrementedPassword;
        if (incrementedLetter !== 'a') {
            break;
        }
    }
    incrementedPassword = input.slice(0, index) + incrementedPassword;

    return incrementedPassword;
};

var incrementLetter = function(letter) {
    if (letter === 'z') {
        return 'a';
    } else {
        return String.fromCharCode(letter.charCodeAt(0) + 1);
    }
};

var isValid = function(password) {
    var validNumberOfConsecutiveLetters = false;
    var validNumberOfPairedLetters = false;
    var noForbiddenLetters = true;
    var pairedLetters = [];

    var consecutiveLetterCount;
    for (var i = 0; i < password.length; i++) {
        if (!validNumberOfConsecutiveLetters) {
            var currentLetterCode = password.charCodeAt(i);
            var previousLetterCode = password.charCodeAt(i - 1);
            consecutiveLetterCount = updateConsecutiveLetterCount(currentLetterCode, previousLetterCode, consecutiveLetterCount);
            validNumberOfConsecutiveLetters = consecutiveLetterCount > 1;
        }
        var currentLetter = password[i];
        var previousLetter = password[i - 1];
        if (noForbiddenLetters && isForbidden(currentLetter)) {
            noForbiddenLetters = false;
        }
        if (currentLetter === previousLetter) {
            pairedLetters.push(currentLetter);
        }
    }

    validNumberOfPairedLetters = _.uniq(pairedLetters).length > 1;

    return validNumberOfConsecutiveLetters && noForbiddenLetters && validNumberOfPairedLetters;
};

var updateConsecutiveLetterCount = function(
    currentLetterCode,
    previousLetterCode,
    consecutiveLetterCount) {

    if (currentLetterCode === (previousLetterCode + 1)) {
        return consecutiveLetterCount + 1;
    } else {
        return 0;
    }
};

var isForbidden = function(letter) {
    return (letter === 'i') || (letter === 'o') || (letter === 'l');
};

var nextPassword = function(oldPassword) {
    var newPassword = increment(oldPassword);
    while (!isValid(newPassword)) {
        newPassword = increment(newPassword);
    }
    return newPassword;
};

module.exports = {
    increment: increment,
    isValid: isValid,
    nextPassword: nextPassword
};