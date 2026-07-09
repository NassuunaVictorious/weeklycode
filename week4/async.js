let customer = {
    name:'Alendro',
    age:12,
    phoneNumber: "+256772544907"
}
let storedCustomer = JSON.stringify(customer);
console.log(storedCustomer);
let json = '{"customerName":"Victorious"}';
let customer1 = JSON.parse(json);
console.log(customer1.customerName);
//fetch(url)
//let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

const servicesUrl = './async.json';

fetch(servicesUrl)
.then(function(response){
    if (!response.ok) {
        throw new Error('Network response was not ok: ' + response.status);
    }
    return response.json();
})
.then(function(data){
    console.log('Loaded services data:', data);
    if (data.services && Array.isArray(data.services)) {
        displayServices(data.services);
    } else {
        throw new Error('No services array found in JSON data');
    }
    if (data.customers && Array.isArray(data.customers)) {
        displayCustomers(data.customers);
    }
})
.catch(function(error){
    console.warn('Using fallback services because the JSON file could not be loaded:', error);
    const fallbackServices = [
        { name: 'Oil Change', price: 2500 },
        { name: 'Oil Filter Replacement', price: 1800 },
        { name: 'Air Filter Replacement', price: 1500 }
    ];
    displayServices(fallbackServices);
})

function displayServices(services){
    const servicesList = document.getElementById('services-list');
    if (!servicesList) {
        console.error('The services list element was not found.');
        return;
    }

    servicesList.innerHTML = '';
    services.forEach(function(service){
        let listItem = document.createElement('li');
        listItem.textContent = service.name + ' - KES ' + service.price;
        servicesList.appendChild(listItem);
    })
}

function displayCustomers(customers){
    const customersList = document.getElementById('customers-list');
    if (!customersList) {
        console.error('The customers list element was not found.');
        return;
    }
    customersList.innerHTML = '';
    customers.forEach(function(customer){
        let listItem = document.createElement('li');
        listItem.textContent = customer.name + ' - ' + customer.phone;
        customersList.appendChild(listItem);
    })
}