/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const INT_MAX = 2147483647;      // 2^31 - 1
    const INT_MIN = -2147483648;     // -2^31

    // 1. Ignore leading whitespace
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 2. Check for sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = (s[i] === '-') ? -1 : 1;
        i++;
    }

    // 3. Conversion
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i] - '0';
        
        // Build the number
        result = result * 10 + digit;
        
        // 4. Rounding (Clamping)
        // We check early or at each step to handle potential overflows
        if (result * sign >= INT_MAX) return INT_MAX;
        if (result * sign <= INT_MIN) return INT_MIN;
        
        i++;
    }

    return result * sign;
};
