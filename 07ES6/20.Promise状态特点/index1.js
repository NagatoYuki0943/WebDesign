// 2. 本节课，了解一下 Promise 对象异步操作的三种状态：
//  (1) .Pending(进行中)
//  (2) .Fulfilled(已成功)
//  (3) .Rejected(已失败)

// 3. 当异步操作执行后，它得到的结果来决定其状态，其它任何操作都无法改变；
// 4. Promise 状态只有两种运行方式：从 Pending 到 Fulfilled 或 Rejected；
// 5. 而当状态已经固定后，此时就变成 Resolved(已完成)。关键字详解：请搜索；



let p1 = new Promise((resolve, reject) => {
    // 模拟异步1
    setTimeout(() => {
        // console.log('异步1');
        resolve('1.异步');
    }, 3500);
});

let p2 = new Promise((resolve, reject) => {
    // 模拟异步2
    setTimeout(() => {
        // console.log('异步2');
        resolve('2.异步');
    }, 800);
});

let p3 = new Promise((resolve, reject) => {
    // 模拟异步3
    setTimeout(() => {
        // console.log('异步3');
        resolve('3.异步');
    }, 1500);
});


console.log(p1); // Promise { <state>: "pending" }  正在执行
console.log(p2); // Promise { <state>: "pending" }  正在执行
console.log(p3); // Promise { <state>: "pending" }  正在执行


p1.then(value => {
    console.log("p1 then", value); // p1 then 1.异步
    console.log(p1); // Promise { <state>: "fulfilled", <value>: "1.异步" }   说明已完成
    console.log(p2); // Promise { <state>: "fulfilled", <value>: "2.异步" }   说明已完成
    console.log(p3); // Promise { <state>: "fulfilled", <value>: "3.异步" }   说明已完成
    // 返回 p2 Promise 默认返回自己
    return p2;
}).then(value => {
    console.log("p2 then", value); // p2 then 2.异步
    console.log(p1); // Promise { <state>: "fulfilled", <value>: "1.异步" }   说明已完成
    console.log(p2); // Promise { <state>: "fulfilled", <value>: "2.异步" }   说明已完成
    console.log(p3); // Promise { <state>: "fulfilled", <value>: "3.异步" }   说明已完成
    return p3;
}).then(value => {
    console.log("p3 then", value); // p3 then 3.异步
});
