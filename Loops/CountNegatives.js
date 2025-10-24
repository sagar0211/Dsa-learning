/**
 * Counts the number of negative numbers in an array.
 * @param {number[]} arr - The array of numbers to check.
 * @returns {number} The count of negative numbers in the array.
 */
function countNegatives(arr){
    let count = 0 ;
    for(let i =0; i< arr.length;i++){
        if(arr[i] < 0){
            count++;
        }
    }
    return count;
}