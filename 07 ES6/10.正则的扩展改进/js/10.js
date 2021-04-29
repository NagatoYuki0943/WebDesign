//1. ES6 提供了 u 修饰符，对占两个字符特殊字进行正则识别；
let result = /吉{2}/.test('吉吉');
console.log(result); //true

//𠮷,站两个字符
result = /𠮷{2}/.test('𠮷𠮷');
console.log(result); //false

//添加u修饰符,特殊字就被认为是一个字符了
result = /𠮷{2}/u.test('𠮷𠮷');
console.log(result); //true
console.log('============================');



//2. ES6 提供了 y 修饰符，它的作用是当匹配过一次后继续往下匹配；
let text = 'xxx_xx_x_',
    patt = /x+_/; //不加y每次都从头开始匹配

console.log(patt.exec(text)); //Array [ "xxx_" ]
console.log(patt.exec(text)); //Array [ "xxx_" ]
console.log(patt.exec(text)); //Array [ "xxx_" ]
console.log('============================');


//添加y修饰符之后会在上次之后继续匹配
patt = /x+_/y;

console.log(patt.exec(text)); //Array [ "xxx_" ]
console.log(patt.exec(text)); //Array [ "xx_" ]
console.log(patt.exec(text)); //Array [ "x_" ]
console.log('============================');



//3. 对于 y 修饰符，ES6 提供了 stikcy 属性，用来检测是否存在 y 修饰符； 
console.log(patt.sticky); //true



//4. ES6 提供了 flags 属性，用于返回正则使用的修饰符名称； 
console.log(patt.flags); //y
console.log('============================');



//5. .表示匹配所有，除了终止符，比如回车\n 换行\n 等等，使用 s 修饰符匹配可以匹配它们； 
text = 'x\nyz';
patt = /x.+yz/;
console.log(patt.test(text)); //false

//加上s就能匹配特殊字符了
patt = /x.+yz/s;
console.log(patt.test(text)); //true
console.log('============================');


//6. ES6 支持修饰符替换，之前的这种写法会直接报错；
//i,u是修饰符,i不区分大小写,u匹配两个字的特殊字,g全局匹配
let regex = new RegExp(/xyz/iu, 'g'); //g会代替i,u
console.log(regex.flags); //g