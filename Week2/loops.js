

// for(let bay=1; bay<=1000; bay++) {
//     console.log(`Service Bay ${bay}`);
// }


// for(let num=0; num<=12; num++){
//     console.log(`${num}*${num}=${num*num}`);
// }


let worldCupGroupA= ['South Sudan','Brasil','Taiwan'];
//This is a list of countries in world cup Group A
let capitalizedGroup=[];//This is an empty array of capitalized nations

for(let nation=0; nation<worldCupGroupA.length; nation++){
    capitalizedGroup.push(worldCupGroupA[nation].toUpperCase());
}
console.log(capitalizedGroup);