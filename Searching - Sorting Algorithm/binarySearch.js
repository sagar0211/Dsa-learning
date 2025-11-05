function binarySearch(nums, target) {
    let leftElement = 0;
    let rightElement = nums.length - 1
    while (rightElement >= leftElement) {
        let middleElement = Math.floor((leftElement + rightElement) / 2);
        if (target === nums[middleElement]) {
            return middleElement;
        } else if (target < nums[middleElement]) {
            rightElement = middleElement - 1;

        } else {
            leftElement = middleElement + 1
        }
    }
    return -1;
};