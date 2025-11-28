function findMedianOfTwoSortedArray(nums1, nums2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++
        } else {
            merged.push(nums2[j]);
            j++
        }
    }

    while (i < nums1.length) {
        merged.push(nums1[i]);
        i++
    }
    while (j < nums2.length) {
        merged.push(nums2[j]);
        j++
    }

    let middle = merged.length / 2;

    if (middle % 2 === 0) {
        return ((merged[middle - 1] + merged[middle]) / 2)
    } else {
        return merged[middle]
    }
}

let nums1 = [1,2]
let nums2 = [3,4]

console.log(findMedianOfTwoSortedArray(nums1,nums2))