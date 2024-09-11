// 相同点：都能定义⼀个**类的格式**（定义类应遵循的契约）
// 不相同：
//  1. 接⼝：**只能**描述**结构**，**不能**有任何**实现代码**，⼀个类可以实现**多个**接⼝。
//  2. 抽象类：既可以包含**抽象⽅法**，也可以包含**具体⽅法**， ⼀个类只能继承**⼀个**抽象类。

// **⼀个类可以实现多个接⼝ **
// FlyInterface 接⼝
interface FlyInterface {
    fly(): void
}

// 定义 SwimInterface 接⼝
interface SwimInterface {
    swim(): void
}

// Duck 类实现了 FlyInterface 和 SwimInterface 两个接⼝
class Duck implements FlyInterface, SwimInterface {

    fly(): void {
        console.log('鸭⼦可以⻜')
    }

    swim(): void {
        console.log('鸭⼦可以游泳')
    }
}

// 创建⼀个 Duck 实例
const duck = new Duck();
duck.fly() // 输出: 鸭⼦可以⻜
duck.swim() // 输出: 鸭⼦可以游泳


