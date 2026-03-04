/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Special cases:
    // 1. Negative numbers are not palindromes (due to the '-' sign)
    // 2. Numbers ending in 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let revertedNumber = 0;
    
    // Reverse only the second half of the number
    // When x becomes less than revertedNumber, we've reached the middle
    while (x > revertedNumber) {
        revertedNumber = (revertedNumber * 10) + (x % 10);
        x = Math.floor(x / 10);
    }

    // For even length: x === revertedNumber (e.g., 1221 -> x=12, rev=12)
    // For odd length: x === Math.floor(revertedNumber / 10) (e.g., 121 -> x=1, rev=12)
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
};
