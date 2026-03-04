/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        // Case 1: Odd length palindrome (e.g., "aba", centre is 'b')
        let len1 = expandAroundCenter(s, i, i);
        // Case 2: Even length palindrome (e.g., "bb", centre is between 'b's)
        let len2 = expandAroundCenter(s, i, i + 1);
        
        let len = Math.max(len1, len2);
        
        // If we found a longer palindrome, update the pointers
        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
};

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Returns the length of the palindrome found
    return right - left - 1;
}
