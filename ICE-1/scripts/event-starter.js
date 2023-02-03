function clickLink(e) {
    alert("I'm going to take you to " + e.innerHTML);
}

function focusButton(e) {
    e.target.style.backgroundColor = "#000000";
}s
function leaveButton(e){
    e.target.style.backgroundColor = "#a3b18a";
}

let anchors = document.getElementsByTagName('a');
for (let i =0 ; i < anchors.length; i++)
{
    anchors = anchors[i];
    anchors.addEventListener('click',clickLink, false);
}
let buttons = document.getElementsByTagName('a');
for (let i =0 ; i < anchors.length; i++)
{
    anchors = anchors[i];
    anchors.addEventListener('click',clickLink, false);
}

let list = document.getElementsByTagName('ul')[0];

let lastItem = document.createElement('li');
let lastLink = document.createElement('a');
lastLink.innerHTML = "Durham College";
lastLink.herf = "https://durhamcollege.ca/"
let firstItem = document.getElementsByTagName('li')[0];

let firstItemLink = secondItem.firstChild;
//console.log(firstItemLink);
firstItemLink.href = "https://google.com/"

let secondItem = document.getElementsByTagName('li')[1];

let secondItemLink = secondItem.firstChild.nextSibling;
secondItemLink.href = "https://w3schools.com/"