// 1. 如果你想要让个普通变量的值进行交换，不必需要第三个变量参与；
console.log("1. 如果你想要让个普通变量的值进行交换，不必需要第三个变量参与");
let key = 1;
let value = 'Mr Lee';
[key, value] = [value, key];
console.log(key); // Mr Lee
console.log(value); // 1
console.log("-----------")


// 2. 如果函数的返回值是一个数组或对象，直接将函数进行赋值解构；
console.log("2. 如果函数的返回值是一个数组或对象，直接将函数进行赋值解构");
function fn() {
    return ['Mr.Lee', 100, '男'];
}
let [name, age, gender] = fn();
console.log(name, age, gender); // Mr.Lee 100 男


function fn1() {
    return {
        name1: 'Mr.Wee',
        age1: 105,
        gender1: 'futa'
    }
}
let { name1, age1, gender1 } = fn1();
console.log(name1, age1, gender1); // Mr.Wee 105 futa
console.log("-----------")


// 3. 当函数进行参数传递的时候，可以进行数组和对象字面量方式的传参；
console.log("3. 当函数进行参数传递的时候，可以进行数组和对象字面量方式的传参");
function fn2([name, age, gender]) {
    console.log(name, age, gender);
}
fn2(['MR H', 155, 'mu']); // MR H 155 mu


function fn3({ name, age, gender }) {
    console.log(name, age, gender);
}
fn3({
    name: 'JA',
    age: 45,
    gender: 'KKSK'
});
// JA 45 KKSK
console.log("-----------")


// 4. 除了对象和数组可以使用解构，字符串类型的数据也可以解构；
console.log("4. 除了对象和数组可以使用解构，字符串类型的数据也可以解构");
let [X, Y, Z] = 'ABCD';
console.log(X, Y, Z); // A B C
let [, , A] = 'ABCD';
console.log(A); // C

// length是字符串的长度属性,赋值给len
let { length: len } = 'ABC';
console.log(len); // 3
