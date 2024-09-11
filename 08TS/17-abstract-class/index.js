"use strict";
class Package {
    constructor(weight) {
        this.weight = weight;
    }
    // 通⽤⽅法：打印包裹详情
    printPackage() {
        console.log(`包裹重量为: ${this.weight}kg，运费为: ${this.calculate()}元`);
    }
}
// 无法创建抽象类的实例。
// const p = new Package(10)
// StandardPackage 类继承了 Package ，实现了 calculate ⽅法：
// 标准包裹
class StandardPackage extends Package {
    constructor(weight, unitPrice // 每公⽄的固定费率
    ) {
        super(weight);
        this.unitPrice = unitPrice;
    }
    // 实现抽象⽅法：计算运费
    calculate() {
        return this.weight * this.unitPrice;
    }
}
// 创建标准包裹实例
const s1 = new StandardPackage(10, 5);
s1.printPackage();
// ExpressPackage 类继承了 Package ，实现了 calculate ⽅法：
class ExpressPackage extends Package {
    constructor(weight, unitPrice, // 每公⽄的固定费率（快速包裹更⾼）
    additional // 超出10kg以后的附加费
    ) {
        super(weight);
        this.unitPrice = unitPrice;
        this.additional = additional;
    }
    // 实现抽象⽅法：计算运费
    calculate() {
        if (this.weight > 10) {
            // 超出10kg的部分，每公⽄多收additional对应的价格
            return 10 * this.unitPrice + (this.weight - 10) * this.additional;
        }
        else {
            return this.weight * this.unitPrice;
        }
    }
}
// 创建特快包裹实例
const e1 = new ExpressPackage(13, 8, 2);
e1.printPackage();
// 可以用抽象类继承抽象类,这样就不用实现具体方法了
class SuperPackage extends Package {
    constructor(weight) { super(weight); }
}
