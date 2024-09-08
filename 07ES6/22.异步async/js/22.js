//一．async 语法    ES8提供
//1. async 也是处理异步的，它是对 Promise 的一种扩展，让异步更加方便；
//2. 优势：async 是基于 Promise 的，虽然是异步操作，但看上去像同步；
//3. 首先，我们先来看下 async 的基本语法；


let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('1.异步');
    }, 3500);
});

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('2.异步');
    }, 800);
});

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('3.异步');
    }, 1500);
});


//async语法
let as = async() => {
    //返回回调
    let result = await p2;
    console.log(result);
}

//调用函数 ES6写法
as(); //2.异步


//ES5写法
// async function as() {
//     let result = await p2;
//     console.log(result);
// }
// as();



// p1.then(value => {
//     console.log(value);
//     console.log(p1);
//     //返回p2 Promise 默认返回自己
//     return p2;
// }).then(value => {
//     console.log(value);
//     return p3;
// }).then(value => {
//     console.log(value);
// });


//4. 如果有三个异步需要列队输出，我们用 async 语法来处理一下；
let as1 = async() => {
    //返回回调函数
    let r1 = await p1,
        r2 = await p2,
        r3 = await p3;

    console.log(r1, r2, r3);
}
as1(); //1.异步 2.异步 3.异步

//PS：await 关键字只能在 async 函数内部，否则不可识别；
//PS：从上面的例子中，能感受到语义和清晰度都得到了很大提升，更像同步代码；


//批量异步列队，类似 Promise.all()
as2 = async() => {
    //一次注册3个
    let all = [await p1, await p2, await p3];
    console.log(all); //Array(3) [ "1.异步", "2.异步", "3.异步" ]
}
as2();



//5. async 函数如果设置了返回值，这个值是 Promise 对象。
as3 = async() => {
    return 'hello world';
}

as3().then(value => {
    console.log(value); //hello world
})


//PS：如果 return await p；这种，会导致提前输出 pending 状态，还是需要 then；
let as4 = async() => {
    //返回回调
    return await p1;
}

//会输出状态,里面的内容还是要用.then
console.log(as4()); //Promise { <state>: "pending" }
as4().then(value => {
    console.log(value); //1.异步
})
