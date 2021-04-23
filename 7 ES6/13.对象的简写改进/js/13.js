//一．简写方案 
//1. ES6 可以让对象字面量中属性初始值实现简写，一定程度降低了代码量；

//ES5 的写法 
function fn(name, age) {

    return {
        name: name,
        age: age
    }
}
console.log(fn('Mr.Lee', 15)); //Object { name: "Mr.Lee", age: 15 }


//es6写法
let fn1 = (name, age) => {
    return {
        //同名的话就写一个,不用键值对
        name,
        age
    }
}
console.log(fn1('Mr.Lee', 15)); //Object { name: "Mr.Lee", age: 15 }
console.log('==========================');



//2. ES6 还提供了对象字面量中方法的简写方式，也降低了一定的代码量；
//ES5写法
let obj = {
    fn: function() {
        return 'ES5 fn'
    }
}
console.log(obj.fn()); //ES5 fn


//ES6写法
let obj1 = {
    fn() {
        return 'ES6 fn'
    }
}
console.log(obj1.fn()); //ES6 fn
console.log('==========================');




//二．表达式方案
//1. ES6 允许对象字面量中，使用表达式进行属性名称的拼装操作； 
//拼装组合属性
let obj2 = {
    ['user' + 'Name']: 'RRRR',
    //有空格
    ['user' + ' Age']: 100,
    //字符串格式
    'user Gender': '男',
}

//对象方法调用
console.log(obj2.userName); //RRRR
//数组方式调用
console.log(obj2['userName']); //RRRR
//有空格的情况下只能用数组方式调用
console.log(obj2['user Age']); //100
console.log(obj2['user Gender']); //男
console.log('==========================');



//2.ES6 提供了在对象字面量中使用可计算(动态) 属性名称， 具体如下；
//通过变量 myName 动态更改 obj 属性名 
//问题是当变量值更改了，属性名就失效了
let myName = 'name';
let obj3 = {
    name: 'Mr.Lee'
};
console.log(obj3.name); //Mr.Lee
//通过数组中写变量的方式来调用
console.log(obj3[myName]); //Mr.Lee


//使用[myName]可计算属性名 
//实现了真正的动态计算 let 
myName = 'aaa';
let obj4 = {
    [myName]: 'Mr.Wang'
}
console.log(obj4[myName]); //Mr.Wang
console.log(obj4.myName); //undefined 这样找不到,只能使用数组方式找
console.log('==========================');



//3. ES6 在对象字面量方法上，也可以使用拼装名称； 
let obj5 = {
    ['f' + 'n']() {
        return 'fnnnn';
    }
}
console.log(obj5.fn()); //fnnnn