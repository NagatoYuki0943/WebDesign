//在这里引入css和less
require('./base.css');
require('./less.less');
const name = require('./module.js');

//引入图片
const ts = require('./ts.png');
const loading = require('./loading.gif');
console.log(name);
console.log(ts);
console.log(loading);