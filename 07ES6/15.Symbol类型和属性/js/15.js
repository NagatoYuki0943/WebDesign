//一．Symbol 类型
//1. ES6 之前基础数据类型有：字符串、数值、布尔、对象、null 和 undefined；
//2. ES6 新增了一种叫做 Symbol 的基础数据类型，表示独一无二的值，类似 ID；
//3. 创建 Symobl 通过函数 Symbol()完整，可以传递参数，也可以为空；

//注意，不支持 new Symbol()
let s1 = Symbol();
console.log(s1); //Symbol() 值永远是symbol,每个值都不同
console.log(typeof s1); //symbol


//4. 在 Symbol()函数中参数，是对变量的描述，程序无法访问，只能日志打印；
Symbol('s!');


//5. 创建两个 Symobel 类型的变量，来验证他们独一无二的特性；
let s2 = Symbol();
let s3 = Symbol();
console.log(s2 === s3); //false


//6. Symobol 类型变量无法进行隐式转换，需要提前显示转换匹配的类型；
//Symbol 类型无法隐式转换，可显式
let s4 = Symbol();
console.log(s4.toString() + '变量'); //Symbol()变量
console.log(String(s4) + '变量'); //Symbol()变量
//转换为bool
console.log(!s4); //false
console.log('=========================');



//二．Symbol 属性
//1. Symbol 类型有哪些应用场景？解决了哪些问题？最常用的一种就是对象属性；
//2. 由于 Symbol 类型是独一无二的值，作为对象属性就具有唯一性不出现重名；
//3. 对于多模块、多人开发或者拼装属性名的情况下，有可能会出现属性名重复；
//4. 首先，先故意设置一个相同的对象属性名，看看会出现什么问题？

//重名的属性名不报错，被覆盖
let obj = {
    name: 'Mr.Lee',
    name: 'Mr.Wang' //Wang替换了Lee
};


console.log(obj); //Object { name: "Mr.Wang" }


//拼装的属性名，也被覆盖
let x = 'Name',
    y = 'Name';


let obj1 = {
    ['user' + x]: 'Mr.Lee',
    ['user' + y]: 'Mr.Wang' //Wang替换了Lee
};

console.log(obj1); //Object { userName: "Mr.Wang" }
console.log('=========================');



//5. 那么，Symbol 作为对象属性名，该如何使用呢？具体如下：
x = Symbol('x');
y = Symbol('y');
let obj2 = {
    [x]: 'MAX',
    [y]: 'MIN'
}
console.log(obj2); //Object { Symbol("x"): "MAX", Symbol("y"): "MIN" }
console.log(obj2[x]); //Object { Symbol("x"): "MAX", Symbol("y"): "MIN" }
console.log(obj2.x); //undefined
console.log(obj2[y]); //Object { Symbol("x"): "MAX", Symbol("y"): "MIN" }
console.log(obj2.y); //undefined
console.log('=========================');



//8. 方法名也可以使用 Symbol 类型；

let fn = Symbol('fn');
let obj3 = {
    [fn]() {
        return 'Symbol(fn)';
    }
};
console.log(obj3); //Object { Symbol("fn"): fn() }
console.log(obj3[fn]); //function fn()
