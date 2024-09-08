//1. ES6 之前只有数组一种数据结构，而现在提供了 Set 和 Map 两种集合；
//2. Set 集合是一种无重复元素的列表，使用 new Set()方法创建 Set 集合；

//C++中的set,map会自动排序,这个不会
//C++中通过insert()插入,erase()删除,clear()清除全部数据


//创建一个set集合
let set1 = new Set();
set1.add(1);
set1.add(3);
set1.add(0);
set1.add(0);
set1.add(67);
set1.add('1');
set1.add('c');
console.log(set1); //Set(6) [ 1, 3, 0, 67, "1", "c" ]


//3. 我们也可以通过构造函数传递参数的方式进行初始化集合，比如接受一个数组；
let set2 = new Set([1, 4, 4, 0, 6, 3, 7, 84, 2, 2]);
console.log(set2); //Set(8) [ 1, 4, 0, 6, 3, 7, 84, 2 ]
console.log('================================');


//4. 使用 has()方法查找是否存在指定元素，注意 2 和'2'是两个元素，不会隐式转换； 使用size属性查看多少条数据
console.log(set2.has(2)); //true
console.log(set2.has('2')); //false
console.log(set2.size); //8


//5. 还可以使用 delete()删除指定元素、clear()清空元素；
set2.delete(2);
console.log(set2.has(2)); //false
set2.clear();
console.log(set2); //Set []
console.log('================================');


//6. 我们可以使用...语法，将 Set 集合转换为数组；
let array = [...set1];
console.log(array); //Array(6) [ 1, 3, 0, 67, "1", "c" ]
console.log('================================');


//7. 我们可以使用 for 或者 forEach 来遍历 Set 集合；
//for of遍历的是属性 for in 遍历的是下标
//for...of 遍历  for of遍历的是属性 for in 遍历的是下标
for (let i of set1) {
    console.log(i);
}
//1 3 0 67 1 c
console.log('================================');

//forEach 变量
//在 Set 集合中 key 和 value 都是值
//s 表示 set 集合本身
set1.forEach((key, value, s) => {
    console.log(value);
});
//1 3 0 67 1 c
console.log('================================');


//8.Set 集合还提供针对对象的 Weak Set 集合，添加非对象类型会报错；
//9.Weak Set 集合支持 add()、has()和 delete()方法；
//10.Weak Set 不支持遍历，内部隐藏(无法查看内容)，不支持 foreach 和 size；
//11.对于应用场景来说，存放对象的弱引用，不用担心对象被回收后引发的问题；

//强引用
let st = new Set(),
    obj1 = { 1: 1 };
st.add(obj1);
console.log(st.has(obj1)); //true
//删除obj,ws中还有,因为ws是复制了一份数据
obj1 = null;
console.log(st.has(obj1)); //false
console.log('================================');


//弱引用
let ws = new WeakSet(),
    obj2 = { 1: 1 };
ws.add(obj2);
console.log(ws.has(obj2)); //true
//删除obj,ws中还有,因为ws是复制了一份数据
obj2 = null;
console.log(ws.has(obj2)); //false  函数删除之后引用随之消失
console.log('================================');
