// unknown 可以理解为⼀个类型安全的 any 。
// 设置a的类型为unknown
let a: unknown
//以下对a的赋值，均符合规范
a = 100
a = false
a = '你好'
// 设置x的数据类型为string
let x: string
// x = a //警告：不能将类型“unknown”分配给类型“string”


// unknown 会强制开发者在使⽤之前进⾏类型检查，从⽽提供更强的类型安全性。
// 设置a的类型为unknown
let b: unknown
b = 'hello'
//第⼀种⽅式：加类型判断
if(typeof b === 'string'){
    x = b
    console.log(x)
}

//第⼆种⽅式：加断⾔
x = b as string
//第三种⽅式：加断⾔
x = <string>b


// 读取 any 类型数据的任何属性都不会报错，⽽ unknown 正好与之相反。
let str1: string
str1 = 'hello'
str1.toUpperCase() //⽆警告
let str2: any
str2 = 'hello'
str2.toUpperCase() //⽆警告
let str3: unknown
str3 = 'hello';
// str3.toUpperCase() //警告：“str3”的类型为“未知”
// 使⽤断⾔强制指定str3的类型为string
(str3 as string).toUpperCase() //⽆警告
