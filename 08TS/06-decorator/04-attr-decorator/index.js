"use strict";
// **装饰类里面的属性**
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*
  参数说明：
    - target: 对于静态属性来说值是类，对于实例属性来说值是类的原型对象。
    - propertyKey: 属性名。
*/
function Demo(target, propertyKey) {
    console.log(target, propertyKey);
}
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
__decorate([
    Demo
], Person.prototype, "name", void 0);
__decorate([
    Demo
], Person.prototype, "age", void 0);
__decorate([
    Demo
], Person, "school", void 0);
const p1 = new Person('张三', 18);
// Object { … } name
// Object { … } age
// class Person { constructor(name, age) } school
// ## 关于属性遮蔽
// 如下代码中：当构造器中的`this.age = age`试图在实例上赋值时，实际上是调用了原型上`age`属性的`set`方法。
class Person1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let value = 99;
// 使用defineProperty给Person原型添加age属性，并配置对应的get与set
Object.defineProperty(Person1.prototype, 'age', {
    get() {
        return value;
    },
    set(val) {
        value = val;
    }
});
console.log("value", value); // 99
const p2 = new Person1('张三', 18);
console.log("value", value); // 18
console.log(p2.age); // 18
console.log("value", value); // 18
console.log(Person1.prototype.age); // 18
console.log("value", value); // 18
// ## 应用举例
// 需求：定义一个`State`属性装饰器，来监视属性的修改。
// 声明一个装饰器函数 State，用于捕获数据的修改
function State(target, propertyKey) {
    // 存储属性的内部值
    let key = `__${propertyKey}`;
    // 使用 Object.defineProperty 替换类的原始属性
    // 重新定义属性，使其使用自定义的 getter 和 setter
    Object.defineProperty(target, propertyKey, {
        get() {
            // [] 代表从对象上取值
            return this[key];
        },
        set(newVal) {
            console.log(`${propertyKey}的最新值为：${newVal}`);
            // [] 代表从对象上取值
            this[key] = newVal;
        },
        enumerable: true,
        configurable: true,
    });
}
class Person2 {
    constructor(name, age) {
        this.school = 'atguigu';
        this.name = name;
        this.age = age;
    }
}
__decorate([
    State
], Person2.prototype, "age", void 0);
const p3 = new Person2('张三', 18);
// age的最新值为：18
console.log(p3);
// Object { school: "atguigu", name: "张三", __age: 18 }
const p4 = new Person2('李四', 30);
// age的最新值为：30
console.log(p4);
// Object { school: "atguigu", name: "李四", __age: 30 }
p3.age = 80;
// age的最新值为：80
p4.age = 90;
// age的最新值为：90
console.log('------------------');
console.log(p3.age); // 80
console.log(p4.age); // 90
