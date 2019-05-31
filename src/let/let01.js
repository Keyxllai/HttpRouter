// Node全局对象为global.最根本作用就是作为全局变量的宿主，

// 输出当前正在执行文件所在位置的绝对路径
//E:\work\Node\HttpRouter\src\let\let01.js
console.log(__filename);

// 当前执行脚本所在的目录
// E:\work\Node\HttpRouter\src\let
console.log(__dirname);

// process是全局变量，即global对象的属性，描述当前Nodejs进程的状态

// 获取执行的路径
// D:\Program Files\nodejs\node.exe
console.log(process.execPath);

// 运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' 或 'win32'
// 运行平台：win32; 进程号：13428; 进程名：C:\Windows\System32\cmd.exe - node  let01.js
console.log("运行平台："+ process.platform + "; 进程号："+ process.pid + "; 进程名："+ process.title);
