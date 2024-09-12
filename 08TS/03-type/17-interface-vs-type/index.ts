// interface 与 type 的区别
// 相同点： `interface` 和 `type` 都可以⽤于定义**对象结构**，在定义对象结构时两者可以互换。
// 不同点：
//  1. `interface`：更专注于定义**对象**和**类**的结构，⽀持继承、合并。
//  2. `type`：可以定义**类型别名**、**联合类型**、**交叉类型**，但不⽀持继承和⾃动合并。


// **interface 和 type 都可以定义对象结构**
// 使⽤ interface 定义 Person 对象
interface PersonInterface {
    name: string
    age: number
    speak(): void
}

// 使⽤ type 定义 Person 对象
type PersonType = {
    name: string
    age: number
    speak(): void
};

// 使⽤PersonInterface
const person1: PersonInterface = {
    name:'张三',
    age:18,

    speak(){
        console.log(`我叫：${this.name}，年龄：${this.age}`)
    }
}
person1.speak()

// 使⽤PersonType
const person2: PersonType = {
    name:'张三',
    age:18,

    speak(){
        console.log(`我叫：${this.name}，年龄：${this.age}`)
    }
}
person2.speak()


// **interface 可以继承、合并**
interface PersonInterface1 {
    name: string // 姓名
    age: number // 年龄
}

// 合并
interface PersonInterface1 {
    speak: () => void
}

// 继承
interface StudentInterface1 extends PersonInterface1 {
    grade: string // 年级
}

const student: StudentInterface1 = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',

    speak() {
        console.log(this.name,this.age,this.grade)
    }
}
student.speak()


// **type 的交叉类型**
// 使⽤ type 定义 Person 类型，并通过交叉类型实现属性的合并
type PersonType1 = {
    name: string; // 姓名
    age: number; // 年龄
} & {
    speak: () => void
}

// 使⽤ type 定义 Student 类型，并通过交叉类型继承 PersonType
type StudentType1 = PersonType1 & {
    grade: string // 年级
}

const student1: StudentType1 = {
    name: '李四',
    age: 18,
    grade: '⾼⼆',

    speak() {
        console.log(this.name, this.age, this.grade)
    }
}
student1.speak()
