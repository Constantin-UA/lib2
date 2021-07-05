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
	$('.block-center').eq(0).fadeOut(1000);
});
$('[data-count="second"]').click(() => {
	$('.block-center').eq(1).fadeOut(1000);
});
$('#show').click(() => {
	for (let i = 0; i < $('.block-center').lengthNum(); i++) {
		let item = $('.block-center').eq(i);

		if (typeof item.getAttrValue('style') == 'object') {
			console.log('no hidden element');
		} else {
			if (item.getAttrValue('style').indexOf('display: none')) {
				item.fadeIn(1000);
			}
		}
	}
});
