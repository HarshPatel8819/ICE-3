// Name : Harsh Patel
// Student ID : 100849927
// Date : 05 - Feb -2023
console.log("JS script wired up");

// this function displayes user information in console and redirect to the home page when click on submit button.

function timedRedirect(e) {
    let contactFullName = document.getElementById('InputFullName').value;
    let contactPhoneNumber  = document.getElementById('InputPhoneNumber').value;
    let contactEmail1 = document.getElementById('exampleInputEmail').value;
    let contactMessages  = document.getElementById('InputMessages').value;
    console.log("FullName: " + contactFullName + " PhoneNumber: " + contactPhoneNumber + " Email: " + contactEmail1 + " Messages: " + contactMessages);
    e.preventDefault();
    setTimeout(function () {
        window.location.href = "index.html";
     }, 3000)
 }

let submitButton = document.getElementById('submit-button');
if (submitButton) {
    submitButton.addEventListener('click', timedRedirect, false);
}


let products = document.getElementById('products');
products.innerHTML = "Interests";