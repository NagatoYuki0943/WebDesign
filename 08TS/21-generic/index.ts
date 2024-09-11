// 泛型允许我们在定义函数、类或接⼝时，使⽤类型参数来表示**未指定的类型**，这些参数在具体**使⽤时**，
// 才被指定**具体的类型**，泛型能让同⼀段代码适⽤于多种类型，同时仍然保持类型的安全性。


// **泛型函数**
// 举例：如下代码中 `<T>` 就是泛型，（不⼀定⾮叫 `T` ），设置泛型后即可在函数中使⽤ `T` 来表 示该类型：
function logData<T>(data: T): T {
    console.log(data)
    return data
}

logData<number>(100)
logData<string>('hello')


// **泛型可以有多个**
function logData1<T, U>(data1: T, data2: U): T | U {
    console.log(data1,data2)
    return Date.now() % 2 ? data1 : data2
}

logData1<number, string>(100, 'hello')
logData1<string, boolean>('ok', false)


// **泛型接⼝**
interface PersonInterface<T> {
    name: string,
    age: number,
    extraInfo: T
}

let p1: PersonInterface<string>
let p2: PersonInterface<number>

p1 = { name: '张三', age: 18, extraInfo: '⼀个好⼈' }
p2 = { name: '李四', age: 18, extraInfo: 250 }


// **泛型约束**
interface LengthInterface {
    length: number
}

// 约束规则是：传⼊的类型T必须具有 length 属性
function logPerson<T extends LengthInterface>(data: T): void {
    console.log(data.length)
}

logPerson<string>('hello')
// 报错：因为number不具备length属性
// logPerson<number>(100)


// **泛型类**
class Person<T> {
    constructor(
        public name: string,
        public age: number,
        public extraInfo: T
    ) { }

    speak() {
        console.log(`我叫${this.name}今年${this.age}岁了`)
        console.log(this.extraInfo)
    }
}

// 测试代码1
const p3 = new Person<number>("tom", 30, 250)
p3.speak()

// 测试代码2
type JobInfo = {
    title: string;
    company: string;
}
const p4 = new Person<JobInfo>("tom", 30, { title: '研发总监', company: '发发发科技公司' })
p4.speak()
