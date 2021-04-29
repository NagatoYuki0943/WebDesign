//一．箭头函数 

//1. ES6 新增了一个使用(=>)箭头符号定义函数的语法特性，先来个最简单的；
let fn = name => name;
//翻译成函数代码为
// let fn = function(name){
//     return name;
// }
console.log(fn('MR LEE')); //MR LEE



//2. 箭头函数也可以传递两个或以上的参数，并实现运算后返回；
let fn1 = (x, y) => x + y;
//翻译成函数代码为
// let fn1 = function(x, y) {
//     return x + y;
// }
console.log(fn1(1, 3)); //4



//3. 如果你定义的函数，并不需要传递参数，可以用()括号方式直接返回；
let fn2 = () => 'MR Lee';
console.log(fn2()); //MR Lee



//4. 如果函数体需要更复杂的操作，可以将箭头符号右边使用传统函数体； 
let fn3 = (x, y) => {
    console.log(x + y - x - y);
};
fn3(1, 2); //0



//5. 如果箭头符号右边是对象，返回的是对象，则需要用圆括号包含着； 
let fn4 = name => ({ name: name, age: 100 });

//翻译成函数代码为
// let fn4 = function(name) {
//     return { name: name, age: 100 }
// }
console.log(fn4('MR Wang')); //Object { name: "MR Wang", age: 100 }



//6. 如果箭头符号左边是对象作为参数，右边是对象的属性运算，也支持
let fn5 = ({ name, age }) => name + ',' + age;
console.log(fn5({ name: 'KA', age: 17 })); //KA,17



//7. 自我立即执行函数，也可以使用箭头符号来创建，具体如下：  前面的函数体被一个()包裹,后面的参数被另一个()包裹
((name) => {
    console.log(name);
})('MRRR'); //MRRR

//翻译成函数代码为
(function(name) {
    console.log(name);
})('MRRR');




//二．绑定 this 
let obj1 = {
    name: '11111',
    age: 100,
    fn: function() {
        console.log(this); //this指向的是对象
    }
}
obj1.fn(); //Object { name: "11111", age: 100, fn: fn() }



let obj2 = {
    name: '11111',
    age: 100,
    fn: function() {
        setTimeout(function() {
            console.log(this);
        }, 500)

        //console.log(this); //this指向的是对象
    }
};
obj2.fn(); //Window  指的是window



//6. 箭头函数的出现，彻底解决了 this 在内部指向的问题，直接指向我们所需要； 
//7. 因为，箭头函数中的 this 是最外层定义的函数绑定，不受内部影响；
let obj3 = {
    name: '11111',
    age: 100,
    fn: function() {
        setTimeout(() => {
            console.log(this);
        }, 500)

        //console.log(this); //this指向的是对象
    }
}
obj3.fn();
//Object { name: "11111", age: 100, fn: fn() }  这样就能找到obj3了