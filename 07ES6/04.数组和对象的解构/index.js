// 一. 数组解构赋值，有两种基本的写法：1.分行解构；2 单行解构；
console.log('数组解构');

// 1. 分行解构；
let info1 = ['Mr Lee', 100, '男'];
let [name1, age1, gender1] = info1;
console.log(name1, age1, gender1); // Mr Lee 100 男



// 2. 另一种写法
let info2 = ['Mr Wang', 101, '男'],
    [name2, age2, gender2] = info2;
console.log(name2, age2, gender2); // Mr Wang 101 男



// 3. 单行解构；
let age3 = 4;
// 数组也能用() ,防止重复声明问题
([name3, age3, gender3] = ['Miss Liu', 102, '女']);
console.log(name3, age3, gender3); // Miss Liu 102 女
console.log('===========================');



// 4. 从上面的例子分行或单行，都可以确定必须一一完美匹配才可以正确赋值；
// 数组层次也需要匹配
let [name4, [age4, gender4]] = ['Mr.Qian', [15, 'male']];
console.log(name4, age4, gender4); // Mr.Qian 15 male



// 5. 用逗号作为占位符不赋值
let [, , gender5] = ['Mr.Lee', 100, '男'];
console.log(gender5); // 男



// 6. 在变量解构时，可以在数组的元素中设置一个默认值；
let [name6, age6, gender6 = 'female'] = ['Miss.Zhang', 11];
console.log(name6, age6, gender6); // Miss.Zhang 11 female



// 7. 还有一种...var 的语法，可以将没有赋值的内容都赋值给这个变量,形成一个数组；
let [name7, ...other7] = ['Mr Hai', 100, 'fff'];
console.log(name7, other7); // Mr Hai Array [ 100, "fff" ]
console.log('===========================');




// 二． 对象解构
console.log('对象解构');
let obj8 = {
    name8: 'Me',
    age8: 100
};
let { name8, age8 } = obj8; // 赋值的变量名要和对象中的名字相同
// 下面写法和上面相同
// ({ name8, age8 } = obj8)
console.log(name8, age8); // Me 100
console.log('===========================');



// 2. 如果说，解构的变量名是已经存在的变量，那原来的值会被覆盖
let obj9 = {
    name9: 'Mll',
    age9: 101
};
let name9 = 'Miao';

({ name9, age9 } = obj9); // 这里不能用let,因为有死区,重复声明了
console.log(name9); // Mll 不是Miao,是Mll
console.log('===========================');



// 3. 对象变量解构也可以设置一个默认值，在没有赋值时输出默认值；
let obj10 = {
    name10: 'Me',
    age10: 100
};
let { name10, age10, gender10 = '女' } = obj10;
console.log(name10, age10, gender10); // Me 100 女
console.log('===========================');



// 4. 如果不想要对象属性名作为解构变量，可以通过键值对的方式更改变量名；  前边是原名,后面的是自定义名字
let obj11 = {
    name11: 'Aca',
    age11: 526
};
let { name11: MyName, age11: MyAge } = obj11;
console.log(MyName, MyAge); // Aca 526
console.log('===========================');



// 5. 对象解构不需要的部分不需要占位
let obj12 = {
    name12: 'SSSS',
    age12: 156
};
// 只要age不要姓名
let { age12 } = obj12;
console.log(age12); // 156
console.log('===========================');



// 6. 在对象字面量里，还嵌套了对象，解构时也用相同的方法是解开即可；
let obj13 = {
    name13: 'Qt',
    info: {
        id: 1,
        gender: '啊'
    }
};
let { name13, info: { id, gender } } = obj13;
// console.log(info); // 这样没法输出info,只能输出id和gender,除非解构的时候只解构info,而不解构里面的值
console.log(name13, id, gender); // Qt 1 啊
console.log('===========================');



// 7. 对象的解构也支持单行的简写模式，具体如下：
let { name14, age14 } = { name14: 'Mr.Lee', age14: 100 };
console.log(name14, age14); // Mr.Lee 100
console.log('===========================');



// 8. 对象中嵌套数组
let { name15, other15: [sex, hobby] } = { name15: 'Kuwa', other15: ['futa', 'pantyhose'] };
console.log(name15, sex, hobby); // Kuwa futa pantyhose
console.log('===========================');



// 9. 数组中嵌套对象
([{ name16 }, { eng }] = [{ name16: 'siwa' }, { eng: 'stockings' }]);
console.log(name16, eng); // siwa stockings
console.log('===========================');
