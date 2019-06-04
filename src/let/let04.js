var fs = require("fs");

var statInfo = fs.statSync("let03.js");
console.log(statInfo);

var isFile = statInfo.isFile();

console.log("Is File: "+ isFile);  // Is File: true
var isDir = statInfo.isDirectory();

console.log("Is Dir: "+ isDir); //Is Dir: false
