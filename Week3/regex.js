let sentence = "My name is Victorious";
let pattern = /Victorious/;
let searchResult = pattern.test(sentence);
console.log(searchResult);

let email = "victorieusefn@@gmail.com";
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let testResult = emailPattern.test(email);
console.log(testResult);