"use strict";
// type 可以为任意类型创建别名，让代码更简洁、可读性更强，同时能更⽅便地进⾏类型复⽤和 扩展。
let price;
price = 100;
function printStatus(status) {
    console.log(status);
}
function logGender(str) {
    console.log(str);
}
printStatus(404);
printStatus('200');
printStatus('501');
logGender('男');
logGender('⼥');
const house = {
    height: 180,
    width: 75,
    num: 6,
    cell: 3,
    room: '702'
};
console.log(house);
