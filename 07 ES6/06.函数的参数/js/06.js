//1. ES6 之前函数是无法给参数设置默认值的，而 ES6 支持了这个特性
//除了name都有默认值
function fn1(name,
    age = 100,
    arr = [],
    obj = {},
    callback = function() {}) {

    console.log(name);
    console.log(age);
    console.log(arr);
    console.log(obj);
    console.log(callback);
}
fn1('RM E');
//RM E
//100
//Array []
//Object {  }
//function callback()
console.log("=========================");


function fn2(name,
    age = 100,
    arr = [],
    obj = {},
    callback = function() {}) {

    console.log(name);
    console.log(age);
    console.log(arr);
    console.log(obj);
    //函数参数是callback
    console.log(callback('callback'));
}


fn2(
    'AC',
    123, [4, 5, 6], { key: 1 },
    function(info) {
        return info;
    }
);
//AC
//123
//Array(3) [ 4, 5, 6 ]
//Object { key: 1 }
//callback
console.log("=========================");



//2. 函数参数的默认值，也可以是另一个函数的返回值；
function pi() {
    return 3.14;
}

function fn3(r, p = pi()) {
    return r * r * p;
}

let res = fn3(10);
console.log(res); //314



//3. 如果只想传递第二往后的参数，参数一保持默认值，可用 undefined 占位；
function fn4(name, age = 15, gender) {
    console.log(name, age, gender);
}

fn4('mingming', undefined, 'futa'); //mingming 15 futa



//4. 支持参数二使用参数一的值作为默认值，反之不可以；
function fn5(X, Y = X) { //Y = X, X 错误
    console.log(X, Y);
}
fn5(1); //1 1



//5. 解构变量有不定元素，那么函数的参数也可以有不定参数；   other是以数组的形式存在的
function fn6(name, ...other) { //不定参数之后不可再有参数
    console.log(other);
    console.log(other[0]); //100
    console.log(other[1]); //"aaa"
}
fn6('Mr', 100, 'aaa') //Array [ 100, "aaa" ]



//6. ES6 提供了一个 name 属性用于获取函数名，以方便开发者； 
function fn7() {

}

let fn8 = function() {

}

let obj = {
    fn: function() {}
}

console.log(fn7.name); //fn7
console.log(fn8.name); //fn8
console.log(obj.fn.name); //fn
console.log((new Function()).name); //anonymous   是匿名函数