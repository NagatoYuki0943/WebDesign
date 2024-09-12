/* 指定a的类型为never，那就意味着a以后不能存任何的数据了 */
// let a: never

// 以下对a的所有赋值都会有警告
// a = 1
// a = true
// a = undefined
// a = null


// never ⼀般是 TypeScript 主动推断出来的，例如：
// 指定a的类型为string
let a: string

// 给a设置⼀个值
a = 'hello'

if (typeof a === 'string') {
    console.log(a.toUpperCase())
} else {
    console.log(a) // TypeScript会推断出此处的a是never，因为没有任何⼀个值符合此处的逻辑
}


// never 可以用来限制函数的返回值
// 默认情况下，函数返回值类型为 undefined，即使函数没有显式的返回值。
// 函数没有返回值 never (返回 `never` 的函数不能具有可访问的终结点。)
function foo(): never{
    throw new Error('error')
}
