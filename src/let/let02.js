// Step 1:

// 当函数放在对象里面时候，那么该函数里面的this指就是该对象本身
var obj ={
	name: "I'm obj",	
	log: function(){
		this.name = "Update obj name SUCCESS",//修改this.name
		console.log(this);
	}
}

// 由于上面函数里面的this指就是obj本身，能够成功修改obj的name属性
// 结果： { name: 'Update obj name SUCCESS', log: [Function: log] }
obj.log();

// Step 2:

// 如果在log函数里面在建立一个函数，
var obj2 ={
	name: "I'm obj2",	
	log: function(){
		this.name = "Update obj2 first SUCCESS",//修改this.name
        console.log(this);
        
        var setName = function(newName){
            // 这种情况this指是全局变量
            this.name = newName;
            //console.log(this); //输出的是Nodejs global全局对象
        }

        setName("Update obj2 Second SUCCESS");

        console.log(this);
	}
}

// 结果如下： SetName函数并没有修改name成功
// { name: 'Update obj2 first SUCCESS', log: [Function: log] }
// { name: 'Update obj2 first SUCCESS', log: [Function: log] }
obj2.log();