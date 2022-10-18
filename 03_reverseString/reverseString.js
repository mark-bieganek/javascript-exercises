// This function takes an input string and returns a reversed string.
const reverseString = function(string) {
    let output = '';
    // Iterate in reverse through the string.
    for (i = (string.length -1); i >= 0; i--) {
        // Add this letter to the output string.
        output += string.at(i);
    };
    return output;
};

// Do not edit below this line
module.exports = reverseString;
