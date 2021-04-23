//一． 数值扩展
//1. ES6 明确二进制、八进制和十六进制分别用 0b、0o、0x 作为前缀； 
console.log(Number('0b11')); //3
console.log(Number('0o11')); //9
console.log(Number('0x11')); //17
console.log('================================');



//2. ES6 提供了 Number.isFinite()、Number.isNaN()判断无穷大和 NaN； 
console.log(Number.isFinite(100)); //true
console.log(Number.isNaN(100)); //false
console.log(Number.isNaN(NaN)); //true
console.log('================================');



//3. ES6 提供了 Number.parseInt()、Number.parseFloat()转换整型和浮点型；  
//直接使用parseInt(),parseFloat()函数也可以
console.log(parseInt('55.55a')); //55
console.log(Number.parseInt('55.55a')); //55
console.log(parseFloat('55.55a')); //55.55
console.log(Number.parseFloat('55.55a')); //55.55
console.log('================================');



//4. ES6 提供了 Number.isInteger()，来判断参数是否是一个整型； 
console.log(Number.isInteger(456111)); //true
console.log(Number.isInteger('4561')); //false
console.log(Number.isInteger(4561.1)); //false
console.log('================================');



//5. ES6 提供了一个常量，值特别小，用于判断是否得到正确结果；
console.log(Number.EPSILON); //2.220446049250313e-16
console.log(Number.EPSILON.toFixed(30)); //0.000000000000000222044604925031
console.log((0.1 + 0.2 - 0.3) < Number.EPSILON); //true
console.log('================================');



//6. ES6+新增了一个指数运算符 **，并且可以进行赋值运算； 
console.log(2 ** 4); //16
let num = 2;
num **= 5;
console.log(num); //32
console.log('================================');



//二．Math 扩展 
//1. ES6 对 Math 对象新增了一些方法.trunc()、.sign()、cbrt()、clz32()；
//2. .imul()、.fround()、.hypot()、expm1()、.log1p()、log10()、log2()；

//去掉小数部分  
console.log(Math.trunc(5.55)); //5
//判断是否为正、负、0 还是 NaN 
console.log(Math.sign(-5)); //-1
//求出一个值的立方根 
console.log(Math.cbrt(2)); //-1
//求一个数的 32 位二进制 
console.log(Math.clz32(1)); //31
//两个数整数形式相乘的结果带符号
console.log(Math.imul(2, -4)); //-8
//求一个数单精度浮点形式 
console.log(Math.fround(1.555)); //1.5549999475479126
//求出所有参数平方和的平方根 
console.log(Math.hypot(3, 4)); //5
//返回 Math.exp(x)-1 
console.log(Math.expm1(-1)); //-0.6321205588285577
//求 ln(1+x),Math.log(1+x) 
console.log(Math.log1p(1)); //0.6931471805599453
//求 10 为底的 x 的对数 
console.log(Math.log10(1)); //0
//求 2 为底的 x 的对数
console.log(Math.log2(3)); //1.584962500721156