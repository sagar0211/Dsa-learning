let arr = [5,27,8,0,3,4]
function sumOfArrayElements(n){
    if(n === 0) return arr[0];
    return arr[n] + sumOfArrayElements(n-1)
}
console.log(sumOfArrayElements(arr.length - 1))