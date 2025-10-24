/**
 * Finds and returns the smallest number in an array.
 * @param {number[]} arr - The array of numbers to search through.
 * @returns {number} The smallest number found in the array.
 */
function findSmallestNumber(arr){
    let smallestNumber = Infinity
    for(let i = 0; i< arr.length;i++){
        if(arr[i] < smallestNumber){
            smallestNumber = arr[i]
        }
    }
    return smallestNumber
}
