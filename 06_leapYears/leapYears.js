const leapYears = function() {

};

const toInteger = function(input) {
    // Convert input to integer. If input is NaN, set assign 0.
    const result = isNaN(input) ? 0 : Math.floor(input);
    // Return the result.
    return result;
}


/* 
Create a function that determines whether or not a given year is a 
leap year. Leap years are determined by the following rules:

CONSTRAINTS:
* Leap years:
    * are divisible by four (ie: 1984, 2004) with no remainder.
    * are not divisible by 100 (ie: 1800, 1900) with no remainder.
    * are not divisible by 400 (ie: 1600, 2000) with no remainder.

ALGORITHM:
* Create a way to record the result.
* Convert the given year to an integer.
* If all of these conditions are true, then record that the given year is
truly a leap year.
    * Given year divided by 4 has no remainder.
    * Given year divided by 100 has no remainder.
    * Given year divided by 400 has no remainder.
* Announce the result.

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
# Build a function that takes 1 integer and returns true if it's a
leap year:
    # Initialize a constant named leapYears with a function expression 
    that accepts an integer (year) argument from the user.
    # Within leapYears()...
        # Create a boolean variable to hold the result with initial
        value false.
        # Validate the provided argument.
            # If not a numeric data type, return `ERROR`.
        # Perform toInteger(argument) on the provided argument.
        # Validate the argument as a leap year.
            # Use a ternary expression with multiple conditions.
                # Provided argument divided by 4 has no remainder.
                # Provided argument divided by 100 has no remainder.
                # Provided argument divided by 400 has no remainder.
    # Return result.


EXPECTED OUTPUT:
```javascript
leapYears(2000) // is a leap year: returns true
leapYears(1985) // is not a leap year: returns false
```

// Do not edit below this line
module.exports = leapYears;

