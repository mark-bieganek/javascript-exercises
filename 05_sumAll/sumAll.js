const sumAll = function(...args) {
    let result = 0;
    // Perform input validation and conversion.
    for (let arg of args) {
        // Convert arguments to integers.
        arg = toInteger(arg);
        // Disallow negative numbers.
        if (arg < 0) {
            return 'ERROR';
        }
    };
    // Ensure args are in ascending order by sorting them.
    args.sort();
    // Get the sum of every number between (and including) the inputs.
    for (i = args[0]; i <= args[1]; i++) {
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
3. Negative integers are not permitted.
4. The integers can be provided in any order.

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
    that accepts arguments from the user.
    # Within sumAll()...
        # Create a numeric variable to hold the result with initial
        value 0.
        # Perform toInteger(integer) the provided arguments.
        # To ensure arguments are in ascending order, sort the arguments.
        # Get the sum of every number between (and including) the inputs.
            # Loop from argument1 to argument2
                # Update result to result + incrementor.
    # Return result.


// BRAINSTORMING:


*/

// Do not edit below this line
module.exports = sumAll;
