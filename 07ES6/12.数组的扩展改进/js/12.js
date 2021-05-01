//一．运算符扩展
//1. ES6 提供了(...)三个点将一个数组转换为逗号分割来进行处理；  ...也能用于对象

let add = (x, y) => x + y;
console.log(add(...[10, 20])); //30



//2. 既然三点运算符通过逗号分割，那么可以想象的应用场景就随意发挥； 
console.log(Math.max(...[1, 2, 3])); //3
console.log(...[1, 2, 3], ...[4, 256]); //1 2 3 4 256
console.log('========================');



//二．方法的扩展
//1. ES6 提供了 Array.of()方法，它的主要目的是弥补 Array()的不足；
let items = Array(1, 2, 3);
console.log(items); //Array(3) [ 1, 2, 3 ]

//只写一个数的话会认为是数组的长度
items = Array(2);
console.log(items); //Array [ <2 empty slots> ]

//of只写一个值也能认为是数组元素
items = Array.of(3);
console.log(items); //Array [ 3 ]
console.log('========================');



//2. ES6 提供了 Array.from()方法，将类似数组的对象或遍历转换成真正的数组；
//PS：对象转换成数组要求比较严格：
//(1).key 必须是数值或字符串数字； 
//(2).length 设置长度，而且 key 在范围内； 

let obj = {
    0: 'name',
    1: 'age',
    2: 'gender',
    length: 3
};
items = Array.from(obj);
console.log(items); //Array(3) [ "name", "age", "gender" ]

//既然要求这么严格，那什么样的场景会产生这种对象？ 
//(1).DOM 的 NodeList 集合; 
//(2).ES6 新增的 Set 和 Map(后续内容)；

let nl = document.querySelectorAll('p');
console.log(nl);
//NodeList(4) [ p, p, p, p
//  ]
//  ​
//  0: <p>​
//  1: <p>​
//  2: <p>​
//  3: <p>
//  length: 4
console.log('========================');



//3. ES6 提供了 find()和 findIndex()方法，用于查找数组中第一个匹配的值； 
//find()查找值,findIndex()查找值得下标
item = [10, 20, 30, 10, 40];
console.log(item.find(value => value > 19)); //20
console.log(item.findIndex(value => value > 19)); //1
console.log('========================');



//4. ES6 提供了 fill()方法，可以填充重写数组中的元素值；
item = [1, 2, 3, 4, 5];
item.fill('a', 2, 4); //参数1:重写的值; 参数2:开始下标, 参数3:结束下标的下一个下标
console.log(item); //Array(5) [ 1, 2, "a", "a", 5 ]
console.log('========================');



//5. ES6 提供了 copyWithin 方法，从数组内部复制值，然后粘贴指定位置；
item = [1, 2, 3, 4, 5, 6, 7];
item.copyWithin(2, 0); //参数1:被替换开始下标;  参数2:替换的值开始下标;  参数3:替换的值结束下标
console.log(item); //Array(7) [ 1, 2, 1, 2, 3, 4, 5 ]