

const module = {exports:{}};


(function(module){
    function sum(n1,n2){
        return n1+n2
    }
    module.exports = {sum}
})(module)

const {sum} = module.exports

console.log(sum(10,20))
//console.log(multiply(a,b))