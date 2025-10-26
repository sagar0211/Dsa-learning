/**
 * Reverses the digits of an integer while preserving its sign.
 * The absolute value of the input is processed digit-by-digit to build the reversed number.
 * If a non-integer is provided, its fractional part is discarded (the algorithm effectively operates
 * on Math.floor(Math.abs(x))). This function performs an overflow check and returns 0 if the reversed
 * number exceeds 32-bit signed integer limits.
 *
 * @param {number} x - The number whose digits will be reversed. Typically an integer; negatives are allowed.
 * @returns {number} The value obtained by reversing the decimal digits of the input. The original sign is preserved,
 *                   or 0 if the result overflows a 32-bit signed integer.
 *
 * @example
 * reverse(123);   // returns 321
 * @example
 * reverse(-120);  // returns -21
 * @example
 * reverse(0);     // returns 0
 */
var reverse = function (x) {
    const originalX = x;
    let rev = 0;
    x = Math.abs(x);
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }

    const INT32_LIMIT = 2147483648;
    if (rev < -INT32_LIMIT || rev > INT32_LIMIT) return 0;

    return originalX < 0 ? -rev : rev;

};