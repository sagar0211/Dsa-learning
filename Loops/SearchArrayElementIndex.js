/**
 * Searches for a target element in an array and returns its index
 * @param {Array} arr - The array to search in
 * @param {*} target - The element to search for
 * @returns {number} The index of the target element if found, -1 otherwise
 */

function searchElement(arr,target){
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}