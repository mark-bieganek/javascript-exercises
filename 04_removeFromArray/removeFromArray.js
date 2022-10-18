const removeFromArray = function(inputArray = [''], value1) {
    // Set sourceArray from the provided argument.
    let sourceArray = Array.isArray(inputArray) ? inputArray: Array[''];
    
    // Remove the requested element from the array.
    //const output = sourceArray.filter(value => value !== arguments[1]);

    // Create a list of values we will 
    
    for (argument = 0; argument <= arguments.length; argument++) {
        let argument = arguments[1];
        let output = sourceArray.filter(value => value !== arguments[1]);
        sourceArray = output;
    }
    // Output the result.
    return sourceArray;
};

// Do not edit below this line
module.exports = removeFromArray;
