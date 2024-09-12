"use strict";
// 元组 (Tuple) 是⼀种特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。
// 元组⽤于精确描述⼀组值的类型， ? 表示可选元素。
// 第⼀个元素必须是 string 类型，第⼆个元素必须是 number 类型。
let arr1;
// 可以赋值
arr1 = ['hello', 123];
// 不可以赋值，arr1声明时是两个元素，赋值的是三个
// arr1 = ['hello', 123, false]
console.log(arr1);
// 第⼀个元素必须是 number 类型，第⼆个元素是可选的，如果存在，必须是 boolean 类型。
let arr2;
arr2 = [100, false];
console.log(arr2);
arr2 = [200];
console.log(arr2);
// 第⼀个元素必须是 number 类型，后⾯的元素可以是任意数量的 string 类型
let arr3;
arr3 = [100, 'hello', 'world'];
console.log(arr3);
arr3 = [100];
console.log(arr3);
