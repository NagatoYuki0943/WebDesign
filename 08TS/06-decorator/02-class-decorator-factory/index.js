"use strict";
// **装饰器工厂是一个返回装饰器函数的函数，可以为装饰器添加参数，可以更灵活地控制装饰器的行为。**
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 定义一个装饰器工厂 LogInfo，它接受一个参数 n，返回一个类装饰器
function LogInfo(n) {
    // 装饰器函数，target 是被装饰的类
    return function (target) {
        // 在类的原型上添加 introduce 方法
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`我的名字：${this.name}，我的年龄：${this.age}`);
            }
        };
    };
}
// 使用装饰器, 打印 5 次
let Person = 
// 接口自动合并
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log('你好呀！');
    }
};
Person = __decorate([
    LogInfo(5)
    // 接口自动合并
], Person);
let p1 = new Person('张三', 18);
// console.log(p1) // 打印的p1是：_classThis，转换的JS版本比较旧时，会出现，不必纠结
p1.speak();
// 你好呀！ index.js:30:17
p1.introduce();
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
