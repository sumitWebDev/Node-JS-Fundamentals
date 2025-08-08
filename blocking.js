const crypto = require("node:crypto")

console.log("Hello World");

var a = 20;
var b = 50;

// This will block main thread
crypto.pbkdf2Sync("password","salt",5000000,50,"sha512");
console.log("First Key is generated")

crypto.pbkdf2("password","salt",5000000,50,"sha512",()=>{
    console.log("Second Key is generated")
});


function multiply(x,y){
    return x*y
}

console.log(multiply(a,b))