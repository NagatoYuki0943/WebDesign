"use strict";
class Car {
    constructor(vin, // ⻋辆识别码，为只读属性
    year, // 出⼚年份，为只读属性
    color, sound) {
        this.vin = vin;
        this.year = year;
        this.color = color;
        this.sound = sound;
    }
    // 打印⻋辆信息
    displayInfo() {
        console.log(`
        识别码：${this.vin},
        出⼚年份：${this.year},
        颜⾊：${this.color},
        ⾳响：${this.sound}
        `);
    }
}
const car = new Car('1HGCM82633A123456', 2018, '⿊⾊', 'Bose⾳响');
car.displayInfo();
// 以下代码均错误：不能修改 readonly 属性
// car.vin = '897WYE87HA8SGDD8SDGHF';
// car.year = 2020;
