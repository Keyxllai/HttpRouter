let events = {};
console.log('{} type is: '+ typeof events)

let x : {[name:string]:number} ={12:1,"121":10, 12.3:123}

console.log('X type is: '+ typeof x)

console.log(x["121"])
console.log(x["12"])