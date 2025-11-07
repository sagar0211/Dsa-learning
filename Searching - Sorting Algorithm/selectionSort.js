function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        // let temp = arr[min];
        // arr[min] = arr[i];
        // arr[i] = temp;
        if (min != i) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
let array = [5, 8, 1, 0, 6, 2]
console.log(selectionSort(array))
// Time complexity = O(n²)
// Space complexity O(1)