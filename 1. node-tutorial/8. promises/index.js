const { rejects } = require("assert")
const { resolve } = require("path")

function delaytime(time){
    return new Promise((resolve)=> setTimeout(resolve,time))
}

console.log("Promise starts here")
delaytime(2000).then(()=> console.log("Promise execution after 2 seconds"))
console.log("ends")



function divide(num1,num2){
     return new Promise((resolve,reject)=>{
        if(num2==0){
            reject("Can not perform division by zero")
        }else{
            resolve(num1/num2)
        }
     })
}

divide(10,5)
.then((resolve)=> console.log(resolve,"res"))
.catch((reject)=> console.log(reject,"rej"))