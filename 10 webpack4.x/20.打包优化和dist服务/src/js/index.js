require('css/base');
require('css/less');
require('css/strong');

//import ts
import { output } from "./type"

//console.log(output('Mr.Wang'))


import axios from 'axios'

// axios.get('https://cdn.liyanhui.com/data.json').then(res => {
//     console.log(res.data)
// })

axios.get('/api/data.json').then(res => {
    console.log(res.data)
})



const name = require('./module')
const ts = require('../img/ts.png')
const loading = require('../img/loading.gif')
// console.log(name)
// console.log(ts)
// console.log(loading)

let fn = (x, y) => x + y
//console.log(fn(10,20))

class Person {
    #name;
    constructor() {
        this.#name = 'Mr.Lee'
    }
}




