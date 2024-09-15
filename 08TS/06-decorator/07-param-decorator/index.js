"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/*
  参数说明:
    - target:
      1. 如果修饰的是【实例方法】的参数，target 是类的【原型对象】。
      2. 如果修饰的是【静态方法】的参数，target 是【类】。
    - propertyKey: 参数所在的方法的名称。
    - parameterIndex: 参数在函数参数列表中的索引，从 0 开始。
*/
function Demo(target, propertyKey, parameterIndex) {
    console.log(target);
    console.log(propertyKey);
    console.log(parameterIndex);
}
// 类定义
class Person {
    constructor(name) {
        this.name = name;
    }
    speak(message1, mesage2) {
        console.log(`${this.name}想对说：${message1}，${mesage2}`);
    }
}
__decorate([
    __param(0, Demo)
], Person.prototype, "speak", null);
// Object { … }
// speak
console.log("**********");
// ## 应用举例
// 需求：定义方法装饰器`Validate`，同时搭配参数装饰器`NotNumber`，来对`speak`方法的参数类型进行限制
function NotNumber(target, propertyKey, parameterIndex) {
    // 初始化或获取当前方法的参数索引列表
    let notNumberArr = target[`__notNumber_${propertyKey}`] || [];
    // 将当前参数索引添加到列表中
    notNumberArr.push(parameterIndex);
    // 将列表存储回目标对象
    target[`__notNumber_${propertyKey}`] = notNumberArr;
}
// 方法装饰器定义
function Validate(target, propertyKey, descriptor) {
    const method = descriptor.value;
    descriptor.value = function (...args) {
        // 获取被标记为不能为空的参数索引列表
        const notNumberArr = target[`__notNumber_${propertyKey}`] || [];
        // 检查参数是否为 null 或 undefined
        for (const index of notNumberArr) {
            if (typeof args[index] === 'number') {
                throw new Error(`方法 ${propertyKey} 中索引为 ${index} 的参数不能是数字！`);
            }
        }
        // 调用原始方法
        return method.apply(this, args);
    };
    return descriptor;
}
// 类定义
class Student {
    constructor(name) {
        this.name = name;
    }
    speak(message1, mesage2) {
        console.log(`${this.name}想对说：${message1}，${mesage2}`);
    }
}
__decorate([
    Validate,
    __param(0, NotNumber)
], Student.prototype, "speak", null);
// 使用
const s1 = new Student("张三");
s1.speak('hello', 200);
// 张三想对说：hello，200
s1.speak(100, 200);
// Uncaught Error: 方法 speak 中索引为 0 的参数不能是数字！
