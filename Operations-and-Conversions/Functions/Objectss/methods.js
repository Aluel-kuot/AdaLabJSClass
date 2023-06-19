let student={
    name:"ann",
    age:20,
    introduce:function() {
        console.log("Hello");
        console.log(`Hello my name is ${this.name}`);
        
    }
}
student.introduce();
    student.hobby=function(){
    console.log("I love swimming")
}
console.log(student);
student.hobby();

// deleting a value/
delete student.age;
console.log(student);middle