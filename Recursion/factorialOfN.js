// function factorialOfN(n){
//     if(n == 1) return 1;
//     return n * factorialOfN(n-1)
// }


var factorialOfN = function (n) {
    let isOdd = n % 2 != 0;
    if (n === 1) {
        return true;
    } else if (n < 1 || isOdd) return false
    return factorialOfN(n / 2)
};

console.log(factorialOfN(6))