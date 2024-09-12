"use strict";
class Person {
    // 构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // ⽅法
    speak() {
        console.log(`我叫：${this.name}，今年${this.age}岁`);
    }
}
// 实例化
const p1 = new Person('张三', 25);
// 调用方法
p1.speak(); // 我叫：张三，今年25岁
// 继承
class Student extends Person {
    // 备注本例中若Student类不需要额外的属性，Student的构造器可以省略
    // 构造器
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    // 重写父类方法
    // override 关键字表示重写父类方法, 可以省略
    speak() {
        console.log(`我是学⽣，我叫：${this.name}，今年${this.age}岁，在读${this.grade}年级`);
    }
    // ⼦类⾃⼰的⽅法
    study() {
        console.log(`${this.name}正在努⼒学习中......`);
    }
}
// 实例化
const s1 = new Student('李四', 20, '高三');
// 调用方法
s1.speak(); // 我是学⽣，我叫：李四，今年20岁，在读高三年级
s1.study(); // 李四正在努⼒学习中......
