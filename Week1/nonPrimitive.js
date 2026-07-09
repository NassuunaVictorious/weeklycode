//The purpose of an object is to store info about one thing.It answers the question what is it
//The purpose of an array is to store many things. It answers the question how many are they
//The purpose of a function is to perform an action. It answers the question should we do this..

/*object*/
let customer = {
    name: "Kabanda Leon",
    phoneNumber:"0734680236"
}

/*Arrays*/
let customers = [{
    name: "Norman Gerole",
    phoneNumber:"0768279537"
},
{
    name: "Oyet Edmond",
    phoneNumber:"0772579579"
},


]

let javaScriptClass = ["Victorious", "Okello", "Twinkle", "Shatra"]
let eastAfricanCountries = ["Uganda","Kenya","Tanzania","Oregon","Canada"]
let rectangle = {
    length: 10,
    width:5
}

let person = {
    firstName:"Innocent",
    otherName:"Mujuzi",
    age: 30
}

/*Functions*/
function takeAttendance(){
    console.log("attendance taken")

}
function assignTechnician(){
    console.log("technician assigned")
}
function calculateBill(serviceCost,labourCharge){
    return serviceCost + labourCharge
}
let car = {
    brand:"Toyota",
    model:"Hillux",
    numberPlate:"UAA 907 ",
    startEngine(){
        console.log("vroom")
    }
}
