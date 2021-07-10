import $ from '../core';

$.prototype.getAttrValue = function (attrName) {
	if (!attrName) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].getAttribute) {
			return this;
		}
		if (this[i].getAttribute(attrName)) {
			return this[i].getAttribute(attrName);
		}
	}

	return this;
};

$.prototype.setAttribute = function (attrName, value) {
	for (let i = 0; i < this.length; i++) {
		if (!this[i].setAttribute) {
			return this;
		}
		if (attrName && value) {
			this[i].setAttribute(attrName, value);
		} else if (attrName) {
			this[i].setAttribute(attrName, '');
		}
	}
	return this;
};

$.prototype.removeAttribute = function (attrName) {
	if (!attrName) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].removeAttribute) {
			return this;
		}
		this[i].removeAttribute(attrName);
	}
	return this;
};

$.prototype.hasAttribute = function (attrName) {
	if (!attrName) {
		return this;
	}
	for (let i = 0; i < this.length; i++) {
		if (!this[i].hasAttribute) {
			return true;
		}
		if (this[i].hasAttribute(attrName)) {
			console.log(this[i], true);
		}
	}
	console.log('not now');
	return this;
};
