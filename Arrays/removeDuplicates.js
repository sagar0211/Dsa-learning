/**
 * Removes duplicates from a sorted array in-place and returns the new length.
 *
 * The function assumes `nums` is sorted in non-decreasing (ascending) order.
 * It compacts the array so that the first returned_length elements are the
 * unique values from the original array in their original order. The array is
 * modified in-place; elements beyond the returned length are left as-is/overwritten.
 *
 * @param {number[]} nums - Sorted array of numbers (non-decreasing) to deduplicate.
 * @returns {number} The number of unique elements remaining after deduplication (new length).
 *
 * @example
 * // nums becomes [1,2,3,...] and returns 3
 * const len = removeDuplicates([1,1,2,3,3]);
 *
 * @notes
 * - Time complexity: O(n), where n = nums.length.
 * - Space complexity: O(1) extra space.
 * - If `nums` is empty, the function returns 0.
 */
function removeDuplicates(nums) {
    if (!Array.isArray(nums) || nums.length === 0) return 0;
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            x = x + 1;
            nums[x] = nums[i]
        }
    }
    return x + 1;
}