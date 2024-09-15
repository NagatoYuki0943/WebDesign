"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  参数说明：
    - target: 对于静态方法来说值是类，对于实例方法来说值是原型对象。
    - propertyKey: 方法的名称。
    - descriptor: 方法的描述对象，其中value属性是被装饰的方法。
*/
function Demo(target, propertyKey, descriptor) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Demo装饰实例方法
    speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`);
    }
    // Demo装饰静态方法
    static isAdult(age) {
        return age >= 18;
    }
}
__decorate([
    Demo
], Person.prototype, "speak", null);
__decorate([
    Demo
], Person, "isAdult", null);
// Object { … }
// index
// speak
// Object { value: speak(), writable: true, enumerable: false, configurable: true }
// class Person { constructor(name, age) }
// isAdult
const p1 = new Person('张三', 18);
p1.speak();
// 你好，我的名字：张三，我的年龄：18
console.log(Person.isAdult(18));
// true
console.log("**********");
// ## 应用举例
// 需求：
// 1. 定义一个`Logger`方法装饰器，用于在方法执行前和执行后，均追加一些额外逻辑。
// 2. 定义一个`Validate`方法装饰器，用于验证数据。
function Logger(target, propertyKey, descriptor) {
    // 保存原始方法
    const original = descriptor.value;
    // 替换原始方法
    descriptor.value = function (...args) {
        console.log(`${propertyKey}开始执行......`);
        const result = original.call(this, ...args);
        console.log(`${propertyKey}执行完毕......`);
        return result;
    };
}
function Validate(maxValue) {
    return function (target, propertyKey, descriptor) {
        // 保存原始方法
        const original = descriptor.value;
        // 替换原始方法
        descriptor.value = function (...args) {
            // 自定义的验证逻辑
            if (args[0] > maxValue) {
                throw new Error('年龄非法！');
            }
            // 如果所有参数都符合要求，则调用原始方法
            return original.apply(this, args);
        };
    };
}
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`你好，我的名字：${this.name}，我的年龄：${this.age}`);
    }
    static isAdult(age) {
        return age >= 18;
    }
}
__decorate([
    Logger
], Person1.prototype, "speak", null);
__decorate([
    Validate(120)
], Person1, "isAdult", null);
const p2 = new Person1('张三', 18);
p2.speak();
// speak开始执行......
// 你好，我的名字：张三，我的年龄：18
// speak执行完毕......
console.log(Person1.isAdult(100));
// true
console.log(Person1.isAdult(200));
// Uncaught Error: 年龄非法！
