// fs.readfile

const fs = require("fs");
// file module

fs.readFile("for asyncFn2.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");
let a = 0;
for(let i =0 ;i<10000000;i++){
    a++;
}
console.log("hi there2");