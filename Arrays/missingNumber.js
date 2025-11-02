function missingNumber(nums) {
    let n = nums.length;
    let sumOfNums = n*(n+1)/2;
    let partialSum = 0;
    for(let i =0; i<n;i++){
        partialSum = partialSum + nums[i];
    }
    return sumOfNums - partialSum;
};