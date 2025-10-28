
/**
 * Removes all occurrences of a specified value from an array in-place and returns the new length.
 * @param {number[]} nums - The input array of numbers
 * @param {number} val - The value to remove from the array
 * @returns {number} The new length of the array after removing specified value
 * 
 * @example
 * const nums = [3,2,2,3];
 * const val = 3;
 * removeElement(nums, val); // returns 2, nums = [2,2,_,_]
 */
var removeElement = function(nums, val) {
    if (!Array.isArray(nums) || nums.length === 0) return 0;
    let x = 0;
    for(let i = 0;i< nums.length ;i++){
        if(nums[i] !== val){
            nums[x] = nums[i]
            x = x+1;
        }
    }
    return x
};