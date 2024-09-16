// window是浏览器顶层对象
console.log(window.name); // <empty string>
console.log(window.a); // undefined


// name就是window.name
console.log(name); // <empty string>
console.log(name === window.name); // true

// 不存在的属性
// console.log(abcd); // abcd is not defined
console.log("===============================");



// var name会覆盖浏览器name
var name = 'Mr Lee';
console.log(name); // Mr Lee
console.log(window.name); // Mr Lee  window.name被var的name覆盖了


// 设置的变量自动变为window变量
var b = 10;
console.log(window.b); // 10
console.log("================================");



// 1. ES6 之前只有全局作用域和函数作用域，并没有所谓的块级作用域；
// 2. 上一节课的循环体和条件体就是块级作用域，也就是两个花括号区域：{}；
// 3. 如果在块级区域不使用 let，就会造成全局变量污染的问题；
{
    {
        let value = 10;
    }
    // console.log(value); // value is not defined 找不到,在不同的作用域
}
console.log("================================");



// 在 ES6 之前，采用自我立即执行匿名函数的方式来防止变量污染
(function() {
    var value = 10;
})();
// console.log(value); // value is not defined  外部访问不到
console.log("================================");



// 6. ES6 之前函数必须在顶层声明，但违反并不报错，而 ES6 开始支持块级作用域中声明函数；
// 7. 只不过块级作用域内的函数声明，还是可以在全局可访问，并没有封闭；
{
    function fn() {
        console.log('块级函数');
    }
    fn(); // 块级函数
}
fn(); // 块级函数 外面依然可以访问
console.log("================================");



// 那么此时，推荐使用函数表达式的方式去构建函数即可；外部就不能访问了
{
    let fn1 = function() {
        console.log('fn1');
    }
    fn1(); // fn1
}
fn1(); // f1 is not defined    外部没法访问内部函数了
