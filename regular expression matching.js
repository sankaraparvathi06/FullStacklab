/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const memo = new Map();

    const dfs = (i, j) => {
        const key = `${i},${j}`;
        if (memo.has(key)) return memo.get(key);

        // Base case: if we reached the end of the pattern
        if (j >= p.length) {
            return i >= s.length;
        }

        // Check if the current characters match (or if pattern has '.')
        const match = i < s.length && (s[i] === p[j] || p[j] === '.');

        let result;
        // If the next character in the pattern is '*'
        if (j + 1 < p.length && p[j + 1] === '*') {
            result = (dfs(i, j + 2)) ||      // Choice 1: Use '*' as zero (skip it)
                     (match && dfs(i + 1, j)); // Choice 2: Use '*' to match current char and stay
        } else {
            // Standard matching (no '*')
            result = match && dfs(i + 1, j + 1);
        }

        memo.set(key, result);
        return result;
    };

    return dfs(0, 0);
};
