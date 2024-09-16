// Node 下有自己的导出和导入的加载模式：CommonJS 规范；
let name = 'Mr.Lee';


module.exports = {
    name : name,
};


const name = require('./common.js');
console.log(name);
