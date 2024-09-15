/*
  参数说明：
    - target:
        1. 对于实例访问器来说值是【所属类的原型对象】。
        2. 对于静态访问器来说值是【所属类】。
    - propertyKey:访问器的名称。
    - descriptor: 描述对象。
*/
function Demo(target: object, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
}

class Person {
    @Demo
    get address(){
        return '北京宏福科技园'
    }
    @Demo
    static get country(){
        return '中国'
    }
}
// Object { … }
// address
// Object { get: address(), set: undefined, enumerable: false, configurable: true }

// class Person {}
// country
// Object { get: country(), set: undefined, enumerable: false, configurable: true }

console.log("**********")


// ## 应用举例
// 需求：对`Weather`类的`temp`属性的`set`访问器进行限制，设置的最低温度`-50`，最高温度`50`
function RangeValidate(min: number, max: number) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        // 保存原始的 setter 方法，以便在后续调用中使用
        const originalSetter = descriptor.set

        // 重写 setter 方法，加入范围验证逻辑
        descriptor.set = function (value: number) {
            // 检查设置的值是否在指定的最小值和最大值之间
            if (value < min || value > max) {
                // 如果值不在范围内，抛出错误
                throw new Error(`${propertyKey}的值应该在 ${min} 到 ${max}之间！`)
            }

            // 如果值在范围内，且原始 setter 方法存在，则调用原始 setter 方法
            if (originalSetter) {
                originalSetter.call(this, value)
            }
        }
    }
}

class Weather {
    private _temp: number

    constructor(_temp: number) {
        this._temp = _temp
    }

    // 设置温度范围在 -50 到 50 之间
    @RangeValidate(-50, 50)
    set temp(value) {
        this._temp = value
    }

    get temp() {
        return this._temp
    }
}

const w1 = new Weather(25)
console.log(w1)
// Object { _temp: 25 }
console.log(w1.temp)
// 25

w1.temp = 40
console.log(w1)
// Object { _temp: 40 }
console.log(w1.temp)
// 40

w1.temp = 57
// Uncaught Error: temp的值应该在 -50 到 50之间！
console.log(w1)
console.log(w1.temp)
