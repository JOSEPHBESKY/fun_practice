//  function decleration;
function myfun(a,b){
    console.log(a+b)
}
myfun(2,3)

function myfun1(a,b){
    var c=a+b
    return c
}
console.log(myfun1(2,3))

// function expression
const myfun2=function () {
console.log('joseph besky')
}
myfun2()

// arrowfunction
const myfun4=(n)=>{
    console.log(n); 
}
myfun4('jose')

// callback function
function print (getname,callback){
   console.log('hi+'+getname);
    callback() 
}
function callme() {
    console.log('iam');
}
print('geeks',callme)

function first(callback) {
    console.log('message')
    callback()
}

function callback() {
    console.log('callback fun');
}

first(callback)

// nested function

function one() {
    console.log(1);
    function two() {
        console.log(2);
        function three() {
            console.log(3);
        }
        return three()
    }
     return two()
}
one()

// promise
let pro=val=>new Promise((resolve,reject)=>{
    resolve(val+1)
})
pro(10).then(x=>x+20).then(console.log)

const f1=(val,callback)=>{
    return callback(val+10)
}
const callback=(val)=>{
    return val+20
}
console.log(f1(1,callback));

// promis.all
p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
    },1000)
})

p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
    },1000)
})

Promise.all([p1,p2]).then(console.log).then(console.log)

// asyn await
async function greet() {
    console.log('first');
    const res= await myfun()
    console.log('another log');
}
let func=greet()
console.log(func);

// recursion
function recurse() {
    recurse()
}
recurse()

// closures
function counter() {
    let count=0
    function increment() {
        return count+=1
    }
    return increment
}
counter()

// currying
function multiply(x) {
    return (y)=>{
        return (z)=>{
            return x*y*z
        }
    }
}
console.log(multiply(1)(2)(3));