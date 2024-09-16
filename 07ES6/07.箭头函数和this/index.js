// 一．箭头函数
console.log('一．箭头函数');

// 1. ES6 新增了一个使用(=>)箭头符号定义函数的语法特性，先来个最简单的；
console.log("1. ES6 新增了一个使用(=>)箭头符号定义函数的语法特性，先来个最简单的；");
let fn = name => name;
// 翻译成函数代码为
//  let fn = function(name){
//      return name;
//  }
console.log(fn('MR LEE')); // MR LEE



// 2. 箭头函数也可以传递两个或以上的参数，并实现运算后返回；
console.log("2. 箭头函数也可以传递两个或以上的参数，并实现运算后返回；");
let fn1 = (x, y) => x + y;
// 翻译成函数代码为
//  let fn1 = function(x, y) {
//      return x + y;
//  }
console.log(fn1(1, 3)); // 4



// 3. 如果你定义的函数，并不需要传递参数，可以用()括号方式直接返回；
console.log("3. 如果你定义的函数，并不需要传递参数，可以用()括号方式直接返回；");
let fn2 = () => 'MR Lee';
console.log(fn2()); // MR Lee



// 4. 如果函数体需要更复杂的操作，可以将箭头符号右边使用传统函数体；
console.log("4. 如果函数体需要更复杂的操作，可以将箭头符号右边使用传统函数体；");
let fn3 = (x, y) => {
    console.log(x + y - x - y);
};
fn3(1, 2); // 0



// 5. 如果箭头符号右边是对象，返回的是对象，则需要用圆括号包含着；
console.log("5. 如果箭头符号右边是对象，返回的是对象，则需要用圆括号包含着；");
let fn4 = name => ({ name: name, age: 100 });

// 翻译成函数代码为
//  let fn4 = function(name) {
//      return { name: name, age: 100 }
//  }
console.log(fn4('MR Wang')); // Object { name: "MR Wang", age: 100 }



// 6. 如果箭头符号左边是对象作为参数，右边是对象的属性运算，也支持
console.log("6. 如果箭头符号左边是对象作为参数，右边是对象的属性运算，也支持");
let fn5 = ({ name, age }) => name + ',' + age;
console.log(fn5({ name: 'KA', age: 17 })); // KA,17



// 7. 自我立即执行函数，也可以使用箭头符号来创建，具体如下：前面的函数体被一个()包裹,后面的参数被另一个()包裹
console.log("7. 自我立即执行函数，也可以使用箭头符号来创建，具体如下：前面的函数体被一个()包裹,后面的参数被另一个()包裹");
((name) => {
    console.log(name);
})('MRRR'); // MRRR

// 翻译成函数代码为
(function(name) {
    console.log(name);
})('MRRR');




// 二．绑定 this
// 普通函数中的this
// 在普通函数中，this的值取决于函数的调用方式：
// 1. 当函数作为对象的方法被调用时，this指向该对象。
// 2. 但是，当函数在其他上下文中被调用时（如setTimeout），
//   this可能会指向全局对象（在浏览器中是window）或者是undefined（在严格模式下）。

// 箭头函数中的this
// 箭头函数的this行为与普通函数不同：
// 1. 箭头函数没有自己的this绑定。它会捕获其所在（词法）上下文的this值，作为自己的this值。
// 2. 这意味着箭头函数中的this是在定义函数时确定的，而不是在执行函数时确定的。

// 主要差别
// 1. 上下文绑定：
//  - 普通函数：this在运行时绑定，取决于函数如何被调用。
//  - 箭头函数：this在定义时就被绑定，继承自外围作用域。
// 2. 灵活性：
//  - 普通函数：可以通过call、apply或bind方法改变this指向。
//  - 箭头函数：this指向无法被改变，即使使用call、apply或bind也不行。
// 3. 适用场景：
//  - 普通函数：适合需要动态上下文的场景，如对象方法、构造函数等。
//  - 箭头函数：适合需要保持外部上下文的场景，如回调函数、事件处理器等。


console.log('二．绑定 this');
let obj1 = {
    name: '11111',
    age: 100,
    fn: function() {
        console.log("obj1", this); // this指向的是对象
    }
}
obj1.fn();
// obj1 Object { name: "11111", age: 100, fn: fn() }


// 2. 下面代码中的 setTimeout 中的 this 全局指向 window，在某个对象内部指向当前对象；
// 3. 当 obj 对象下包含了类似 setTimeout 函数内部，这时 this 指向就出现问题了；
// 4. Web 环境下，它指向了 Window，而 node 环境下它指向 setTimeout；
console.log("2. 下面代码中的 setTimeout 中的 this 全局指向 window，在某个对象内部指向当前对象")
console.log("3. 当 obj 对象下包含了类似 setTimeout 函数内部，这时 this 指向就出现问题了")
console.log("4. Web 环境下，它指向了 Window，而 node 环境下它指向 setTimeout")
let obj2 = {
    name: '11111',
    age: 100,
    fn: function() {
        console.log("obj2", this);

        setTimeout(function() {
            console.log("obj2", this);
        }, 0)
    }
};
obj2.fn();
// obj2 Object { name: "11111", age: 100, fn: fn() }
// obj2 Window  // SetTimeout 中 this 指向 window，而不是 obj2


// 5. 所以，我们通俗的做法，就是将 this 在 setTimeout 外部进行赋值保存；
console.log("5. 所以，我们通俗的做法，就是将 this 在 setTimeout 外部进行赋值保存");
let obj3 = {
    name: '11111',
    age: 100,
    fn: function() {
        console.log("obj3", this);
        // 之前的解决办法, 将外层的 this 保存到变量中
        that = this;
        setTimeout(function() {
            console.log("obj3", that);
        }, 0)
    }
};
obj3.fn();
// obj3 Object { name: "11111", age: 100, fn: fn() }
// obj3 Object { name: "11111", age: 100, fn: fn() }


// 2. 箭头函数中的 this 指向的是外层作用域的 this，而不是函数定义时的 this；
// 6. 箭头函数的出现，彻底解决了 this 在内部指向的问题，直接指向我们所需要；
// 7. 因为，箭头函数中的 this 是最外层定义的函数绑定，不受内部影响；
console.log("2. 箭头函数中的 this 指向的是外层作用域的 this，而不是函数定义时的 this");
console.log("6. 箭头函数的出现，彻底解决了 this 在内部指向的问题，直接指向我们所需要");
console.log("7. 因为，箭头函数中的 this 是最外层定义的函数绑定，不受内部影响");
let obj4 = {
    name: '11111',
    age: 100,
    fn: function() {
        console.log("obj4", this);

        setTimeout(() => {
            console.log("obj4", this);
        }, 0)
    }
}
obj4.fn();
// obj4 Object { name: "11111", age: 100, fn: fn() }  这样就能找到obj4了
// obj4 Object { name: "11111", age: 100, fn: fn() }
