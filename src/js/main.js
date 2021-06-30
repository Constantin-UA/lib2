import './lib/lib';
import $ from './lib/lib';

$('button').click(work);

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
