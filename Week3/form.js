
const tableBody = document.querySelector('#dataTable tbody');

const form = document.getElementById('loginForm');//Selecting the form.




//regex.
const emailRegex = /^[^\s@] + @[^\s@] + \.[^\s@] + $/;
// const telephoneNumberRegex = /^(?:\+256|0)?(7[0-9]\d{7})$/;
const nameRegex = /^[^\s@]+[A-Za-z]+$/;
const numberPlateRegex = /^[A-Z]{3}\s?\d{3}[A-Z]$/;

form.addEventListener('submit',function(event){
    event.preventDefault();
const name = document.getElementById('name1').value.trim();
const email = document.getElementById('exampleInputEmail1').value.trim();
const telephoneNumber = document.getElementById('telephone1').value.trim();
const numberPlate = document.getElementById('carType1').value.trim();
const passCode = document.getElementById('exampleInputPassword1').value.trim();
const message = document.getElementById('message');


    if(name ===""){
               message.textContent = "Customer name required";
               message.className = "text-danger";
               return;
    }
    if(email ===""){
        message.textContent = "Email required";
        message.className = "text-danger";
        return;
    }
    if(telephoneNumber ===""){
        message.textContent = "Telephone number required";
        message.className = "text-danger";
        return;
    }
    if(numberPlate ===""){
        message.textContent = "Number plate required";
        message.className = "text-danger";
        return;
    }
    if(passCode ===""){
        message.textContent = "Password required";
        message.className = "text-danger";
        return;
    }
    if(!emailRegex.test(email)=== false){
        message.textContent = "Invalid email format";
        message.className = "text-danger";
        return;
    }
 
     if(!nameRegex.test(name)=== false){
        message.textContent = "Invalid name format";
        message.className = "text-danger";
        return;
    }
    if(!numberPlateRegex.test(numberPlate)=== false){
        message.textContent = "Invalid number plate format";
        message.className = "text-danger";
        return;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${name}</td>
                       <td>${email}</td>
                       <td>${telephoneNumber}</td>
                       <td>${numberPlate}</td>
                       <td>${passCode}</td>`;
                       tableBody.appendChild(newRow);
                       

    //Success 
    message.textContent = "Customer registered successfully";
    message.className = "text-success";
loginForm.reset();

});
