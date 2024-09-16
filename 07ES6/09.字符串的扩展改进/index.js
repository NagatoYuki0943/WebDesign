// 一．新增方法
// 1. 对于一些超过两个字符(四字节)的异体字，ES6 新增了 codePointAt()方法；
// 两个字符的异体字,这里用？代替，文档显示不出来，上面土，下面口

console.log("1. 对于一些超过两个字符(四字节)的异体字，ES6 新增了 codePointAt()方法"); // 2
let text1 = '𠮷';
console.log(text1.length); // 2
console.log(text1.charAt(0)); // �
console.log(text1.charCodeAt(0)); // 55362
console.log(text1.charCodeAt(1)); // 57271
console.log(text1.codePointAt(0)); // 134071 十进制码点
console.log('=======================');


// 一个字符的简体字
let text2 = '吉';
console.log(text2.length); // 1
console.log(text2.charAt(0)); // 吉
console.log(text2.charCodeAt(0)); // 21513
console.log(text2.charCodeAt(1)); // NaN 第二个字
console.log(text2.codePointAt(0)); // 21513
console.log('=======================');


// 2. 对于超过两字符的码点，可以通过 ES6 新增的 String.fromCodePoint()得到；
console.log("2. 对于超过两字符的码点，可以通过 ES6 新增的 String.fromCodePoint()得到")
// 下面可以得到：上面为土，下面为口的异体字
console.log(String.fromCodePoint(134071)); // 𠮷
console.log('=======================');


// 3. ES6 提供 normalize()方法用于有音标的符号组合形式进行统一；
console.log("3. ES6 提供 normalize()方法用于有音标的符号组合形式进行统一")
console.log('\u01D1'); // Ǒ
console.log('\u004F'); // O
console.log('\u030C');
console.log('\u004F\u030C'.normalize() == '\u01D1'.normalize()); // true
console.log('=======================');



// 4. ES6 提供了三种判断字符串的方法：
console.log("4. ES6 提供了三种判断字符串的方法")
// includes()    : 查找字符串是否存在,第二参数寻找的位置
// startsWith()  : 从头找字符串是否存在,第二参数寻找的位置
// endsWith()    : 从结尾找字符串是否存在,第二参数寻找的位置
let text = 'Hello, Mr.Lee!';
console.log("includes: ", text.includes('Mr.')); // true
console.log("startsWith: ",text.startsWith('Mr.')); // false,从头找字符串是否存在
console.log("endsWith: ", text.endsWith('Mr.')); // false,从结尾找字符串是否存在
console.log("includes: ", text.includes('Mr.', 8)); // false，超过位置，第二参数寻找的位置
console.log('=======================');



// 5. repeat()重复字符串，padStart()补全字符串头部，padEnd()补全字符串尾部；
console.log("5. repeat()重复字符串，padStart()补全字符串头部，padEnd()补全字符串尾部")
console.log('x'.repeat(5)); // xxxxx
console.log('xyz'.repeat(3)); // xyzxyzxyz
console.log('Mr.Lee'.repeat(0)); // <empty string>

// 补全5位
console.log('x'.padStart(5, 'AC')); // ACACx
console.log('x'.padEnd(5, 'ACX')); // xACXA
console.log('=======================');


// 二．模板字符串
// 1. 在 ES6 之前，字符串内夹杂变量，我们总是通过分离和+号连接解决；
console.log("1. 在 ES6 之前，字符串内夹杂变量，我们总是通过分离和+号连接解决")
let name3 = 'MR Lee',
    age3 = 100,
    text3 = '我是' + name3 + ',今年' + age3 + '岁';
console.log(text3); // 我是MR Lee,今年100岁



// 2. 现在可以直接使用(`)反引号配合${var}模版语法格式，直接实现变量解析功能；
console.log("2. 现在可以直接使用(`)反引号配合${var}模版语法格式，直接实现变量解析功能")
let text4 = `我是${name3},今年${age3}岁`;
console.log(text4); // 我是MR Lee,今年100岁



// 3. 如果我们想在字符串中插入表达式，也可以使用${a + b}模版语法；
console.log("3. 如果我们想在字符串中插入表达式，也可以使用${a + b}模版语法")
let a = 1,
    b = 2;
text5 = `${a} + ${b} = ${a + b}`;
console.log(text5); // 1 + 2 = 3



// 4. ${${}}这种模版嵌套的方式，也是支持的；
console.log("4. ${${}}这种模版嵌套的方式，也是支持的")
let flag = true;

text6 = `结果: ${flag? `true${1 + 1}`:'false' }`;
console.log(text6); // 结果: true2


// 5. 可以使用 String.raw 来得到原生字符串；
console.log("5. 可以使用 String.raw 来得到原生字符串")
text7 = String.raw `我是\a啊啊`;
console.log(text7); // 我是\a啊啊
