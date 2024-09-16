// 一．箭头扩展
// 1. 箭头也支持一些内置函数的使用，比如 sort()排序；
console.log("1. 箭头也支持一些内置函数的使用，比如 sort()排序")
let arr1 = [3, 1, 4, 0].sort((a, b) => a - b);
console.log(arr1); // Array(4) [ 0, 1, 3, 4 ]

let arr2 = [3, 1, 4, 0].sort((a, b) => b - a);
console.log(arr2); // Array(4) [ 4, 3, 1, 0 ]



// 2. 箭头函数不支持 arguments 绑定，请直接使用...other 模式(rest 运算符)；
// 下面这种方法不支持
//  let fn = (x, y) => {
//      return arguments[0] + arguments[1];
//  }

// 不确定参数使用 ...
console.log("2. 箭头函数不支持 arguments 绑定，请直接使用...other 模式(rest 运算符)")
let fn = (...other) => { // other以数组形式保存参数
    return other[0] + other[1];
}
console.log(fn(1, 44)); // 45



// 3. 箭头函数和普通函数一样，都可以被 typeof 和 instanceof；
console.log("3. 箭头函数和普通函数一样，都可以被 typeof 和 instanceof")
console.log(typeof fn); // function
console.log(fn instanceof Function); // true



// 二．尾调用优化
// 1. 尾调用: 即在一个函数的最后可执行的一步调用了其它函数；
console.log("1. 尾调用: 即在一个函数的最后可执行的一步调用了其它函数")
function go(x) {
    return x + 20;
}
let fn1 = function(x) {
    x++;
    return go(x);
}

console.log(fn1(1)); // 22 = 1 + 1 + 20


// ？什么又是尾调用优化？为何要优化？因为：每次尾调用都会创建栈帧；如果尾调次数过多，而内存中的调用栈越来越大，可能就会出现程序问题；
// 尤其是在递归函数的问题上，尾调用优化适合在这种场景中使用；
// 首先要说明，尾调用优化必须是在 ES6 的严格模式下，'use strict';
// 严格模式，可以设置为全局作用域，也可以在函数体内有效；
// 严格模式对变量、对象和函数做了一些代码规范等等，具体规范可以搜索；
// 而对于尾调用，必须严格按照三个规则，才能执行严格模式下的优化，如下：

// (1) 尾调用必须 return 返回          // go(x); 错误
// (2) 尾调用 return 返回不得含其它操作     // return go(x) + 1; 错误
// (3) 尾调用 return 返回的不是函数，而是函数赋值的变量，不在尾部


// 使用严格模式
'use strict';

function fn3(x) {
    if (x <= 1) {
        return 1;
    }
    return fn3(x - 1);
}
console.log(fn3(10)); // 1
