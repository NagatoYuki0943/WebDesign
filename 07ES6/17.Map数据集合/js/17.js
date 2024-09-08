//C++中的set,map会自动排序,这个不会
//C++中通过insert()插入,erase()删除,clear()清除全部数据


//1. ES6 提供了 Map 数据集合，是一种以键值对存储的有序列表；没有重复的键值对
let map1 = new Map();
console.log(map1); //Map(0)

//设置值
map1.set('name', 123);
map1.set('name', 'Yuki');
map1.set('age', 100);
console.log(map1); //Map { name → "Yuki", age → 100 }

//size长度
console.log(map1.size); //2

//get()获取 里面填下标,获取的是值
console.log(map1.get('name')); //Yuki
console.log('==================');



//2. 我们也可以通过构造函数传递参数的方式进行初始化集合，比如接受一个数组；
let map2 = new Map([
    ['name', 'Mr Wang'],
    ['age', 12]
]);
console.log(map2); //Map { name → "Mr Wang", age → 12 }
console.log('==================');



//3. 使用 has()检测、delete()删除、clear()清空等对 Map 集合的操作；
console.log(map2.has('age')); //true
console.log(map2.delete('age')); //true
console.log(map2.has('age')); //false
map2.clear();
console.log(map2); //Map(0)
console.log('==================');



//4. 我们可以使用 forEach 来遍历 Map 集合，至于 for 遍历，下个章节说；
//value:值; key:键值; m:map自身
map1.forEach((value, key, m) => {
    console.log(key + '-' + value);
    console.log(m);
});
//name-Yuki
//Map { name → "Yuki", age → 100 }
//age-100
//Map { name → "Yuki", age → 100 }
console.log('==================');



//5. Map 集合还提供针对对象的 Weak map 集合，添加非对象类型会报错；
//6. Weak Map 不支持遍历，内部隐藏(无法查看内容)，不支持 foreach 和 size；
//7. 对于应用场景来说，存放对象的弱引用，不用担心对象被回收后引发的问题；

//弱引用
let wm = new WeakMap(),
    obj = {};
wm.set(obj);
console.log(wm.has(obj)); //true
//移出引用 
obj = null;
console.log(wm.has(obj)); //false 回收了
