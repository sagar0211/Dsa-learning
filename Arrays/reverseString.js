
/**
 * Reverses an array of characters in place by swapping elements from the ends toward the center.
 *
 * This function mutates the input array and also returns it for convenience.
 *
 * @param {string[]} s - Mutable array of single-character strings to be reversed in place.
 *                        Note: passing an immutable string will not work.
 * @returns {string[]} The same input array, reversed.
 *
 * @example
 * const arr = ['h', 'e', 'l', 'l', 'o'];
 * reverseString(arr); // arr === ['o', 'l', 'l', 'e', 'h']
 *
 * @time O(n) Time complexity, where n is s.length.
 * @space O(1) Additional space (in-place).
 */
function reverseString(s) {
    let length = s.length;
    let halfLength = Math.floor(length / 2);
    ;
    for (let i = 0; i < halfLength; i++) {
        let temp = s[i];
        s[i] = s[length - 1 - i];
        s[length - 1 - i] = temp;
    }
    return s;
}