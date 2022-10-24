const repeatString = function(string, count) {
    if (count < 0) {return 'ERROR'};
    if (count === 0) {return ''};
    // Repeat the string using recursion.
    if (count > 1) {
      string += repeatString(string, count - 1);
    }
    return string;
};

// Do not edit below this line
module.exports = repeatString;
