//一．箭头扩展
//1. 箭头也支持一些内置函数的使用，比如 sort()排序；
let arr1 = [3, 1, 4, 0].sort((a, b) => a - b);
console.log(arr1); //Array(4) [ 0, 1, 3, 4 ]

let arr2 = [3, 1, 4, 0].sort((a, b) => b - a);
console.log(arr2); //Array(4) [ 4, 3, 1, 0 ]



//2. 箭头函数不支持 arguments 绑定，请直接使用...other 模式(rest 运算符)；
//下面这种方法不支持
// let fn = (x, y) => {
//     return arguments[0] + arguments[1];
// }

//不确定参数使用 ...
let fn = (...other) => { //other以数组形式保存参数
    return other[0] + other[1];
}
console.log(fn(1, 44)); //45



//3. 箭头函数和普通函数一样，都可以被 typeof 和 instanceof；
console.log(typeof fn); //function
console.log(fn instanceof Function); //true



//二．尾调用优化
//1. 什么是尾调用？即在一个函数的最后可执行的一步调用了其它函数；
function go(x) {
    return x + 20;
}
let fn1 = function(x) {
    x++;
    return go(x);
}

console.log(fn1(1)); //22 = 1 + 1 + 20


//使用严格模式
'use strict';

function fn3(x) {
    if (x <= 1) {
        return 1;
    }
    return fn(x - 1);
}
fn3(10);
