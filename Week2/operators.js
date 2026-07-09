
/*let labourCharge = 20000;
let costOfWheelAlignment = 30000; 
let totalCost=labourCharge + costOfWheelAlignment;
console.log(totalCost); */


// let num1 = 60;//Equal signs mean Assignment Operator
// let num2 = 50;
// let sum = num1 + num2;
// let difference = num1 - num2; 
// let product = num1 * num2;
// let quotient = num1 / num2;
// let modulus = num1 % num2;
// let exponential = num1 ** num2;

// console.log(sum, difference, product,quotient, modulus, exponential);



/*Assignment Operators
= */
// let x = y;
// let x = x + y; 
//  x += y;

// let x = x - y;
// x -= y;

// let x = x * y;
// x *= y;

// let x = x / y;
// x /=y ;

// let x = x % y;
// x %= y;

// let x = x ** y;
// x **= y;

// let totalCost = 0;
// let totalCost = totalCost + 30000;
//  totalCost += 30000;

let firstName = "Victorious";
let secondName = "Nassuuna";
let fullName = firstName + "" + secondName;
console.log(fullName);

/*Comparison Operators
== //loosely equal
=== //strictly equal
> //greater than
< //less than
!= //not equal
>= // greater or equal to
<= // less than or equal to
*/

let x = 5;
let y = "5";
let z = 10;
console.log(z > x);
console.log(x === y);
//x == y; //== is comparing the values of x and y but not their data types

let password1 = 543;
let password2 = 366;
console.log(password1 === password2);
console.log(password1 != password2);
console.log(z <= x);
console.log (x >= y);

let num1 = 20;
let num2=30;
console.log(num1 === num2);
console.log(num1 != num2);
console.log(num1 <= num2);
console.log(num1 >= num2);

/*Logical operators
and (&&), or(||), not(!) */
let check = 5 < 10 && 10 < password1;
console.log(check);


const labourCharge = 20000;
if(labourCharge != 20000){
    console.log('Payment Incomplete');
} else {
    console.log('Payment Complete');
}

let userName = "Admin";
let password = "1234";
if(userName === "Admin" && password === "1234"){
    console.log("Welcome, Administrator.");
};

let count = 0;
console.log(--count);
//console.log(count++);
console.log(count);

let carServiced = 9;
carServiced++;
carServiced = carServiced+1;
carServiced += 1;
console.log(carServiced);

let carServiced = 1;
carServiced +=1;
console.log(carServiced);