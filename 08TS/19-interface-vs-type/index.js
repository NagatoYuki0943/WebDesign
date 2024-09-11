"use strict";
// interface 与 type 的区别
// 相同点： `interface` 和 `type` 都可以⽤于定义**对象结构**，在定义对象结构时两者可以互换。
// 不同点：
//  1. `interface`：更专注于定义**对象**和**类**的结构，⽀持继承、合并。
//  2. `type`：可以定义**类型别名**、**联合类型**、**交叉类型**，但不⽀持继承和⾃动合并。
// 使⽤PersonInterface
const person1 = {
    name: '张三',
    age: 18,
    speak() {
        console.log(`我叫：${this.name}，年龄：${this.age}`);
    }
};
person1.speak();
// 使⽤PersonType
const person2 = {
    name: '张三',
    age: 18,
    speak() {
        console.log(`我叫：${this.name}，年龄：${this.age}`);
    }
};
person2.speak();
const student = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',
    speak() {
        console.log(this.name, this.age, this.grade);
    }
};
student.speak();
const student1 = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',
    speak() {
        console.log(this.name, this.age, this.grade);
    }
};
student1.speak();
