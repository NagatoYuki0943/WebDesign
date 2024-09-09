# 编译 TypeScript

浏览器不能直接运⾏ TypeScript 代码，需要编译为 JavaScript 再交由浏览器解析器执⾏。

## 1.命令⾏编译

要把 .ts ⽂件编译为 .js ⽂件，需要配置 TypeScript 的编译环境，步骤如下：

第⼀步：创建⼀个 demo.ts ⽂件

第⼆步：全局安装 TypeScript

```sh
npm i typescript -g
```

第三步：使⽤命令编译 .ts ⽂件

```sh
tsc demo.ts
```

## 2. ⾃动化编译

第⼀步：创建 TypeScript 编译控制⽂件

```sh
tsc --init
```

1. ⼯程中会⽣成⼀个 tsconfig.json 配置⽂件，其中包含着很多编译时的配置。
2. 观察发现，默认编译的 JS 版本是 ES7 ，我们可以⼿动调整为其他版本。

第⼆步：监视⽬录中的 .ts ⽂件变化

```sh
tsc --watch 或 tsc -w
```

第三步：⼩优化，当编译出错时不⽣成 .js ⽂件

```sh
tsc --noEmitOnError --watch
```

备注：当然也可以修改 tsconfig.json 中的 noEmitOnError 配置

# 类型声明

使⽤ : 来对变量或函数形参，进⾏类型声明：

```ts
let a: string //变量a只能存储字符串
let b: number //变量b只能存储数值
let c: boolean //变量c只能存储布尔值

a = 'hello'
// a = 100 //警告：不能将类型“number”分配给类型“string”

b = 666
//b = '你好'//警告：不能将类型“string”分配给类型“number”

c = true
// c = 666 //警告：不能将类型“number”分配给类型“boolean”

// 参数x必须是数字，参数y也必须是数字，函数返回值也必须是数字
function count(x: number, y: number) : number{
    return x + y
}
let ret: number = count(100, 200)
console.log(ret) // 300
// demo(100, '200') //警告：类型“string”的参数不能赋给类型“number”的参数
// demo(100, 200, 300) //警告：应有 2 个参数，但获得 3 个
// demo(100) //警告：应有 2 个参数，但获得 1 个
```

在 : 后也可以写字⾯量类型，不过实际开发中⽤的不多。

```ts
let a: '你好' //a的值只能为字符串“你好”
let b: 100 //b的值只能为数字100
a = '欢迎'//警告：不能将类型“"欢迎"”分配给类型“"你好"”
b = 200 //警告：不能将类型“200”分配给类型“100”
```

# 类型推断

TS 会根据我们的代码，进⾏类型推导，例如下⾯代码中的变量 d ，只能存储数字

```ts
let d = -99 //TypeScript会推断出变量d的类型是数字
d = false //警告：不能将类型“boolean”分配给类型“number”
```

但要注意，类型推断不是万能的，⾯对复杂类型时推断容易出问题，所以尽量还是明确的编写类 型声明！

# 类型总览

JavaScript 中的数据类型

① string

② number

③ boolean

④ null

⑤ undefined

⑥ bigint

⑦ symbol

⑧ object

备注：其中 object 包含： Array 、 Function 、 Date 、 Error 等......



TypeScript 中的数据类型

1. 上述所有 JavaScript 类型

2. 六个新类型：

   ① any

   ② unknown

   ③ never

   ④ void

   ⑤ tuple

   ⑥ enum

3. 两个⽤于⾃定义类型的⽅式：

   ① type

   ② interface

注意点！

在 JavaScript 中的这些内置构造函数： Number 、 String 、 Boolean ，⽤于 创建对应的包装对象， 在⽇常开发时很少使⽤，在 TypeScript 中也是同理，所以 在 TypeScript 中进⾏类型声明时，通常都是⽤⼩写的 number 、 string 、 bo olean

```ts
let str1: string
str1 = 'hello'
str1 = new String('hello') //报错
let str2: String
str2 = 'hello'
str2 = new String('hello')
console.log(typeof str1)
console.log(typeof str2)
```

