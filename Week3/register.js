
const input = document.getElementById('customerName');
const form = document.getElementById('customerForm');



form.addEventListener('submit',function(event){
    event.preventDefault();
    const input = document.getElementById('customerName');
    console.log('Form Submitted');
});