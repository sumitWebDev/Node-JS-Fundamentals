const fs = require("fs");
const https = require ("https");

console.log("Hello World");

var a = 20;
var b = 50;

https.get("https://dummyjson.com/products/1"),((res)=>{
    console.log("Fetched Data Successfully")
})

setTimeout((res)=>{
    console.log("Fetched Data Successfully")
},5000)

fs.readFile("./file.txt","utf8",(err,data)=>{
 console.log("File Data: ",data)   
})

function multiply(x,y){
    return x*y
}

console.log(multiply(a,b))