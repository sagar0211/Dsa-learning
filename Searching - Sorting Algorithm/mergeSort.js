function merge(left, right) {
    let resultArray = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            resultArray.push(left[i])
            i++
        } else {
            resultArray.push(right[j])
            j++
        }

    }
    return [...resultArray, ...left.slice(i), ...right.slice(j)];
}

function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right)
}

