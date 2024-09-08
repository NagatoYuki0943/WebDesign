//1. let 没有变量提升,要在前面声明,后面调用
// {
//     var v1 = 10;
//     let c1 = 20;
// }
// //外部可以调用var,不能调用let,即使局部变量
// console.log(v1); //10
// console.log(c1); //Uncaught ReferenceError: count is not defined
// console.log("==========================");


//2. var 后面赋值可以,let不能这样
// console.log(v2); //undefined
// var v2;
// console.log(c2); //can't access lexical declaration 'c2' before initialization
// let c2;


//3. 如果在 let 声明前使用变量，这段区域被称为"临时死区(或暂时性死区)",死区就是错误；
// if (true) {
//     //这就是死区
//     v3 = 10;
//     console.log(v3); //can't access lexical declaration 'v3' before initialization
//     let v3;
// }


//4. 调用和使用typeof都会报错
// console.log(typeof(v4)); //can't access lexical declaration 'v4' before initialization
// let v4;


//5. let不能重复声明,一个是let,一个是var也不行
// var v5 = 10;
// var v5 = 20;
// console.log(v5); //20
// let c5 = 10;
// let c5 = 20; //redeclaration of let c5
// console.log(c5);


//6. 在不同区域重新赋值可以使用
let v6 = 11;

{
    let v6 = 20;
}
console.log(v6); //11


//7. let内部定义的变量在外部不能访问,var就可以
for (var i = 0; i < 10; i++) {
    console.log(i); // 0 ~ 9
}
console.log(i); //10
console.log("=======================");

for (let j = 0; j < 10; j++) {
    console.log(j); // 0 ~ 9
}
//console.log(j); //j is not defined
console.log("=======================");



//8. 如果在循环体内设置函数方法，体外输出 var 会得到不想要的值；
var list = [];
for (var k = 0; k < 10; k++) {
    //List[i]是函数的名字,后面加上()就可以调用函数
    list[k] = function() {
        console.log(k);
    }
}
//加上括号调用方法  原因var是全局的,k变为了10,外面无论调用谁,最后都是console.log(10)
list[3](); //10
list[5](); //10
console.log("=======================");


var list = [];
for (let m = 0; m < 10; m++) {
    //List[i]是函数的名字,后面加上()就可以调用函数
    list[m] = function() {
        console.log(m);
    }
}
//加上括号调用方法  改为let就可以正常使用了
list[3](); //3
list[5](); //5
console.log("=======================");


//9. const常量
//1. const 声明的作用是：创建一个只读的常量，一旦声明不可改变；
//2. 和 let 声明一样，const 声明的常量无法提升，也存在临时死区；
//3. 和 let 不同的是，const 声明后必须立刻赋值，否则会报错；

const PI = 3.14;
console.log(PI); //3.14
