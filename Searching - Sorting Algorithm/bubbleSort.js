function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < (n - 1); i++) {
        let isSwapped = false;
        for (let j = 0; j < (n - 1 - i); j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped) break;
    }
    return arr;
}
let array = [5, 2, 3, 1, 9, 15, 9, 3, 7, 10]
console.log(bubbleSort(array))
// Time complexity = O(n²)
// Space complexity O(1)