1. 原始类型 VS 包装对象

   - 原始类型：如 number 、 string 、 boolean ，在 JavaScript 中是简单数据 类型，它们在内存中占⽤空间少，处理速度快。 

   - 包装对象：如 Number 对象、 String 对象、 Boolean 对象，是复杂类型，在 内存中占⽤更多空间，在⽇常开发时很少由开发⼈员⾃⼰创建包装对象。

2. ⾃动装箱：JavaScript 在必要时会⾃动将原始类型包装成对象，以便调⽤⽅法或访 问属性

```ts
// 原始类型字符串
let str = 'hello';
// 当访问str.length时，JavaScript引擎做了以下⼯作：
let size = (function() {
	// 1. ⾃动装箱：创建⼀个临时的String对象包装原始字符串
	let tempStringObject = new String(str);
 	// 2. 访问String对象的length属性
 	let lengthValue = tempStringObject.length;
 	// 3. 销毁临时对象，返回⻓度值
 	// （JavaScript引擎⾃动处理对象销毁，开发者⽆感知）
 	return lengthValue;
})();
console.log(size); // 输出: 5
```

# 常⽤类型与语法

## 1. any

> any 的含义是：任意类型，⼀旦将变量类型限制为 any ，那就意味着放弃了对该变量的类型 检查。

```ts
// 明确的表示a的类型是 any —— 【显式的any】
let a: any
// 以下对a的赋值，均⽆警告
a = 100
a = '你好'
a = false
// 没有明确的表示b的类型是any，但TS主动推断出来b是any —— 隐式的any
let b
//以下对b的赋值，均⽆警告
b = 100
b = '你好'
b = false
```

> **注意点： any 类型的变量，可以赋值给任意类型的变量**

```ts
/* 注意点：any类型的变量，可以赋值给任意类型的变量 */
let c:any
c = 9
let x: string
x = c // ⽆警ts
```

## 2. unknown

> unknown 的含义是：未知类型，适⽤于：起初不确定数据的具体类型，要后期才能确定

1.  unknown 可以理解为⼀个类型安全的 any 。

```ts
// 设置a的类型为unknown
let a: unknown
//以下对a的赋值，均符合规范
a = 100
a = false
a = '你好'
// 设置x的数据类型为string
let x: string
x = a //警告：不能将类型“unknown”分配给类型“string”
```

2. unknown 会强制开发者在使⽤之前进⾏类型检查，从⽽提供更强的类型安全性。 

```ts
// 设置a的类型为unknown
let a: unknown
a = 'hello'
//第⼀种⽅式：加类型判断
if(typeof a === 'string'){
    x = a
 	console.log(x)
}
//第⼆种⽅式：加断⾔
x = a as string
//第三种⽅式：加断⾔
x = <string>a
```

3. 读取 any 类型数据的任何属性都不会报错，⽽ unknown 正好与之相反。

## 3. never

> never 的含义是：任何值都不是，即：不能有值，例如 undefined 、 nul l 、 '' 、 0 都不⾏！

1. ⼏乎不⽤ never 去直接限制变量，因为没有意义，例如：

```ts
/* 指定a的类型为never，那就意味着a以后不能存任何的数据了 */
let a: never
// 以下对a的所有赋值都会有警告
a = 1
a = true
a = undefined
a = null
```

2.  never ⼀般是 TypeScript 主动推断出来的，例如：

```ts
// 指定a的类型为string
let a: string

// 给a设置⼀个值
a = 'hello'

if (typeof a === 'string') {
    console.log(a.toUpperCase())
} else {
    console.log(a) // TypeScript会推断出此处的a是never，因为没有任何⼀个值符合此处的逻辑
}
```

## 4. void

> void 的含义是空，即：函数不返回任何值，调⽤者也不应依赖其返回值进⾏任何操作！

1. void 通常⽤于函数返回值声明

```ts
function logMessage(msg:string):void{
    console.log(msg)
}
logMessage('你好')5
```

