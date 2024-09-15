"use strict";
// **装饰器可以组合使用，执行顺序为：先【由上到下】的执行所有的装饰器工厂，依次获取到装饰器，然后再【由下到上】执行所有的装饰器。**
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 装饰器
function test1(target) {
    console.log('test1');
}
// 装饰器工厂
function test2() {
    console.log('test2工厂');
    return function (target) {
        console.log('test2');
    };
}
// 装饰器工厂
function test3() {
    console.log('test3工厂');
    return function (target) {
        console.log('test3');
    };
}
// 装饰器
function test4(target) {
    console.log('test4');
}
let Demo = class Demo {
};
Demo = __decorate([
    test1,
    test2(),
    test3(),
    test4
], Demo);
// 使用装饰器重写toString方法 + 封闭其原型对象
function customToString(target) {
    // 向被装饰类的原型上添加自定义的 toString 方法
    target.prototype.toString = function () {
        return JSON.stringify(this);
    };
    // 封闭其原型对象，禁止随意操作其原型对象
    Object.seal(target.prototype);
}
// 创建一个装饰器，为类添加日志功能和创建时间
function LogTime(target) {
    return class extends target {
        constructor(...args) {
            super(...args);
            this.createdTime = new Date(); // 记录对象创建时间
        }
        getTime() {
            return `该对象创建时间为：${this.createdTime}`;
        }
    };
}
// 定义一个装饰器工厂 LogInfo，它接受一个参数 n，返回一个类装饰器
function LogInfo(n) {
    // 装饰器函数，target 是被装饰的类
    return function (target) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`我的名字：${this.name}，我的年龄：${this.age}`);
            }
        };
    };
}
let Person = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('你好呀！');
    }
};
Person = __decorate([
    customToString,
    LogInfo(3),
    LogTime
], Person);
const p1 = new Person('张三', 18);
console.log(p1.toString());
// {"name":"张三","age":18,"createdTime":"2024-09-14T12:32:31.332Z"}
p1.introduce();
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
console.log(p1.getTime());
// 该对象创建时间为：Sat Sep 14 2024 20:32:31 GMT+0800 (香港标准时间)
