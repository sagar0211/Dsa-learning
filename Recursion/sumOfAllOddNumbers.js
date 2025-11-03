let arr = [5, 27, 8, 0, 3, 4]
function sumOfArrayElements(n) {
    let isOdd = (arr[n] % 2) !== 0;
    if (n === 0) return isOdd ? arr[n] : 0
    return (isOdd ? arr[n] : 0) + sumOfArrayElements(n - 1)
}
console.log(sumOfArrayElements(arr.length - 1))