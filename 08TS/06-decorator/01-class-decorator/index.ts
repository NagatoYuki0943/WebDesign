// 基本语法
console.log("基本语法")
// 类装饰器是一个应用在**类声明**上的**函数**，可以为类添加额外的功能，或添加额外的逻辑。
/*
  Demo函数会在Person类定义时执行
  参数说明：
    ○ target参数是被装饰的类，即：Person
*/
function Demo(target: Function) {
    // 在这里添加额外的逻辑
    console.log("Demo function executed");
}

// 使用装饰器
@Demo
class Person { }

const p = new Person(); // 输出：Demo function executed


// 应用举例
console.log("应用举例")
// 需求：定义一个装饰器，实现`Person`实例调用`toString`时返回`JSON.stringify`的执行结果。
// 使用装饰器重写toString方法 + 封闭其原型对象
function CustomString(target: Function) {
    // 向被装饰类的原型上添加自定义的 toString 方法
    target.prototype.toString = function () {
        return JSON.stringify(this)
    }
    // 封闭其原型对象，禁止随意操作其原型对象
    Object.seal(target.prototype)
}

// 使用 CustomString 装饰器
@CustomString
class Person1 {
    constructor(public name: string, public age: number) { }

    speak() {
        console.log('你好呀！')
    }
}

/* 测试代码如下 */
let p1 = new Person1('张三', 18)

console.log(p1.toString())
// "name":"张三","age":18}

// 禁止随意操作其原型对象
interface Person1 {
    a: any
}
// Person1.prototype.a = 100 // 此行会报错：Cannot add property a, object is not extensible
// console.log(p1.a)


// 关于返回值
console.log("关于返回值")
// **类装饰器有返回值**：若类装饰器返回一个新的类，那这个新类将**替换**掉被装饰的类。
// **类装饰器无返回值**：若类装饰器无返回值或返回`undefined`，那被装饰的类**不会**被替换。
function demo(target: Function){
    // 装饰器有返回值时，该返回值会替换掉被装饰的类
    return class {
        test(){
            console.log(200)
            console.log(300)
            console.log(400)
        }
    }
}

@demo
class Person2 {
    test(){
        console.log(100)
    }
}

const p2 = new Person2();
p2.test(); // 输出：200 300 400


// 关于构造类型
// 在 TypeScript 中，`Function` 类型所表示的范围十分广泛，包括：普通函数、箭头函数、方法等等。
// 但并非`Function` 类型的函数都可以被 `new` 关键字实例化，例如箭头函数是不能被实例化的，
// 那么 TypeScript 中概如何声明一个构造类型呢？有以下两种方式：
/*
  ○ new     表示：该类型是可以用new操作符调用。
  ○ ...args 表示：构造器可以接受【任意数量】的参数。
  ○ any[]   表示：构造器可以接受【任意类型】的参数。
  ○ {}      表示：返回类型是对象(非null、非undefined的对象)。
*/

// 定义Constructor类型，其含义是构造类型
type Constructor = new (...args: any[]) => {}

function test(fn: Constructor){}
class Person3 {}
test(Person3)


// 定义一个构造类型，且包含一个静态属性 wife
type Constructor1 = {
    new(...args: any[]): {} // 构造签名
    wife: string // wife属性
}

function test1(fn: Constructor1){}
class Person4 {
    static wife = 'asd'
}
test1(Person4)
