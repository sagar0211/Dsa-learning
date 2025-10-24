function secondLargestNumber(arr) {
    let largestNumber = -Infinity
    let secondLargest = -Infinity;
    if(arr.length<2) return null
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNumber) {
            secondLargest = largestNumber;
            largestNumber = arr[i]
        } else if (arr[i] > secondLargest && arr[i] !== largestNumber) {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

let num = [3, 4, 2, 9, 32, 44,44]
console.log(secondLargestNumber(num))