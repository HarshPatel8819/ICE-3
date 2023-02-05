// ADDING ITEMS TO START AND END OF LIST
let list = document.getElementsByTagName('ul')[0]; // Get the <ul> element

// ADD NEW ITEM TO END OF LIST
let newLastItem = document.createElement('li'); // Create element
let newTextLast = document.createTextNode('half and half cream'); // Create text node
// Add text node to element
newLastItem.appendChild(newTextLast);
// Add element end of list
list.appendChild(newLastItem);

// ADD NEW ITEM START OF LIST
// Create element
let newFirstItem = document.createElement('li');
// Create text node
let textFirst = document.createTextNode('lettuce');
// Add text node to element
newFirstItem.appendChild(textFirst);
// Add element to list
list.insertBefore(newFirstItem, list.firstChild);


// All <li> elements
let listItems = document.getElementsByTagName('li');

// ADD A CLASS OF COOL TO ALL LIST ITEMS
// Counter variable
let i;
// Loop through elements
// Change class to cool
for(i = 0; i<listItems.length; i++)
{
    listItems[i].className = 'cool';
}



// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
// h2 element
let newHeadingElement = document.querySelector('h2')
// h2 text
let newHeadingText = newHeadingElement.textContent
// No. of <li> elements
let totalElements = listItems.length

console.log(newHeadingText)
console.log(totalElements)
// Content
// Update h2 using innerHTML (not textContent) because it contains markup
newHeadingElement.innerHTML = `Updated H2 and total lists are <span>${totalElements}</span>`
