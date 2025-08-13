const fs = require("fs")
setTimeout(()=>console.log("Set Timeout"));
setImmediate(()=>{
    fs.readFile("./file.text","utf-8",()=>{
        console.log("File Reading CB second")
    })
    setImmediate(()=>console.log("Set Immediate second"));
    console.log("Set Immediate")})
Promise.resolve("Promise").then(console.log)
fs.readFile("./file.text","utf-8",()=>{
    console.log("File Reading CB")
    fs.readFile("./file.text","utf-8",()=>{
        console.log("File Reading CB third")
    })
    setImmediate(()=>console.log("Set Immediate in FS"));
})
process.nextTick(()=>{
    process.nextTick(()=>console.log("inner nextTick"));
    console.log("nextTick")
})

console.log("last line of file")