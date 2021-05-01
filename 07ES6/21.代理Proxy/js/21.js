//一．代理能力
//1. 什么是代理？即：给目标对象封装一层拦截，外界访问必须先通过这层拦截； 
//2. 举个例子：猎头招聘，你自己发布招聘会暴露自身信息，而通过中介则安全的多； 
//3. 首先，我们先来看下代理 Proxy 的语法：

//
let obj1 = {
    name: 'Mr Lee',
    age: 100,
    gender: '男'
}


console.log(obj1.name); //Mr Lee



//4. 如果想让代理对象公布出合适的信息，可以通过 get()两个参数来实现； 
//创建一个代理，参数 1 拦截的目标对象，参数 2 拦截行为 
//参数 2 如果是空对象，代理直接会调用目标对象 
let p1 = new Proxy(obj1, {
    //get 方法用于拦截某个属性的读取操作 
    //target指的是原生对象;  property指的是要获取的属性
    get(target, property) {
        //这里直接 return，通过代理对象无论访问目标对象的任何属性都是 fail 
        //return 'fail';

        if (property === 'age') {
            return target[property] - 80; //返回原生对象的 age - 80
        } else {
            return 'fail';
        }
    }
});

//Proxy进行了屏蔽
console.log(p1.name); //fail
console.log(p1.age); //20
console.log(p1.a); //fail  不存在的数据也返回fail
console.log('==================');



//5. 我们也可以通过 set()方法来对代理对象的属性进行赋值，有三个参数；
let p2 = new Proxy(obj1, {
    //target:目标对象; property:属性名;  value:传递过来的属性值
    set(target, property, value) {
        //只能修改年龄
        if (property === 'age') {
            //年龄必须是数字同时有范围设定,否则抛出异常
            if (Number.isInteger(value) && value < 150 && value > 15) {
                target[property] = value;
            } else {
                throw new TypeError('年龄不合法');
            }
        } else {
            return 'fail';
        }
    }
});

//赋值失败
p2.name = 'KAKAKA';
console.log(p2.name); //Mr Lee
//赋值成功
p2.age = 17;
console.log(p2.age); //17
console.log(obj1.age); //17



//PS：代理并不是复制克隆目标对象，只是拦截目标对象更改默认行为； 
//PS：代理可以使用 set()和 get()方法，对目标对象的数据进行过滤和验证； 
//PS：代理对象中任何未公开或不存在的属性，可自定义返回内容，比如：fail 或已屏蔽； 
//PS：代理也可以阻止赋值的默认行为：直接 return false，就禁止赋值了；