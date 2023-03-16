let num=[24,true,"hello",38];
let num2=new Array(24,true,"hello",38);

console.log(num);
console.log(num2);
num.push("foots");
//Add element at the end of the array
console.log(num);
//add at the end
num.shift(3)
console.log(num);
num.pop("hello");
console.log(num);
//map 1.Given an array of numbers x return an array of even numbers whose every 
//item in x is multiplied by 5
let x=[2,3,4,5,6];
let even =x.map(function(item){
return item*5
})
console.log(even)
//foreach
let result=[];
x.forEach(function(item){
    result.push (item*5)
})
console.log(result)
//Concatanation
let numArray=num.concat(x)
console.log(numArray)
let test=["Angela",...x,...num];
console.log(test);
//spread operator
let [a,b,c]=[1,2,3]
console.log([a,b,c])
l

