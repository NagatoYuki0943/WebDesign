// 代码段1（正常）
// 在函数定义时，限制函数返回值为 void ，那么函数的返回值就必须是空。
function demo(): void{
    // 返回undefined合法
    return undefined

    // 以下返回均不合法
    // return 100
    // return false
    // return null
    // return []
}
demo()


// 代码段2（特殊）
// 使⽤ 限制函数返回值为 void 时， TypeScript 并不会严格要求函数返回空。
type LogFunc = () => void

const f1: LogFunc = () => {
    return 100 // 允许返回⾮空值
}
let ret = f1()
// 可以打印,但是不能进行判断,因为返回值应该为 void
console.log(ret)
// if (ret) {
//     console.log('ret is not undefined')
// }

const f2: LogFunc = () => 200; // 允许返回⾮空值
console.log(f2())

const f3: LogFunc = function () {
    return 300 // 允许返回⾮空值
}
console.log(f3())

// 为什么会这样？
// 是为了确保如下代码成⽴，我们知道 Array.prototype.push 的返回值是⼀个数字，⽽ Array.prototype.forEach ⽅法期望其回调的返回类型是 void 。
const src = [1, 2, 3]
const dst = [0]
console.log(src)
console.log(dst)

src.forEach((el) => dst.push(el))
console.log(dst)
