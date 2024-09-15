"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// ## 基本语法
console.log("基本语法");
// 类装饰器是一个应用在**类声明**上的**函数**，可以为类添加额外的功能，或添加额外的逻辑。
/*
    Demo函数会在Person类定义时执行
    参数说明：
    ○ target参数是被装饰的类，即：Person
*/
function Demo(target) {
    // 在这里添加额外的逻辑
    console.log(`Demo ${target.name} function executed`);
}
// 使用装饰器
let Person = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Person = __decorate([
    Demo
], Person);
const p = new Person("张三", 18); // 输出：Demo function executed
// ## 应用举例
console.log("应用举例");
// 需求：定义一个装饰器，实现 `Person` 实例调用 `toString` 时返回 `JSON.stringify` 的执行结果。
// 使用装饰器重写 toString 方法 + 封闭其原型对象
function CustomString(target) {
    // 向被装饰类的原型上添加自定义的 toString 方法
    target.prototype.toString = function () {
        // this 指向实例对象
        return JSON.stringify(this);
    };
    // 封闭其原型对象，禁止随意操作其原型对象，不允许添加修改属性
    Object.seal(target.prototype);
}
// 使用 CustomString 装饰器
let Person1 = class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('你好呀！');
    }
};
Person1 = __decorate([
    CustomString
], Person1);
let p1 = new Person1('张三', 18);
console.log(p1.toString());
// Person1.prototype.a = 100 // 此行会报错：Cannot add property a, object is not extensible
// console.log(p1.a)
// ## 关于返回值
console.log("关于返回值");
// **类装饰器有返回值**：若类装饰器返回一个新的类，那这个新类将**替换**掉被装饰的类。
// **类装饰器无返回值**：若类装饰器无返回值或返回`undefined`，那被装饰的类**不会**被替换。
function demo(target) {
    // 装饰器有返回值时，该返回值会替换掉被装饰的类
    return class {
        test() {
            console.log(200);
            console.log(300);
            console.log(400);
        }
    };
}
let Person2 = class Person2 {
    test() {
        console.log(100);
    }
};
Person2 = __decorate([
    demo
], Person2);
const p2 = new Person2();
p2.test();
function test(fn) { }
class Person3 {
}
test(Person3);
function test1(fn) { }
class Person4 {
}
Person4.wife = 'asd';
test1(Person4);
// 创建一个装饰器，为类添加日志功能和创建时间
// T extends Constructor2: 泛型约束，要求被装饰的类必须是一个构造类型
function LogTime(target) {
    // class extends target 表示继承被装饰的类
    return class extends target {
        constructor(...args) {
            super(...args);
            this.createdTime = new Date(); // 记录对象创建时间
        }
        getCreateTime() {
            return `该对象创建时间为：${this.createdTime}`;
        }
    };
}
let User = 
// 接口自动合并
// 在 TypeScript 中，当接口和类同名时，接口的成员会自动合并到类中。
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}说：你好啊！`);
    }
};
User = __decorate([
    LogTime
    // 接口自动合并
    // 在 TypeScript 中，当接口和类同名时，接口的成员会自动合并到类中。
], User);
const user1 = new User('张三', 13);
user1.speak();
console.log(user1.getCreateTime());
