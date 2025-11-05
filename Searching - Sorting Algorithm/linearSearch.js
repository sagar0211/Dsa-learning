function linearSearch(arr,target){
    if(arr.length === 0) return []
    for(let i = 0;i<arr.length;i++){
        if(arr[i] == target){
            return i ;
        }
    }
    return - 1;
}
let target = 24;
let array = [1,3,67,8,6,0,3]
console.log(linearSearch(array,target))