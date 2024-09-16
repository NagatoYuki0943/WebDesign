// 1. ES6 也支持子类继承父类，使用 extends 关键字实现；
class Person {
    constructor(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setName(value) {
        this.name = value
    }

    run() {
        return `name: ${this.name}`;
    }
}

class Children extends Person {

}

// 2. 当子类继承了父类，实例化子类后，就可以直接拥有父类的构造、属性和方法；
let c = new Children('CH');
console.log(c.name); // CH
c.setName = 'Mr W';
console.log(c.getName); // Mr W
console.log(c.run()); // name: Mr W
console.log('==================');



// 3. 继承之后，一般来说，我们需要覆写父类，然后对子类进行增强；

class Person1 {
    constructor(name) {
        this.name = name;
    }

    get getName() {
        return this.name;
    }

    set setName(value) {
        this.name = value
    }

    run() {
        return `name: ${this.name}`;
    }
}

class Children1 extends Person1 {
    // 重写父类,要使用super()将参数传给父类
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    run() {
        // 必须调用父类的方法
        return `${super.run()}, age: ${this.age} `;
    }
}

let c1 = new Children1('ASC', 15);
console.log(c1.getName); // ASC
console.log(c1.age); // 15
console.log(c1.run()); // name: ASC, age: 15

// PS：super 作为函数时，调用父类构造；而作为对象时，在普通方法返回指定父类方法；
console.log('==================');



// 4. 可以使用 Object.getPrototypeOf() 判断子类是否继承了父类；
console.log(Object.getPrototypeOf(Children) === Person); // true
console.log('==================');



// 5. ES6 的类支持静态属性和方法，也支持静态被子类继承和复写；
class Person2 {
    static gender = '男';

    static go() {
        return `GO GO GO ${Person2.gender}`;
    }
}

class Children2 extends Person2 {
    static gender = '女'; // 覆写静态

    static go() {
        // return 'o o o ' + this.gender; // this.指的是当前类
        // return 'o o o ' + Person2.gender; // 这里使用 Person2 和 Children2 是不一样的
        return `o o o ${Children2.gender}`; // 这里使用 Person2 和 Children2 是不一样的
    }
}

// 静态方法和属性不用实例化就能使用
console.log(Person2.gender); // 男
console.log(Person2.go()); // GO GO GO 男
console.log(Children2.go()); // o o o 女
