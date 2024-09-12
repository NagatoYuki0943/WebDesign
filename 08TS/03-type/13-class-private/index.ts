class Person {
    constructor(
        public name: string,
        public age: number,
        // IDCard属性为私有的(private)属性，只能在【类内部】使⽤
        private IDCard: string
    ) { }

    private getPrivateInfo(){
        console.log("Person.getPrivateInfo")
        // 类内部可以访问私有的(private)属性 —— IDCard
        return `身份证号码为：${this.IDCard}`
    }

    getInfo(): string {
        console.log("Person.getInfo")
        // 类内部可以访问受保护的(protected)属性 —— name和age
        return `我叫: ${this.name}, 今年刚满${this.age}岁`
    }

    getFullInfo(): string {
        console.log("Person.getFullInfo")
        // 类内部可以访问公开的getInfo⽅法，也可以访问私有的getPrivateInfo⽅法
        return this.getInfo() + '，' + this.getPrivateInfo()
    }
}

const p1 = new Person('张三', 18, '110114198702034432')
console.log(p1.getInfo())
// 我叫: 张三, 今年刚满18岁
console.log(p1.getFullInfo())
// 我叫: 张三, 今年刚满18岁，身份证号码为：110114198702034432

// 以下代码均报错
// p1.IDCard
// p1.getPrivateInfo()

class Student extends Person {
    constructor(
        name: string,
        age: number,
        IDCard: string,
        public grade: number
    ) {
        super(name, age, IDCard)
    }

    getInfo(): string {
        console.log("Student.getInfo")
        return `我叫: ${this.name}, 今年刚满${this.age}岁, 我在读${this.grade}年级`
    }

    getFullInfo(): string {
        console.log("Student.getFullInfo")
        // 子类不可以访问父类的 private 属性
        // return this.getInfo() + '，' + super.getPrivateInfo()
        // 但是可以通过父类访问的 public / protected 方法强制访问 private 函数
        return super.getFullInfo() + '，' + `我在读${this.grade}年级`
    }
}

const s1 = new Student('李四', 11, '110114198702034433', 3)
console.log(s1.getInfo())
// 我叫: 李四, 今年刚满11岁, 我在读3年级
console.log(s1.getFullInfo())
// 我叫: 李四, 今年刚满11岁, 我在读3年级，身份证号码为：110114198702034433，我在读3年级
// 打印 2 次 `我在读3年级`，因为 super.getFullInfo() 调用了父类的 getFullInfo() 方法，
// 而父类的 getFullInfo() 调用了子类的 getInfo() 方法，而子类的 getInfo() 会打印 `我在读3年级`

// 报错，因为子类不可以访问父类的 private 属性
//s1.IDCard
