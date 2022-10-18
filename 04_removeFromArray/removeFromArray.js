const removeFromArray = function(inputArray = [''], value1) {
    // Set sourceArray from the provided array.
    let sourceArray = Array.isArray(inputArray) ? inputArray: Array[''];
    
    // Remove provided values from the the input array.
    for (i = 0; i <= arguments.length; i++) {
        // Filter for this value and remove it.
        let output = sourceArray.filter(value => value !== arguments[i]);
        // Update the sourceArray.
        sourceArray = output;
    }
    // Output the result.
    return sourceArray;
};

// Do not edit below this line
module.exports = removeFromArray;
