
const data = require('./data');

console.log(data);

var a = 10;
var b = 20;

var c = a + b;
console.log(c);
 if(a !== 10){
    console.log('if condition runs');
 } else{
    console.log('else condition runs');
 }

 function greet(){
    console.log('hello world');
 }

 greet();

//  for(var i = 0; i < 10; i++){
//     console.log(i)
//  }

var d = 0;
while(d <= 10){
    console.log(d);
    d++
}

let arr = [1,2,3,4,5];
console.log(arr);
for(let i = 0; i < arr.length; i++){
    console.log(arr[0]);
}

let obj = {
    name: 'demo',
    age: 29
}

console.log(obj);
