"use strict";
// object （⼩写）
// object （⼩写）的含义是：所有⾮原始类型，可存储：对象、函数、数组等，由于限制 的范围⽐较宽泛，在实际开发中使⽤的相对较少。
let a; //a的值可以是任何【⾮原始类型】，包括：对象、函数、数组等
// 以下代码，是将【⾮原始类型】赋给a，所以均符合要求
a = {};
console.log(a);
a = { name: '张三' };
console.log(a);
a = [1, 3, 5, 7, 9];
console.log(a);
a = function () { };
console.log(a);
a = new String('123');
console.log(a);
class Person {
}
a = new Person();
console.log(a);
// 以下代码，是将【原始类型】赋给a，有警告
// a = 1 // 警告：不能将类型“number”分配给类型“object”
// a = true // 警告：不能将类型“boolean”分配给类型“object”
// a = '你好' // 警告：不能将类型“string”分配给类型“object”
// a = null // 警告：不能将类型“null”分配给类型“object”
// a = undefined // 警告：不能将类型“undefined”分配给类型“object”
// Object（⼤写）
// - 官⽅描述：所有可以调⽤ Object ⽅法的类型。
// - 简单记忆：除了 undefined 和 null 的任何值。
// - 由于限制的范围实在太⼤了！所以实际开发中使⽤频率极低。
let b;
b = {};
console.log(b);
b = { name: '张三' };
console.log(b);
b = [1, 3, 5, 7, 9];
console.log(b);
b = function () { };
console.log(b);
b = new String('123');
console.log(b);
b = new Person();
console.log(b);
b = 1;
b = true;
b = '你好';
// b = null // 警告：不能将类型“null”分配给类型“object”
// b = undefined // 警告：不能将类型“undefined”分配给类型“object”
// **声明对象类型**
// 1. 实际开发中，限制⼀般对象，通常使⽤以下形式
// 限制person1对象必须有name属性，age为可选属性
let person1;
// 含义同上，也能⽤分号做分隔
let person2;
// 含义同上，也能⽤换⾏做分隔
let person3;
// 如下赋值均可以
person1 = { name: '李四', age: 18 };
person2 = { name: '张三' };
person3 = { name: '王五' };
console.log(person1);
console.log(person2);
console.log(person3);
// 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
//person3 = {name: '王五', gender: '男'}
// 2. 索引签名： 允许定义对象可以具有任意数量的属性，这些属性的键和类型是可变的， 常⽤于：描述类型不确定的属性，（具有动态属性的对象）。
// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person;
// 赋值合法
person = {
    name: '赵六',
    age: 18,
    gender: '男',
    address: '北京市'
};
console.log(person);
// **声明函数类型**
// (参数1: 类型, 参数2: 类型, ...参数n: 类型) => 返回值类型
// 形参的名字可以和实参的名字不一致，但类型必须保持一致
let count;
count = function (x, y) {
    return x + y;
};
// 声明数组类型
let arr1;
let arr2;
arr1 = ['a', 'b', 'c'];
arr2 = ['hello', 'world'];
