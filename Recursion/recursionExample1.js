function fun(num){
    if(num == 0) return;
    console.log(num);
    num = num -1;
    fun(num)
}
let a = 5;
fun(a)


function print(n) {
    if (n < 1) return;
    console.log(n);
    print(--n)
}
let b = 6;
print(b)

function print1toN(n) {
    if (n > c) return;
    console.log(n);
    print1toN(++n)
}
let c = 10;
print1toN(1)