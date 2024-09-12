// void 通常⽤于函数返回值声明
// 注意：编码者没有编写 return 指定函数返回值，所以 logMessage 函数是没有显式 返回值的，
// 但会有⼀个隐式返回值 ，是 undefined ，虽然函数返回类型为 void ，但 也是可以接受 undefined 的，
// 简单记： undefined 是 void 可以接受的⼀种“空”。
function logMessage(msg: string): void{
    console.log(msg)
}
logMessage('你好')


// 以下写法均符合规范
// ⽆警告
function logMessage1(msg: string): void{
    console.log(msg)
}
logMessage1('你好')

// ⽆警告
function logMessage2(msg: string): void{
    console.log(msg)
    return;
}
logMessage1('你好')

// ⽆警告
function logMessage3(msg: string): void{
    console.log(msg)
    return undefined
}
logMessage1('你好')



function logMessage4(msg: string): void{
    console.log(msg)
}
let result = logMessage4('你好')
if(result){ // 此⾏报错：⽆法测试 "void" 类型的表达式的真实性
    console.log('logMessage有返回值')
}

function logMessage5(msg: string): undefined{
    console.log(msg)
}
let result1 = logMessage5('你好')
if(result1){ // 此⾏⽆警告
    console.log('logMessage有返回值')
}

// 1. 从语法上讲：函数是可以返回 undefined 的，⾄于显式返回，还是隐式返回，这⽆所谓！
// 2. 从语义上讲：函数调⽤者不应关⼼函数返回的值，也不应依赖返回值进⾏任何操作！ 即使我们知道它返回了 undefined 。