//how async function works

console.log("hey1");
console.log("hey2");
setTimeout(function(){
    console.log("hey3");
},0); // it goes to sideStack 

console.log("hey4");