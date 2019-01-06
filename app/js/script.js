let input  = $('input'),
		btn    = $('.btn'),
		iframe = $('iframe');

$('.btn').on('click',function(){
	$('iframe').attr('src', $('input').val());
});
