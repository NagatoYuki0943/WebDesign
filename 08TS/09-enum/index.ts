// 枚举（ enum ）可以定义⼀组命名常量，它能增强代码的可读性，也让代码更好维护。
// 如下代码的功能是：根据调⽤ walk 时传⼊的不同参数，执⾏不同的逻辑，存在的问题是调⽤ walk 时传参时没有任何提示，
// 编码者很容易写错字符串内容；并且⽤于判断逻辑的 up 、 dow n 、 left 、 right 是连续且相关的⼀组值，那此时就特别适合使⽤ 枚举（ enum ）。

function walk(str: string) {
    if (str === 'up') {
        console.log("向【上】⾛");
    } else if (str === 'down') {
        console.log("向【下】⾛");
    } else if (str === 'left') {
        console.log("向【左】⾛");
    } else if (str === 'right') {
        console.log("向【右】⾛");
    } else {
        console.log("未知⽅向");
    }
}

walk('up')
walk('down')
walk('left')
walk('right')


// 1. 数字枚举
// 数字枚举⼀种最常⻅的枚举类型，其成员的值会⾃动递增，且数字枚举还具备反向映射的 特点，在下⾯代码的打印中，不难发现：可以通过值来获取对应的枚举成员名称
// 定义⼀个描述【上下左右】⽅向的枚举Direction
enum Direction {
    Up,
    Down,
    Left,
    Right
}

console.log(Direction) // 打印Direction会看到如下内容
/*
{
    0:'Up',
    1:'Down',
    2:'Left',
    3:'Right',
    Up:0,
    Down:1,
    Left:2,
    Right:3
}
*/

// 反向映射
console.log(Direction.Up) // 输出: 0
console.log(Direction[0]) // 输出: "Up"

// 此⾏代码报错，枚举中的属性是只读的
// Direction.Up = 'shang'

// 也可以指定枚举成员的初始值，其后的成员值会⾃动递增。
enum Direction1 {
    Up = 6,
    Down,
    Left = 10,
    Right
}

console.log(Direction1.Up); // 输出: 6
console.log(Direction1.Down); // 输出: 7
console.log(Direction1.Left); // 输出: 10
console.log(Direction1.Right); // 输出: 11

// 使⽤数字枚举完成刚才 walk 函数中的逻辑，此时我们发现：代码更加直观易读，⽽且类型安全，同时也更易于维护。
enum Direction2 {
    Up,
    Down,
    Left,
    Right,
}

function walk1(n: Direction2) {
    if (n === Direction2.Up) {
        console.log("向【上】⾛")
    } else if (n === Direction2.Down) {
        console.log("向【下】⾛")
    } else if (n === Direction2.Left) {
        console.log("向【左】⾛")
    } else if (n === Direction2.Right) {
        console.log("向【右】⾛")
    } else {
        console.log("未知⽅向")
    }
}

walk1(Direction2.Up)
walk1(Direction2.Down)



// 2. 字符串枚举
// 枚举成员的值是字符串
enum Direction3 {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

let dir: Direction3 = Direction3.Up;
console.log(dir) // 输出: "up"



// 3. 常量枚举
// 官⽅描述：常量枚举是⼀种特殊枚举类型，它使⽤ const 关键字定义，在编译时会被内联，避免⽣成⼀些额外的代码。
// 何为编译时内联？ 所谓“内联”其实就是 TypeScript 在编译时，会将枚举成员引⽤替换为它们的实际值， ⽽不是⽣成额外的枚举对象。这可以减少⽣成的 JavaScript 代码量，并提⾼运⾏时性能。
// 使⽤普通枚举的 TypeScript 代码如下：
enum Directions4 {
    Up,
    Down,
    Left,
    Right
}

let x = Directions4.Up
// 编译后⽣成的 JavaScript 代码量较⼤：
// "use strict";
// var Directions;

// (function (Directions) {
//     Directions[Directions["Up"] = 0] = "Up";
//     Directions[Directions["Down"] = 1] = "Down";
//     Directions[Directions["Left"] = 2] = "Left";
//     Directions[Directions["Right"] = 3] = "Right";
// })(Directions || (Directions = {}));

// let x = Directions.Up;

// 使⽤常量枚举的 TypeScript 代码如下：
const enum Directions5 {
    Up,
    Down,
    Left,
    Right
}
let y = Directions5.Up

// 编译后⽣成的 JavaScript 代码量较⼩：
// "use strict";
// let y = 0 /* Directions.Up */;
