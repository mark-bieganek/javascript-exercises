const removeFromArray = function(inputArray = [], ...args) {
    // Set sourceArray from the provided array.
    let sourceArray = Array.isArray(inputArray) ? inputArray: Array[''];   
    // Create a new array to hold the output.
    const outputArray = [];
    // Iterate the sourceArray, filtering for items to remove, and build an output array.
    sourceArray.forEach((item) => {
        // Filter for an item to remove.
        if (!args.includes(item)) {
            // Item not found in sourceArray, so add it to the output array.
            outputArray.push(item);
        };
    });
    // Output the result.
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
