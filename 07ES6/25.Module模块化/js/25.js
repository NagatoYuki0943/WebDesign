//引入
import { name, sum, Person } from './module.js';

//下面直接调用即可
console.log(name); //Mr.Lee
console.log(sum(10, 20)); //30
let person = new Person('Mr.Lee');
console.log(person.run()); //Run Mr.Lee


//6. 也支持使用*号，将所有导出的内容全部加载进来；
//import * as module from './module.js';
//console.log(module.name); 
//console.log(module.sum(10, 20)); 
//console.log((new module.Person('Mr.Lee')).run());


//7. 支持别名设定，设定别名后，源名即失效了；
//import {name as user} from './module.js'; 
//console.log(user); 	//name 无效了