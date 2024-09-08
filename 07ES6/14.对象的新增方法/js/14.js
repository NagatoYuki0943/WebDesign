//一．新增方法
//1. ES6 提供了 Object.is()方法来解决"==="中一些恒等中的缺点；
console.log(Object.is(100, '100')); //false 不恒等
console.log(Object.is({}, {})); //false 内存指向不同

//+0,-0使用===恒等,使用is()不恒等
console.log(+0 === -0); //true
console.log(Object.is(+0, -0)); //false

//NaN使用===不恒等,使用is()恒等
console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //false
console.log('==========================');




//2. ES6 提供了 Object.assign()方法可以合并指定对象至目标对象内部；
//参数1: 目标对象;  参数2,3:替换的对象
//(1).如果属性有相同，后面的源对象内容会覆盖之前的属性值；
//(2).如果直接传非对象内容，会转换为对象；
//(3).如果传入的是 undefined 和 null 会报错；

let obj1 = {
    name: 'Mr Lee',
    age: 100
};

let obj2 = {
    name: 'Mr Wang',
    age: 200
};

let obj3 = {
    gender: '男'
};


//参数1: 目标对象;  参数2,3:替换的对象
console.log(Object.assign(obj1, obj2, obj3)); //Object { name: "Mr Wang", age: 200, gender: "男" }
console.log(obj1); //Object { name: "Mr Wang", age: 200, gender: "男" }
console.log('==========================');




//3. ES6 提供了 Object.getPrototypeOf()和 Object.setPrototypeof()方法；
let obj4 = {
    fn() {
        return 'fn1'
    }
};


let obj5 = {
    fn() {
        return 'fn2'
    }
};


//create创建对象.以obj4为原型
let f = Object.create(obj4);
console.log(f.fn()); //fn1


//Object.getPrototypeOf()获取原型对象
console.log(Object.getPrototypeOf(f) === obj4); //true
console.log(Object.getPrototypeOf(f) === obj5); //false


//Object.setPrototypeof()设置原型对象
Object.setPrototypeOf(f, obj5);
console.log(Object.getPrototypeOf(f) === obj5); //true
console.log('==========================');




//4. ES6 提供了 super 关键字，用于原型中方法的继承功能；
let obj6 = {
    fn() {
        return 'fn';
    }
};


let f1 = {
    fn() {
        //将原型的方法进行继承
        return super.fn() + ', extend!';
    }
};

//设置obj6是f1的原型
Object.setPrototypeOf(f1, obj6);
console.log(f1.fn()); //fn, extend!


//可以再设置以 f1 为原型
let h = Object.create(f1);
console.log(h.fn()); //fn, extend!
