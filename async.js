const fs = require("fs");
const https = require ("https");

//Sync function block main execution
// const data = fs.readFileSync("./file.txt","utf8");
// console.log(data)

console.log("Hello World");

var a = 20;
var b = 50;

// This will wait unless Global execution context is removed from the stack
setTimeout((res)=>{
    console.log("Fetched Data Successfully ASAP")
},0)

https.get("https://dummyjson.com/products/1"),((res)=>{
    console.log("Fetched Data Successfully")
})



setTimeout((res)=>{
    console.log("Fetched Data Successfully")
},5000)

// Async function does not block main execution thread
fs.readFile("./file.txt","utf8",(err,data)=>{
 console.log("File Data: ",data)   
})



function multiply(x,y){
    return x*y
}

console.log(multiply(a,b))