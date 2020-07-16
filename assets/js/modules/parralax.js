var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});

var image2 = document.getElementsByClassName('thumbnail2');
new simpleParallax(image2, {
	delay: .4,
	transition: 'cubic-bezier(0,0,0,1)'
});