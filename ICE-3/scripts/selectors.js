console.log('selectors.js loaded');

function highlight(element){
    element.css("background-color","#a1ff0a")
}

function cssSelectors(){
    // all paragraphs
    $('p').css('background-color', '#2a9d8f');
    
    // using classes
    $('.red-box').css('background-color', '#2a9d8f');

    // using ids
    // $('#list').css('background-color', '#2a9d8f');

    // multiple selectors
    $('h1,h2').css('background-color', '#3a86ff');
    $('li:even').css('background-color', 'red');


}

function traversingTheDOM(){
    $('#list').find('li').css('background-color', '#3a86ff');

    // // all parents of the ul
    // $('#list').parents('body').css('background-color', 'darkblue');

    // // direct parents
    // $('#list').parent('div').css('font-size', '20px');

    //

    //prev & next
    $('#list').prev().css('background-color', '#3a86ff');
    $('#list').next().css('background-color', '#3a86ff');
    $('#list').prev().next().css('background-color', '#3a86ff');

}

function filtering(){

    // $('#list').find('li').filter(':even').css('background-color', '#3a86ff');

    // $('#list').filter(function (index){
    //     return index % 3 === 0;
    // }).css('background-color', '#219ebc');

    //highlighting
    let items = $('#list').find('li');
    highlight(items);

}

function addingReplacingRemoving(){
    $('ul ul:first').append($("<li>I'm going to be the last item.</li>"));
    $("<li>Now");

    // insert as first child
    $('ul ul:first').prepend("<li>I'm going to be the first child</li>");
    $("<li>Now I'm first!!</li>").prependTo("ul ul:first");

// reverse the syntax
    // after
    $('.red-box').after("<div class ='red-box'>First Red Box!</div>");

    // before
    $('.red-box').before("<div class ='red-box'>Another Red Box!</div>");

    // sample text
    let text1 = "Last night, Darth Vader came down from the planet Vulcan."

    // replace with new element
    $('li').replaceWith(`<li>${text1}</li>`);

    // replace all red to green
    $("<div class='green-box'> Created Green Box</div>").replaceAll(".red-box");

    // remove 
    // $('li').remove();

    // detaching - SAFER
    let detachedItems = $('li').detach();
    $('#content').append(detachedItems);

}
addingReplacingRemoving();
// filtering();
// traversingTheDOM();
// cssSelectors();
