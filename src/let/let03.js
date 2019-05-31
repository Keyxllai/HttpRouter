// JavaScript中by reference和by value

// 一、 原始数据类型(Boolean,String,Number,null,undefined)都属于by value。 这种会分配独立的存储空间
var a = 3;
var b;

b = a;
a = 2;

// a: 2
// b: 3 
console.log("a: "+ a);
console.log("b: "+ b);

var c = true;
var d;
d = c;
c = false;

// c: false
// d: true
console.log("c: "+ c);
console.log("d: "+ d);

// 二、JS中的Objects(Object, Array, Function)属于by reference


var tep = {name:"Lai"};
var tem;
tem = tep;

tep.name = "Shaun";

//结果
// { name: 'Shaun' }
// { name: 'Shaun' }
console.log(tem);
console.log(tep);


// 三、 特殊场景， 如果通过{}方式指定值，就是by value

var per = {name:"Hello"}
var son;
son = per;
console.log(per);   // { name: 'Hello' }
console.log(son);   // { name: 'Hello' }

// 分配新的内存空间地址
per = {name:"WoW"}
console.log(per);   // { name: 'WoW' }
console.log(son);   // { name: 'Hello' }
