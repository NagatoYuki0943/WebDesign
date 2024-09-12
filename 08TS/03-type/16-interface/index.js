"use strict";
// 定义⼀个类 Person，实现 PersonInterface 接⼝
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // 实现接⼝中的 speak ⽅法
    speak(n) {
        for (let i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log(`你好，我叫${this.name}，我的年龄是${this.age}`);
        }
    }
}
// 创建⼀个 Person 类的实例 p1，传⼊名字 'tom' 和年龄 18
const p1 = new Person('tom', 18);
p1.speak(3);
const user = {
    name: "张三",
    gender: '男',
    age: 18,
    run(n) {
        console.log(`奔跑了${n}⽶`);
    }
};
user.run(3); // 奔跑了3⽶
const count = (x, y) => {
    return x + y;
};
console.log(count(2, 3)); // 5
const stu = {
    name: "张三",
    age: 25,
    grade: '⾼三',
};
console.log(stu.name); // 张三
console.log(stu.age); // 25
console.log(stu.grade); // ⾼三
// Person1 类实现 PersonInterface2
class Person1 {
    // 构造器
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // ⽅法
    speak() {
        console.log('你好！我是⽼师:', this.name);
    }
}
const p2 = new Person1('李四', 20);
p2.speak(); // 你好！我是⽼师: 李四
