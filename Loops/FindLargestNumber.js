/**
 * Finds and returns the largest number in an array.
 * @param {number[]} arr - The array of numbers to search.
 * @returns {number} The largest number in the array. Returns -Infinity if the array is empty.
 */
function findLargestNumber(arr){
    let largestNum = -Infinity
    for(let i = 0; i< arr.length;i++){
        if(arr[i]>largestNum){
            largestNum = arr[i]
        }
    }
    return largestNum
}