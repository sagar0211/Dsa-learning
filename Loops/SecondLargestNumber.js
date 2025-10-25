
/**
 * Returns the second largest distinct numeric value from an array.
 * Iterates the array once, tracking the largest and the second largest values.
 * If the array has fewer than two elements, the function returns null.
 * If no distinct second largest value is found (for example, all elements are equal),
 * the function will return -Infinity (the initial sentinel value used by the implementation).
 *
 * @param {number[]} arr - An array of numbers to search.
 * @returns {number|null} The second largest distinct number, or null if the array has fewer than two elements.
 *
 * @example
 * // returns 4
 * secondLargestNumber([1, 4, 2, 3, 4]);
 *
 * @example
 * // returns null (array too short)
 * secondLargestNumber([5]);
 *
 * @example
 * // returns -Infinity (no distinct second largest)
 * secondLargestNumber([2, 2, 2]);
 *
 */
function secondLargestNumber(arr) {
    let largestNumber = -Infinity
    let secondLargest = -Infinity;
    if(arr.length<2) return null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            secondLargest = largestNumber;
            largestNumber = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largestNumber) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}