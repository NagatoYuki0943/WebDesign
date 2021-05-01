var myArray=[1,2,4];
 
//for in 遍历的是下标
for (var index in myArray)
    console.log(index);    //0,1,2
 

//for of 遍历的是属性
for (var value of myArray) 
    console.log(value);    //1,2,4