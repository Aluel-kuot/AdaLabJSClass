// Global variable can be accessesd outside the function
let b=20;
function add(a){
console.log(a+b);
 b=30

// local variable cannot be accessed outside the function
// let fruit="apple"
// console.log(fruit);
}
add(50);
console.log("b2",b);

//function inside a function
function greet(){
    let hello="hi";
    function talk(){
        let c="Hello there"
        console.log(`$ {hello} $ {c}`);
    }
    talk();
}
greet();