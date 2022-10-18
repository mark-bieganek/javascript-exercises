const sumAll = function() {

};

const toInteger = function(input) {
    // Convert the input to an integer. If the input is not a number, set it to 0.
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
    # Add these inputs. Store the result.
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
                    # If is a number, assign value using Math.floor(input).
            # Return the result.


*/

// Do not edit below this line
module.exports = sumAll;
