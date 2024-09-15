/*
  参数说明：
    - target: 对于静态方法来说值是类，对于实例方法来说值是原型对象。
    - propertyKey: 方法的名称。
    - descriptor: 方法的描述对象，其中value属性是被装饰的方法。
*/
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor){
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
}

class Person {
    constructor(
        public name: string,
        public age: number,
    ){}

    // Demo装饰实例方法
    @Demo
    speak(){
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`)
    }

    // Demo装饰静态方法
    @Demo static isAdult(age: number) {
        return age >= 18
    }
}
// Object { … }
// index
// speak
// Object { value: speak(), writable: true, enumerable: false, configurable: true }
// class Person { constructor(name, age) }
// isAdult


const p1 = new Person('张三', 18)

p1.speak()
// 你好，我的名字：张三，我的年龄：18

console.log(Person.isAdult(18))
// true
console.log("**********")


// ## 应用举例
// 需求：
// 1. 定义一个`Logger`方法装饰器，用于在方法执行前和执行后，均追加一些额外逻辑。
// 2. 定义一个`Validate`方法装饰器，用于验证数据。

function Logger(target: object, propertyKey: string, descriptor: PropertyDescriptor){
    // 保存原始方法
    const original = descriptor.value

    // 替换原始方法
    descriptor.value = function (...args: any[]) {
        console.log(`${propertyKey}开始执行......`)
        const result = original.call(this, ...args)
        console.log(`${propertyKey}执行完毕......`)
        return result
    }
}

function Validate(maxValue: number){
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor){
        // 保存原始方法
        const original = descriptor.value
        // 替换原始方法
        descriptor.value = function (...args: any[]) {
            // 自定义的验证逻辑
            if (args[0] > maxValue) {
                throw new Error('年龄非法！')
            }
            // 如果所有参数都符合要求，则调用原始方法
            return original.apply(this, args)
        }
    }
}

class Person1 {
    constructor(
        public name: string,
        public age: number,
    ){}

    @Logger speak(){
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`)
    }

    @Validate(120)
    static isAdult(age: number) {
        return age >= 18
    }
}

const p2 = new Person1('张三', 18)
p2.speak()
// speak开始执行......
// 你好，我的名字：张三，我的年龄：18
// speak执行完毕......

console.log(Person1.isAdult(100))
// true
console.log(Person1.isAdult(200))
// Uncaught Error: 年龄非法！
