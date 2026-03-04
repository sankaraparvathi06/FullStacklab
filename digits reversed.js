/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const LIMIT = Math.pow(2, 31);
    let result = 0;
    let negative = x < 0;
    
    // Work with the absolute value to simplify modulo logic
    let num = Math.abs(x);

    while (num > 0) {
        // Extract the last digit
        const digit = num % 10;
        // Shift existing result left and add new digit
        result = (result * 10) + digit;
        // Remove the last digit from num
        num = Math.floor(num / 10);
    }

    // Restore sign
    if (negative) result = -result;

    // Check for 32-bit signed integer overflow
    if (result < -LIMIT || result > LIMIT - 1) {
        return 0;
    }

    return result;
};
