"use strict";
class Person {
    // 构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 默认不加修饰符也是 public
    speak() {
        // 类的【内部】可以访问public修饰的name和age
        console.log(`我叫：${this.name}，今年${this.age}岁`);
    }
}
// 实例化
const p1 = new Person('张三', 25);
// 调用方法
p1.speak(); // 我叫：张三，今年25岁
// 类的【外部】可以访问public修饰的属性
console.log(p1.name);
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
        // 【⼦类中】可以访问⽗类中public修饰的：name属性、age属性
        console.log(`我是学⽣，我叫：${this.name}，今年${this.age}岁，在读${this.grade}年级`);
    }
}
// 实例化
const s1 = new Student('李四', 20, '高三');
// 调用方法
s1.speak(); // 我是学⽣，我叫：李四，今年20岁，在读高三年级
// 类的【外部】可以访问public修饰的属性
console.log(s1.name);
// 属性的简写形式
class Person1 {
    // 构造器
    constructor(
    // 这里必须有属性修饰符
    name, age, gender, city) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.city = city;
    }
    // ⽅法
    speak() {
        // 类的【内部】可以访问public修饰的name和age
        console.log(`我叫：${this.name}，今年${this.age}岁，性别是${this.gender}，城市是${this.city}`);
    }
}
const p2 = new Person1('王五', 26, '男', '北京');
p2.speak(); // 我叫：王五，今年26岁，性别是男，城市是北京