> **注意：编码者没有编写 return 指定函数返回值，所以 logMessage 函数是没有显式 返回值的，但会有⼀个隐式返回值 ，是 undefined ，虽然函数返回类型为 void ，但 也是可以接受 undefined 的，简单记： undefined 是 void 可以接受的⼀种“空”。**

2. 以下写法均符合规范

```ts
// ⽆警告
function logMessage(msg:string):void{
    console.log(msg)
}
// ⽆警告
function logMessage(msg:string):void{
    console.log(msg)
    return;
}
// ⽆警告
function logMessage(msg:string):void{
 console.log(msg)
 return undefined
}
```

3. 那限制函数返回值时，是不是 undefined 和 void 就没区别呢？—— 有区别。因为还有 这句话 ：【返回值类型为 void 的函数，调⽤者不应依赖其返回值进⾏任何操作！】对⽐下 ⾯两段代码：

```ts
function logMessage(msg:string):void{
    console.log(msg)
}
let result = logMessage('你好')
if(result){ // 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
    console.log('logMessage有返回值')
}
```

```ts
function logMessage(msg:string):undefined{
    console.log(msg)
}
let result = logMessage('你好')
if(result){ // 此⾏⽆警告
    console.log('logMessage有返回值')
}
```

理解

- void 与 undefined void 是⼀个⼴泛的概念，⽤来表达“空”，⽽ undefined 则是这种“空”的具体 实现。
- 因此可以说 undefined 是 void 能接受的⼀种“空”的状态。
- 也可以理解为： void 包含 undefined ，但 void 所表达的语义超越了 undefined ， void 是⼀种意图上的约定，⽽不仅仅是特定值的限制。

总结：

如果⼀个函数返回类型为 void ，那么：

1. 从语法上讲：函数是可以返回 undefined 的，⾄于显式返回，还是隐式返回，这⽆所谓！
2. 从语义上讲：函数调⽤者不应关⼼函数返回的值，也不应依赖返回值进⾏任何操作！ 即使我们知道它返回了 undefined 。

## 5. object

> 关于 object 与 Object ，直接说结论：实际开发中⽤的相对较少，因为范围太⼤了。

object（⼩写）

object （⼩写）的含义是：所有⾮原始类型，可存储：对象、函数、数组等，由于限制 的范围⽐较宽泛，在实际开发中使⽤的相对较少。

```ts
let a:object //a的值可以是任何【⾮原始类型】，包括：对象、函数、数组等
// 以下代码，是将【⾮原始类型】赋给a，所以均符合要求
a = {}
a = {name:'张三'}
a = [1,3,5,7,9]
a = function(){}
a = new String('123')
class Person {}
a = new Person()

// 以下代码，是将【原始类型】赋给a，有警告
a = 1 // 警告：不能将类型“number”分配给类型“object”
a = true // 警告：不能将类型“boolean”分配给类型“object”
a = '你好' // 警告：不能将类型“string”分配给类型“object” 
a = null // 警告：不能将类型“null”分配给类型“object”
a = undefined // 警告：不能将类型“undefined”分配给类型“object”
```

Object（⼤写）

- 官⽅描述：所有可以调⽤ Object ⽅法的类型。
- 简单记忆：除了 undefined 和 null 的任何值。
- 由于限制的范围实在太⼤了！所以实际开发中使⽤频率极低。

声明对象类型

1. 实际开发中，限制⼀般对象，通常使⽤以下形式

```ts
// 限制person1对象必须有name属性，age为可选属性
let person1: { name: string, age?: number }

// 含义同上，也能⽤分号做分隔
let person2: { name: string; age?: number }

// 含义同上，也能⽤换⾏做分隔
let person3: {
 name: string
 age?: number
}

// 如下赋值均可以
person1 = {name:'李四',age:18}
person2 = {name:'张三'}
person3 = {name:'王五'}

// 如下赋值不合法，因为person3的类型限制中，没有对gender属性的说明
person3 = {name:'王五',gender:'男'}
```

