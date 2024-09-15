// **装饰器工厂是一个返回装饰器函数的函数，可以为装饰器添加参数，可以更灵活地控制装饰器的行为。**

interface Person {
    introduce: () => void
}

// 定义一个装饰器工厂 LogInfo，它接受一个参数 n，返回一个类装饰器
function LogInfo(n: number) {
    // 装饰器函数，target 是被装饰的类
    return function(target: Function){
        // 在类的原型上添加 introduce 方法
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`我的名字：${this.name}，我的年龄：${this.age}`)
            }
        }
    }
}

// 使用装饰器, 要使用 () 返回一个装饰器, 打印 5 次
@LogInfo(5)
// 接口自动合并
class Person {

    constructor(
        public name: string,
        public age: number
    ) { }

    speak() {
        console.log('你好呀！')
    }
}

let p1 = new Person('张三', 18)
// console.log(p1) // 打印的p1是：_classThis，转换的JS版本比较旧时，会出现，不必纠结
p1.speak()
// 你好呀！ index.js:30:17
p1.introduce()
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
// 我的名字：张三，我的年龄：18
