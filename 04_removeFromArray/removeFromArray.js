const removeFromArray = function(inputArray = [''], ...args) {
    // Set sourceArray from the provided array.
    let sourceArray = Array.isArray(inputArray) ? inputArray: Array[''];
    
    // Remove provided values from the the input array.
    for (i = 0; i <= args.length; i++) {
        // Filter for this value and remove it.
        let output = sourceArray.filter(value => value !== args[i]);
        // Update the sourceArray.
        sourceArray = output;
    }
    // Output the result.
    return sourceArray;
};

// Do not edit below this line
module.exports = removeFromArray;
