/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // Base case: if numRows is 1 or string is shorter than rows, no zigzag happens
    if (numRows === 1 || s.length <= numRows) return s;

    // Create an array of strings for each row
    const rows = new Array(Math.min(numRows, s.length)).fill("");
    let currentRow = 0;
    let goingDown = false;

    for (const char of s) {
        rows[currentRow] += char;

        // If we hit the top or bottom row, reverse the direction
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row based on direction
        currentRow += goingDown ? 1 : -1;
    }

    // Join all rows together to get the final string
    return rows.join("");
};
