// ## 基本语法
console.log("基本语法")
// 类装饰器是一个应用在**类声明**上的**函数**，可以为类添加额外的功能，或添加额外的逻辑。
/*
    Demo函数会在Person类定义时执行
    参数说明：
    ○ target参数是被装饰的类，即：Person
*/
function Demo(target: Function) {
    // 在这里添加额外的逻辑
    console.log(`Demo ${target.name} function executed`);
}

// 使用装饰器
@Demo
class Person {
    constructor(
        public name: string,
        public age: number
    ) {}
}

const p = new Person("张三", 18); // 输出：Demo function executed


// ## 应用举例
console.log("应用举例")
// 需求：定义一个装饰器，实现 `Person` 实例调用 `toString` 时返回 `JSON.stringify` 的执行结果。
// 使用装饰器重写 toString 方法 + 封闭其原型对象
function CustomString(target: Function) {

    // 向被装饰类的原型上添加自定义的 toString 方法
    target.prototype.toString = function () {
        // this 指向实例对象
        return JSON.stringify(this)
    }

    // 封闭其原型对象，禁止随意操作其原型对象，不允许添加修改属性
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

let p1 = new Person1('张三', 18)
console.log(p1.toString())
// "name":"张三","age":18}

// 禁止随意操作其原型对象
interface Person1 {
    a: any
}
// Person1.prototype.a = 100 // 此行会报错：Cannot add property a, object is not extensible
// console.log(p1.a)


// ## 关于返回值
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
p2.test()
// 200
// 300
// 400


// ## 关于构造类型
// 在 TypeScript 中，`Function` 类型所表示的范围十分广泛，包括：普通函数、箭头函数、方法等等。
// 但并非 `Function` 类型的函数都可以被 `new` 关键字实例化，例如箭头函数是不能被实例化的，

// 声明构造类型
// 那么 TypeScript 中概如何声明一个构造类型呢？有以下两种方式：
/*
    - new     表示：该类型是可以用new操作符调用。
    - ...args 表示：构造器可以接受【任意数量】的参数。
    - any[]   表示：构造器可以接受【任意类型】的参数。
    - {}      表示：返回类型是对象(非null、非undefined的对象)。
*/
// 定义Constructor类型，其含义是构造类型，可以使用 new 调用，可以接受任意数量的参数，返回类型是对象。
// 传入的类必须有一个构造函数
type Constructor = new (...args: any[]) => {}

function test(fn: Constructor){}
class Person3 {}
test(Person3)


// 声明构造类型 + 指定静态属性
// 下面使用一个 类型别名 定义一个构造类型，包含一个静态属性 wife
// 效果和上面的 `Constructor` 类型一样
type Constructor1 = {
    new (...args: any[]): {} // 构造签名，表示该类型是一个类，可以用 new 调用，可以接受任意数量的参数，返回类型是对象。
    wife: string // wife 属性, 表明该类必须有一个静态属性 wife
}

function test1(fn: Constructor1){}
class Person4 {
    static wife = 'asd'
}
test1(Person4)


// ## 替换被装饰的类
// 对于高级一些的装饰器，不仅仅是覆盖一个原型上的方法，还要有更多功能，例如添加新的方法和状态。
// 需求：设计一个`LogTime`装饰器，可以给实例添加一个属性，用于记录实例对象的创建时间，再添加一个方法用于读取创建时间。
// User接口
interface User {
    getCreateTime(): Date
    log(): void
}

// 自定义类型Class
type Constructor2 = new (...args: any[]) => {}

// 创建一个装饰器，为类添加日志功能和创建时间
// T extends Constructor2: 泛型约束，要求被装饰的类必须是一个构造类型
function LogTime<T extends Constructor2>(target: T) {
    // class extends target 表示继承被装饰的类
    return class extends target {
        createdTime: Date

        constructor(...args: any[]) {
            super(...args)
            this.createdTime = new Date() // 记录对象创建时间
        }

        getCreateTime() {
            return `该对象创建时间为：${this.createdTime}`
        }
    }
}

@LogTime
// 接口自动合并
// 在 TypeScript 中，当接口和类同名时，接口的成员会自动合并到类中。
class User {
    constructor(
        public name: string,
        public age: number
    ) { }

    speak() {
        console.log(`${this.name}说：你好啊！`)
    }
}

const user1 = new User('张三', 13)
user1.speak()
console.log(user1.getCreateTime())
