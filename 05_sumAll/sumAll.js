const sumAll = function(integer1, integer2) {
    let result = 0;
    // Convert arguments to integers.
    integer1 = toInteger(integer1);
    integer2 = toInteger(integer2);
    // Get the sum of every number between (and including) the inputs.
    for (i = integer1; i <= integer2; i++) {
        result += i;
    };
    // Return the result.
    return result;
};

const toInteger = function(input) {
    // Convert input to integer. If input is NaN, set assign 0.
    const result = isNaN(input) ? 0 : Math.floor(input);
    // Return the result.
    return result;
}

/*
Implement a function that takes 2 integers and returns the sum of every
number between(and including) them:

```javascript
sumAll(1, 4) // returns the sum of 1 + 2 + 3 + 4 which is 10
```

CONSTRAINTS:
1. Get the sum of two integers.
2. As integers, the numbers should not have a fractional component,
    and don't support decimal points.

ALGORITHM:
# Create a way to remember the result of our operations.
# Check the first two inputs.
    # If input is not a number, assign it a default value of 0.
    # Otherwise, convert input to integer.
    # Get the sum of every number between (and including) the inputs.
    # Update the result.
# Output the result.

PROGRAM:
# Build a re-usable function to convert inputs to integers.
    #Initialize a constant named toInteger with a function expression
        that has 1 parameter, `input` with a default value 0.
        # Within toInteger():
            # Convert the input to an integer.
                # Initialize a numeric variable named result and use a 
                ternary expression to check if input is a number
                    # If not a number, assign 0.
                    # If is a number, assign value using
                    Math.floor(input).
            # Return the result.
# Build a function that takes 2 integers and returns the sum of every
number between(and including) them:
    # Initialize an constant named sumAll with a function expression 
    that has two parameters `integer1`, `integer2` with default values 
    0.
    # Within sumAll()...
        # Create a numeric variable to hold the result with initial
        value 0.
        # Perform toInteger(integer) on integer1 and integer2.
        # Get the sum of every number between (and including) the inputs.
            # Loop from integer1 to integer2
                # Update result to result + incrementor.
    # Return result.


// BRAINSTORMING:
to support arguments provided out of order, we can sort the arguments[] array
and then call the arguments using argument[0], argument[1]

*/

// Do not edit below this line
module.exports = sumAll;
