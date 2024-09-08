//2. 本节课，了解一下 Promise 对象异步操作的三种状态：
// (1) .Pending(进行中)
// (2) .Fulfilled(已成功)
// (3) .Rejected(已失败)

//3. 当异步操作执行后，它得到的结果来决定其状态，其它任何操作都无法改变；
//4. Promise 状态只有两种运行方式：从 Pending 到 Fulfilled 或 Rejected；
//5. 而当状态已经固定后，此时就变成 Resolved(已完成)。关键字详解：请搜索；



let p1 = new Promise((resolve, reject) => {
    //模拟异步1
    setTimeout(() => {
        //console.log('异步1');
        resolve('1.异步');
    }, 3500);
});

let p2 = new Promise((resolve, reject) => {
    //模拟异步2
    setTimeout(() => {
        //console.log('异步2');
        resolve('2.异步');
    }, 800);
});

let p3 = new Promise((resolve, reject) => {
    //模拟异步3
    setTimeout(() => {
        //console.log('异步3');
        resolve('3.异步');
    }, 1500);
});


console.log(p1); //Promise { <state>: "pending" }  正在执行


p1.then(value => {
    console.log(value);
    console.log(p1); //Promise { <state>: "fulfilled", <value>: "1.异步" }   说明已完成
    //返回p2 Promise 默认返回自己
    return p2;
}).then(value => {
    console.log(value);
    return p3;
}).then(value => {
    console.log(value);
});



//二．更多方法
//1. 上一节课，我们使用了三组 Promise 实例完成三段异步的排序输出问题；
//2. Promise 提供了一个 all()方法，可以简化多个实例调用输出排序；

//p1,p2,p3 是三个 Promise 实例，数组元素顺序即输出顺序
//运行顺序就是数组的顺序,将上面的多行then写成1行
let p = Promise.all([p1, p2, p3]);

p.then(value => {
    console.log(value); //Array(3) [ "1.异步", "2.异步", "3.异步" ]
});



//3. Promise 提供了一个 race()方法，只输出第一个改变状态的实例；
//谁快返回谁
p = Promise.race([p1, p2, p3]);
p.then(value => {
    console.log(value); //2.异步  2最快了
});



//4. Promise 提供了 resolve()和 reject()，直接返回一个成功或失败的实例；
let ps = Promise.resolve('成功');
let pr = Promise.reject('失败');


ps.then(value => {
    console.log(value); //成功
    //成功之后返回pr
    return pr;
}).catch(reason => {
    console.log(reason); //失败
})

//等价于
new Promise(resolve => resolve('成功'));


//最常用的场景
//成功和失败返回的数据类型不相同,会导致报错,比如下面的失败返回的就是0
function getP() {
    if (false) {
        return new Promise(resolve => {
            resolve('getP异步成功'); //getP异步成功
        })
    } else {
        //return 0; //这样写和成功时返回的数据类型不一致
        return Promise.resolve(0); //强制类型一致保证程序正确性 Promise.resolve(0)
    }
}

getP().then(value => {
    console.log(value);
})
