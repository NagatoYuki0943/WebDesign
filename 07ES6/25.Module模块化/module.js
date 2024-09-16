// 导出属性
//  export let name = 'Mr.Lee';

// 导出方法
//  export function sum(x, y) {
//      return x + y;
//  }

// 导出类
//  export class Person {
//      constructor(name) {
//          this.name = name;
//      }

//      run() {
//          return 'Run ' + this.name;
//      }
//  }


// 8. 统一导出方案，不需要再每一个导出的内容设置 export；
export {
    name,
    sum,
    Person
}

// 9. 可以给导出设置一个默认值，导入部分就可以不用花括号了；
// export default name;


let name = 'Mr.Lee';

function sum(x, y) {
    return x + y;
}

class Person {
    constructor(name) {
        this.name = name;
    }

    run() {
        return `Run ${this.name}`;
    }
}
