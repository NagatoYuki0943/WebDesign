// **定义类结构**
// PersonInterface接⼝，⽤与限制Person类的格式
interface PersonInterface {
    // 不能定义 public / private / protected 修饰符
    // public name: string
    name: string
    readonly age: number
    speak(n: number): void
}

// 定义⼀个类 Person，实现 PersonInterface 接⼝
class Person implements PersonInterface {
    constructor(
        public name: string,
        public age: number
    ) { }

    // 实现接⼝中的 speak ⽅法
    speak(n: number): void {
        for (let i = 0; i < n; i++) {
            // 打印出包含名字和年龄的问候语句
            console.log(`你好，我叫${this.name}，我的年龄是${this.age}`)
        }
    }
}

// 创建⼀个 Person 类的实例 p1，传⼊名字 'tom' 和年龄 18
const p1 = new Person('tom', 18);
p1.speak(3)
// 你好，我叫tom，我的年龄是18
// 你好，我叫tom，我的年龄是18
// 你好，我叫tom，我的年龄是18


// **定义对象结构**
interface UserInterface {
    name: string
    readonly gender: string // 只读属性
    age?: number // 可选属性
    run: (n: number) => void
}

const user: UserInterface = {
    name: "张三",
    gender: '男',
    age: 18,
    run(n) {
        console.log(`奔跑了${n}⽶`)
    }
}
user.run(3) // 奔跑了3⽶


// **定义函数结构**
interface CountInterface {
    (a: number, b: number): number
}

const count: CountInterface = (x, y) => {
    return x + y
}

console.log(count(2, 3)) // 5


// **接⼝之间的继承**
interface PersonInterface1 {
    name: string // 姓名
    age: number // 年龄
}

interface StudentInterface extends PersonInterface1 {
    grade: string // 年级
}

const stu: StudentInterface = {
    name: "张三",
    age: 25,
    grade: '⾼三',
}

console.log(stu.name) // 张三
console.log(stu.age) // 25
console.log(stu.grade) // ⾼三


// **接⼝⾃动合并（可重复定义）**
// PersonInterface2 接⼝
interface PersonInterface2 {
    // 属性声明
    name: string
    age: number
}

// 给PersonInterface2 接⼝添加新属性
interface PersonInterface2 {
    // ⽅法声明
    speak(): void
}

// Person1 类实现 PersonInterface2
class Person1 implements PersonInterface2 {

    // 构造器
    constructor(
        public name: string,
        public age: number
    ) { }

    // ⽅法
    speak() {
        console.log('你好！我是⽼师:', this.name)
    }
}

const p2 = new Person1('李四', 20)
p2.speak() // 你好！我是⽼师: 李四