2. 索引签名： 允许定义对象可以具有任意数量的属性，这些属性的键和类型是可变的， 常⽤于：描述类型不确定的属性，（具有动态属性的对象）。

```ts
// 限制person对象必须有name属性，可选age属性但值必须是数字，同时可以有任意数量、任意类型的其他属性
let person: {
 name: string
 age?: number
 [key: string]: any // 索引签名，完全可以不⽤key这个单词，换成其他的也可以
}

// 赋值合法
person = {
 name:'张三',
 age:18,
 gender:'男'
}
```

声明函数类型

```ts
let count: (a: number, b: number) => number
count = function (x, y) {
 return x + y
}
```

备注：

- TypeScript 中的 => 在函数类型声明时表示函数类型，描述其参数类型和返回类型。
- JavaScript 中的 => 是⼀种定义函数的语法，是具体的函数实现。
- 函数类型声明还可以使⽤：接⼝、⾃定义类型等⽅式，下⽂中会详细讲解。

声明数组类型

```ts
let arr1: string[]
let arr2: Array<string>
arr1 = ['a','b','c']
arr2 = ['hello','world']
```

备注：上述代码中的 Array 属于泛型，下⽂会详细讲解。

## 6. tuple

> 元组 (Tuple) 是⼀种特殊的数组类型，可以存储固定数量的元素，并且每个元素的类型是已知的且可以不同。元组⽤于精确描述⼀组值的类型， ? 表示可选元素。

```ts
// 第⼀个元素必须是 string 类型，第⼆个元素必须是 number 类型。
let arr1: [string,number]
// 第⼀个元素必须是 number 类型，第⼆个元素是可选的，如果存在，必须是 boolean 类型。
let arr2: [number,boolean?]
// 第⼀个元素必须是 number 类型，后⾯的元素可以是任意数量的 string 类型
let arr3: [number,...string[]]

// 可以赋值
arr1 = ['hello',123]
arr2 = [100,false]
arr2 = [200]
arr3 = [100,'hello','world']
arr3 = [100]

// 不可以赋值，arr1声明时是两个元素，赋值的是三个
arr1 = ['hello',123,false]
```

## 7.  enum

> 枚举（ enum ）可以定义⼀组命名常量，它能增强代码的可读性，也让代码更好维护。

如下代码的功能是：根据调⽤ walk 时传⼊的不同参数，执⾏不同的逻辑，存在的问题是调⽤ w alk 时传参时没有任何提示，编码者很容易写错字符串内容；并且⽤于判断逻辑的 up 、 dow n 、 left 、 right 是连续且相关的⼀组值，那此时就特别适合使⽤ 枚举（ enum ）。

```ts
function walk(str:string) {
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
```

1. 数字枚举

数字枚举⼀种最常⻅的枚举类型，其成员的值会⾃动递增，且数字枚举还具备反向映射的 特点，在下⾯代码的打印中，不难发现：可以通过值来获取对应的枚举成员名称 。

```ts
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
console.log(Direction.Up)
console.log(Direction[0])

// 此⾏代码报错，枚举中的属性是只读的
Direction.Up = 'shang'
```

也可以指定枚举成员的初始值，其后的成员值会⾃动递增。

```ts
enum Direction {
    Up = 6,
    Down,
    Left,
    Right
}

console.log(Direction.Up); // 输出: 6
console.log(Direction.Down); // 输出: 7
```

使⽤数字枚举完成刚才 walk 函数中的逻辑，此时我们发现： 代码更加直观易读，⽽且类 型安全，同时也更易于维护。

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}

function walk(n: Direction) {
    if (n === Direction.Up) {
        console.log("向【上】⾛");
    } else if (n === Direction.Down) {
        console.log("向【下】⾛");
    } else if (n === Direction.Left) {
        console.log("向【左】⾛");
    } else if (n === Direction.Right) {
        console.log("向【右】⾛");
    } else {
        console.log("未知⽅向");
    }
}

