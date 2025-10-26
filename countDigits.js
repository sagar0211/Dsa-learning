/**
 * Counts the number of digits in a given number.
 * @param {number} num - The input number to count digits from.
 * @returns {number} The count of digits in the input number.
 * @example
 * countDigits(12345) // returns 5
 * countDigits(0)     // returns 1
 * countDigits(-123)  // returns 3
 */
function countDigits(num) {
    let count = 0;
    // Zero has one digit, so return 1
    if (num === 0) return 1;
    num = Math.abs(num);
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}