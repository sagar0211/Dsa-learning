/**
 * Determines whether a given number is a palindrome or not.
 * A palindrome is a number that reads the same forwards and backwards.
 * 
 * @param {number} x - The number to check for palindrome property
 * @returns {boolean} - Returns true if the number is a palindrome, false otherwise
 * 
 * @example
 * isPalindrome(121) // returns true
 * isPalindrome(123) // returns false
 * isPalindrome(-121) // returns false
 */
var isPalindrome = function (x) {
    const originalX = x;
    let rev = 0;

    if (x < 0) return false;

    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    // If the reversed number equals the original, it is a palindrome
    return rev === originalX;

};


