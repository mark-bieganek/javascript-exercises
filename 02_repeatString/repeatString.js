const repeatString = function(string, count) {
    let output = '';
    // If count is not a negative number.
    if (count >= 0) {
        // Repeat the input string by (count) times.
        for (i = 1; i <= count; i++) {
            output += string;
        }
    } else {
        // Return 'ERROR' because count is a negative number.
        output = 'ERROR';
    };
    return output;
};

// Do not edit below this line
module.exports = repeatString;
