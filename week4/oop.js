//encapsulation
let person ={
    age: 12,
    phoneNumber: "+256772544907",
    greet: function(){
        console.log("Hello, I am " + this.age + " years old. You can reach me at " + this.phoneNumber);
    }
}
console.log(person.greet())