// 1. 迭代器(Iterator)，用于给数据结构提供统一的访问遍历的机制；
// 2. ES6 之前的迭代器比较麻烦，而现在引入了生成器对象，让迭代器更加容易；
// 3. 首先创建一个生成器方法，方法名前面加上*号，迭代的内容之前使用 yield；
console.log("1. 迭代器(Iterator)，用于给数据结构提供统一的访问遍历的机制");
console.log("2. ES6 之前的迭代器比较麻烦，而现在引入了生成器对象，让迭代器更加容易");
console.log("3. 首先创建一个生成器方法，方法名前面加上*号，迭代的内容之前使用 yield");


// 生成器
function* iterator() {
    // yield是生成器 1,2,3代表迭代的值
    yield 1;
    yield 2;
    yield 3;
}

// 创建迭代器
let it = iterator();
console.log(it); // Generator { }


// 4. 迭代器对象的.next()方法，类似指针，每次执行将下移一行；
console.log("4. 迭代器对象的.next()方法，类似指针，每次执行将下移一行");
// PS：属性 value 得到值，没有返回 undefined，当没有值了，done 则返回 true；
console.log(it.next()); // Object { value: 1, done: false }
console.log(it.next()); // Object { value: 2, done: false }
console.log(it.next()); // Object { value: 3, done: false }
console.log(it.next()); // OObject { value: undefined, done: true }
console.log('=========================');



// 5. 生成器结合循环语句，并且进行传递数组进行迭代；
// 作为匿名函数使用：let iterator = function* (items)；
console.log("5. 生成器结合循环语句，并且进行传递数组进行迭代");
console.log("作为匿名函数使用：let iterator = function* (items)");
let iterator1 = function* (items) {
    for (let i = 0; i < items.length; i++) {
        // 添加进迭代器
        yield items[i];
    }
}

let it1 = iterator1([2, 4, 1, ]);
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
console.log(it1.next());
//  Object { value: 2, done: false }
//  Object { value: 4, done: false }
//  Object { value: 1, done: false }
//  Object { value: undefined, done: true }
console.log('=========================');


console.log("for of 迭代器")
let it2 = iterator1([2, 4, 1, ]);
for (let item of it2) {
    console.log(item);
}
// 2
// 4
// 1

// for in 迭代器没有任何值
console.log("for in 迭代器")
for (let idx in it2) {
    console.log(idx);
}
// 没有任何值
console.log('=========================');


// 二．默认迭代接口
//  1. 很多数据结构类型拥有默认迭代接口，比如：Array、Map、Set 等等；
//  2. 对于原生就支持迭代器的数据结构，我们不用自己编写生成器迭代器；
//  3. 最简单的迭代方式，就是使用 for...of 迭代语句去遍历即可；
//  4. 它对于 Array 数组类型， 提供了有关三个方法： keys()、values() 和 entries()；
console.log("二．默认迭代接口");
console.log("1. 很多数据结构类型拥有默认迭代接口，比如：Array、Map、Set 等等；");
console.log("2. 对于原生就支持迭代器的数据结构，我们不用自己编写生成器迭代器；");
console.log("3. 最简单的迭代方式，就是使用 for...of 迭代语句去遍历即可；");
console.log("4. 它对于 Array 数组类型， 提供了有关三个方法： keys()、values() 和 entries()");

let items = [1, 2, 3, 4, 5];
console.log("keys: ", items.keys()); // keys: Array Iterator {  }
console.log("values: ", items.values()); // values: Array Iterator {  }
console.log("entries: ", items.entries()); // entries: , Array Iterator {  }


// for of 遍历的是数据  for in 遍历的是下标
// 5. 最简单的迭代方式，就是使用 for...of 迭代语句去遍历即可；
console.log("5. 最简单的迭代方式，就是使用 for...of 迭代语句去遍历即可；");
console.log("for of keys: 下标");
// 下标
for (let i of items.keys()) {
    console.log(i);
}
// 0
// 1
// 2
// 3
// 4
console.log('=========================');

// 值
console.log("for of values: 值");
for (let i of items.values()) {
    console.log(i);
}
// 1
// 2
// 3
// 4
// 5
console.log('=========================');

// 下标和值
console.log("for of entries: 下标和值");
for (let i of items.entries()) {
    console.log(i);
}
//  Array [ 0, 1 ]
//  Array [ 1, 2 ]
//  Array [ 2, 3 ]
//  Array [ 3, 4 ]
//  Array [ 4, 5 ]
for (let [idx, value] of items.entries()) {
    console.log(idx, value);
}
// 0 1
// 1 2
// 2 3
// 3 4
// 4 5
console.log('=========================');


// 6. 虽然 for...of 特别方便，不过你想要用.next()语法也是支持的；
let values = items.values();
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
console.log(values.next());
// Object { value: 1, done: false }
// Object { value: 2, done: false }
// Object { value: 3, done: false }
// Object { value: 4, done: false }
// Object { value: 5, done: false }
// Object { value: undefined, done: true }
