/* global console */

define(['jquery'], function($){
	let input  = $('input'),
			btn    = $('.btn'),
			iframe = $('iframe');

	btn.on('click',function(){
		let link   = input.val();
		if (link.indexOf('watch?v=') > 0) {
			link = link.replace('watch?v=', '');
		}
		let result = "https://www.youtube.com/embed/" + link.slice(link.lastIndexOf('/') + 1);

		console.log(result);

		iframe.attr('src', result);
	});	
});

/*
** link
https://www.youtube.com/watch?v=PYjyg0LNTfE
** embed
https://www.youtube.com/embed/PYjyg0LNTfE
*/