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

module.exports = {
    increment: increment
};