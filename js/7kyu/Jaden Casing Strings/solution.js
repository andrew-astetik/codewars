String.prototype.toJadenCase = function () {
	return this.split(' ').map(e => e[0].toUpperCase()+e.substr(1)).join(' ')
};