let labourCharge = 20000;
let operationCost = 30000;
let totalCost = labourCharge + operationCost;
console.log(totalCost);
let firstName = 'Victorious';
let lastName = 'Nassuuna';
let name = firstName + "" + lastName;
console.log(name);

let weather = 'rainy';
if(weather === 'rainy'){
    console.log(`You need to carry an umbrella.`);
} else if(weather === 'cloudy'){
    console.log(`You just need a jumper.`);
} else{
    console.log(`Just go outside`);
}
let number = ('Enter number:');
if(number < 0){
    console.log(`${number} is negative.`);
} else if(number==0){
    console.log(`${number} is zero.`);
} else if(number>0){
    console.log(`${number} is positive.`);
} else {
    console.log(`${number} is not a number.`);
}
