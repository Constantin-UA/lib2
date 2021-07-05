import './lib/lib';
import $ from './lib/lib';

/* $('button').click(work);

function work() {
	$('#uniq').getAttrValue('data-text').setAttribute('data-text', 'new');
	$('#uniq')
		.getAttrValue()
		.setAttribute()
		.removeAttribute()
		.getAttrValue()
		.getAttrValue('data-text');
	//	console.log($('#uniq').getAttrValue('data-text'));
}

$('div').eq(1).log().setAttribute('data-text', 'new').log();
 */
/* 
$('button').on('click', () => {
	$('div').eq(3).toggleClass('active').log();
}); */

/* $('div').click(function () {
	console.log($(this).index());
}); */

//console.log($('section').find('.active'));
//console.log($('div').closest('.findme'));
//$('.findme').fadeOut(1800);

$('#first').click(() => {
	$('.block-center').eq(0).fadeIn(1000);
});
$('[data-count="second"]').click(() => {
	$('.block-center').eq(0).fadeOut(1000);
});
$('button')
	.eq(2)
	.click(() => {
		$('.block-center').fadeToggle(1000);
	});
