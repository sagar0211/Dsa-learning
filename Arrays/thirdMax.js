/**
 * @param {number[]} arr
 * @return {number}
 */
var thirdMax = function (arr) {
    let largestNumber = -Infinity;
    let secondLargest = -Infinity;
    let thirdLargest = - Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            thirdLargest = secondLargest;
            secondLargest = largestNumber;
            largestNumber = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largestNumber) {
            thirdLargest = secondLargest;
            secondLargest = arr[i]
        } else if (arr[i] > thirdLargest &&
            arr[i] !== largestNumber && arr[i] !== secondLargest) {
            thirdLargest = arr[i];
        }
    }
    return thirdLargest === -Infinity ? largestNumber : thirdLargest;
};