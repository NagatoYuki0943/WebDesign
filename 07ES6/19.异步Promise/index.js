// 一．Promise 介绍
// 1. Promise：即异步通信编程的一种解决方案，它比传统回调式更加的强大；
// 2. ES6 之前非常多层次嵌套的同步、异步，执行顺序混乱且不好维护；
// 3. Promise 就很好的解决了这些问题，我们先了解一下它的语法：


// 创建一个Promise实例
// resolve: 执行成功调用方法;
// reject: 执行失败调用方法
let p0 = new Promise((resolve, reject) => {
    // 异步通信操作后，返回成功或失败
    // 然后判断成功或失败去执行 resolve 或 reject

    if (true) {
        // console.log('异步通信执行成功！');
        resolve('执行成功')
    } else {
        // console.log('异步通信执行失败！');
        reject('执行失败')
    }
});


// 执行
// then: 成功调用; catch: 失败调用
p0.then((value) => {
    console.log(value);
}).catch((reason) => {
    console.log(reason);
});
// 执行成功

// 4. 通过上面例子的语法，我们发现 p0 作为 Promise 实例，可以进行连缀链式操作；
// 5. 当执行了 then 方法后，本身依旧返回了当前的 Promise 实例，方便链式；
// 6. 注释中也说明了，通过构造方法的两个参数去执行回调函数，并传递参数；
// 7. 事实上，catch 方法还可以作为 then 第二参数进行存在，方便多层回调；

// catch 放进 then 中
p0.then(value => {
    console.log(value);
}, (reason) => {
    console.log(reason);
});
// 执行成功


// 二．实例测试
// 1. 我们做个模拟多层异步通信的实例测试，要异步多个内容，并按指定顺序执行；
// 2. 先给出不进行 Promise 异步，看它执行的顺序：

// 异步1
setTimeout(() => {
    console.log('异步1');
}, 3100);

// 异步2
setTimeout(() => {
    console.log('异步2');
}, 800);

// 异步3
setTimeout(() => {
    console.log('异步3');
}, 1500);

// 异步2
// 异步3
// 异步1



let p1 = new Promise((resolve, reject) => {
    // 模拟异步1
    setTimeout(() => {
        resolve('1.异步');
    }, 3100);
});


let p2 = new Promise((resolve, reject) => {
    // 模拟异步2
    setTimeout(() => {
        resolve('2.异步');
    }, 800);
});


let p3 = new Promise((resolve, reject) => {
    // 模拟异步3
    setTimeout(() => {
        resolve('3.异步');
    }, 1500);
});


// 异步顺序调用
p1.then(value => {
    console.log("p1.then", value);
    // 返回p2 Promise 默认返回自己
    return p2;
}).then(value => {
    console.log("p2.then", value);
    return p3;
}).then(value => {
    console.log("p3.then", value);
});

// 按照我们的执行顺序输出
// p1.then 1.异步
// p2.then 2.异步
// p3.then 3.异步
