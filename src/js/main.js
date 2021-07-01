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

$('div').click(function () {
	console.log($(this).index());
});

console.log($('section').find('.active'));