walk(Direction.Up)
walk(Direction.Down)
```

2. 字符串枚举

枚举成员的值是字符串

```ts
enum Direction {
    Up = "up",
    Down = "down",
    Left = "left",
    Right = "right"
}

let dir: Direction = Direction.Up;
console.log(dir); // 输出: "up"
```

3. 常量枚举

> 官⽅描述：常量枚举是⼀种特殊枚举类型，它使⽤ const 关键字定义，在编译时会被 内联，避免⽣成⼀些额外的代码。

> 何为编译时内联？ 所谓“内联”其实就是 TypeScript 在编译时，会将枚举成员引⽤替换为它们的实际值， ⽽不是⽣成额外的枚举对象。这可以减少⽣成的 JavaScript 代码量，并提⾼运⾏时性 能。

使⽤普通枚举的 TypeScript 代码如下：

```ts
enum Directions {
    Up,
    Down,
    Left,
    Right
}

let x = Directions.Up;
```

编译后⽣成的 JavaScript 代码量较⼤ ：

```ts
"use strict";
var Directions;

(function (Directions) {
    Directions[Directions["Up"] = 0] = "Up";
    Directions[Directions["Down"] = 1] = "Down";
    Directions[Directions["Left"] = 2] = "Left";
    Directions[Directions["Right"] = 3] = "Right";
})(Directions || (Directions = {}));

let x = Directions.Up;
```

使⽤常量枚举的 TypeScript 代码如下：

```ts
const enum Directions {
    Up,
    Down,
    Left,
    Right
}
let x = Directions.Up;
```

编译后⽣成的 JavaScript 代码量较⼩：

```ts
"use strict";
let x = 0 /* Directions.Up */;
```

## 8. type

type 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更⽅便地进⾏类型复⽤和 扩展。

1. 基本⽤法

> 类型别名使⽤ type 关键字定义， type 后跟类型名称，例如下⾯代码中 num 是类 型别名。

```ts
type num = number;
let price: num
price = 100
```

2. 联合类型

> 联合类型是⼀种⾼级类型，它表示⼀个值可以是⼏种不同类型之⼀。

```ts
type Status = number | string
type Gender = '男' | '⼥'

function printStatus(status: Status) {
 console.log(status);
}

function logGender(str:Gender){
 console.log(str)
}

printStatus(404);
printStatus('200');
printStatus('501');

logGender('男')
logGender('⼥')
```

3.交叉类型

> 交叉类型（Intersection Types）允许将多个类型合并为⼀个类型。合并后的类型将拥 有所有被合并类型的成员。交叉类型通常⽤于对象类型。 

```ts
//⾯积
type Area = {
    height: number; //⾼
    width: number; //宽
};

//地址
type Address = {
    num: number; //楼号
    cell: number; //单元号
    room: string; //房间号
};

// 定义类型House，且House是Area和Address组成的交叉类型
type House = Area & Address;

const house: House = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};
```

## 9. ⼀个特殊情况

先来观察如下两段代码：

代码段1（正常）

在函数定义时，限制函数返回值为 void ，那么函数的返回值就必须是空。

```ts
function demo():void{
    // 返回undefined合法
    return undefined

    // 以下返回均不合法
    return 100
    return false
    return null
    return []
}
demo()
```

代码段2（特殊）

使⽤ 限制函数返回值为 void 时， TypeScript 并不会严格要求函数返回空。

```ts
type LogFunc = () => void

const f1: LogFunc = () => {
    return 100; // 允许返回⾮空值
};

const f2: LogFunc = () => 200; // 允许返回⾮空值
const f3: LogFunc = function () {
    return 300; // 允许返回⾮空值
};
```

为什么会这样？

是为了确保如下代码成⽴，我们知道 Array.prototype.push 的返回值是⼀个数字， ⽽ Array.prototype.forEach ⽅法期望其回调的返回类型是 void 。

```ts
const src = [1, 2, 3];
const dst = [0];

src.forEach((el) => dst.push(el));
```

