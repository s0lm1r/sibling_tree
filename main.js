"use strict";

let tree = document.getElementById('tree');
let lis = document.querySelectorAll('li');

lis.forEach(el => {
	let span = document.createElement('span');
	//console.log(el);
	el.insertBefore(span, el.firstChild);
	span.append(span.nextSibling);
	});

tree.onclick = function(event) {
	let target = event.target;
	if( target.tagName !== 'SPAN') return;

	target.parentNode.querySelectorAll('li').forEach(el => {
	if(!el) return;
	el.hidden = !el.hidden;
})};