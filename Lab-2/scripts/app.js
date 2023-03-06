// Name : Harsh Patel
// Student ID : 100849927
// Date :  - Feb -2023

console.log("JS script wired up");

// User class

class User 
{
  constructor(form3Example1cg,form3Example13cg,form3Example14cg) 
  {
   this.form3Example1cg = form3Example1cg;
   this.form3Example13cg = form3Example13cg;
   this.form3Example14cg = form3Example14cg;
  }
}

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

// Index Page

function displayHome() 
{


let homeTitle = document.createElement("h1");
homeTitle.setAttribute("id","homeHeader");
homeTitle.textContent = "WEBD6201 - Lab 2"

let homeParagraph = document.createElement("p");
homeParagraph.setAttribute("id", "homeParagraph");
homeParagraph.textContent = "This is the home page of this lab !!!"

let mainContent = document.getElementById("home");
console.log(mainContent)
mainContent.appendChild(homeTitle);
mainContent.appendChild(homeParagraph);
}

// product page

function displayProducts()
{
   
    let productTitle = document.createElement("h1");
    productTitle.setAttribute("id","homeHeader");
    productTitle.textContent = " My Faviourt Hobby is playing cricket.";
        
    let productImg = document.createElement("img");
    productImg.setAttribute("width", "400px");
    productImg.setAttribute("height", "400px");
    productImg.setAttribute("id", "firstImg");
    productImg.src = "https://media.gettyimages.com/id/180868820/photo/cricket-batsman-about-to-strike-ball.jpg?s=612x612&w=0&k=20&c=xRiAIk3RA6cmm1FtI2S-YK8Pei9qSkqxhX-JUbTI2Cs=";
        
    let productParagraph = document.createElement("p");
    productParagraph.setAttribute("id", "interestOne");
    productParagraph.textContent = "I love to playing cricket because It's a physical and outddor game.So it's keep our body fit and healthy.";
    let productContent = document.getElementById("product");
    productContent.appendChild(productTitle);
    productContent.appendChild(productImg); 
    productContent.appendChild(productParagraph);
  
}

// services page

function displayServices()
{

  console.log("Service Page");



    let HTMLtable = `<table id="service" >
    <tr>
        
        <th width="50%">
            <h2 style="margin-left: 300px;">Website Design</h2>
        </th>
        
    </tr>

    <tr>
        <td align="center"><img src= "https://cdn.pixabay.com/photo/2015/09/09/19/56/office-932926_960_720.jpg" width="500" height="500">></td>
    </tr>
    <tr>
        
        <td align="center">
            <h6 style="margin-left: 300px;">
                 Here, we create a web application in different languages for different plateform.
            </h6>
        </td>
       
    </tr>

    </table>`;
     
}



function Start()
{
    console.log("Site start!!")

    switch (document.title)
        {
            case "Home":
                displayHome();
            break;    
        
            case "Products":
                displayProducts();
            break;    
        
            case "Services":
                displayServices();
            break;   
        }
        
}
window.addEventListener("load", Start);