
/*****
// jQuery
$(document).ready(function() {
  // code
})
*****/
// Vanilla
document.addEventListener('DOMContentLoaded', Kexecute);

function Kexecute() {
  alert(8)
})

/*****
// jQuery
$('a').click(function() {
  // code…
})
*****/
// Vanilla
function KsetOnClickAll(tag, callback){
	[].forEach.call(document.querySelectorAll(tag), function(el) {
 		el.addEventListener('click', callback);
	})
}

/*******
// jQuery
var divs = $('div')
*******/
// Vanilla

function KgetAllTags(tag){
	var elements = document.querySelectorAll(tag);
	return elements;
}

/******
// jQuery
var newDiv = $('<div/>')
*******/
// Vanilla
function create(tag){
	return document.createElement(tag);
}

/*******
// jQuery
$('img').filter(':first').attr('alt', 'My image')
********/
// Vanilla
function setAttribute(tag, attr, value){
	document.querySelector(tag).setAttribute(attr, value);
}

/******
// jQuery
newDiv.addClass('foo')
*******/
// Vanilla
function addClass(tag, className){
	document.querySelector(tag).classList.add(className)
}


/******
// jQuery
newDiv.toggleClass('foo')
******/
// Vanilla
function toggleClass(tag, className){
	document.querySelector(tag).classList.toggle(className)
}

/******
// jQuery
$('body').append($('<p/>'))
*******/
// Vanilla
function appendChild(tag, childTag){
	var x = document.querySelector(tag);
	x.appendChild(document.createElement(childTag));
}


/******
// jQuery
var clonedElement = $('#about').clone()
******/
// Vanilla
var clonedElement = document.getElementById('about').cloneNode(true)

/*******
// jQuery
$('#wrap').empty()
*******/
// Vanilla
function empty(tag){
	var wrap = document.getElementById(tag)
	while(wrap.firstChild) wrap.removeChild(wrap.firstChild)
}