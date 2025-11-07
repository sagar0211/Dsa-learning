function insertionSort(arr) {
    let n = arr.length;

    for(let i =1;i<n;i++){
        let currValue = arr[i];
        let prev = i -1;

        while (arr[prev]>currValue && prev>=0){ 
            arr[prev+1] = arr[prev];
            prev --;
        }
        arr[prev+1] =currValue

    }
    
    return arr;
}
let array = [5, 8, 1, 0, 6, 2]
console.log(insertionSort(array))
// Time complexity = O(n²)
// Space complexity O(1)