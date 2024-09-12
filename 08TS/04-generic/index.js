"use strict";
// 泛型允许我们在定义函数、类或接⼝时，使⽤类型参数来表示**未指定的类型**，这些参数在具体**使⽤时**，
// 才被指定**具体的类型**，泛型能让同⼀段代码适⽤于多种类型，同时仍然保持类型的安全性。
// **泛型函数**
// 举例：如下代码中 `<T>` 就是泛型，（不⼀定⾮叫 `T` ），设置泛型后即可在函数中使⽤ `T` 来表 示该类型：
function logData(data) {
    console.log(data);
    return data;
}
logData(100);
logData('hello');
logData(false);
// **泛型可以有多个**
function logData1(data1, data2) {
    console.log(data1, data2);
    return Date.now() % 2 ? data1 : data2;
}
console.log(logData1(100, 'hello'));
console.log(logData1('ok', false));
const p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈' };
let p2;
p2 = { name: '李四', age: 18, extraInfo: 250 };
// 约束规则是：传⼊的类型T必须具有 length 属性
function logPerson(data) {
    console.log(data.length);
}
logPerson('hello');
// 报错：因为number不具备length属性
// logPerson<number>(100)
// **泛型类**
class Person {
    constructor(name, age, extraInfo) {
        this.name = name;
        this.age = age;
        this.extraInfo = extraInfo;
    }
    speak() {
        console.log(`我叫${this.name}今年${this.age}岁了`);
        console.log(this.extraInfo);
    }
}
// 测试代码1
const p3 = new Person("tom", 30, 250);
p3.speak();
const p4 = new Person("tom", 30, { title: '研发总监', company: '发发发科技公司' });
p4.speak();
