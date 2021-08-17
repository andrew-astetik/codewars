function rgb(r, g, b){
	return h(r)+h(g)+h(b)
}

function h(n){
	n = n > 255 ? 255 : n < 0 ? 0 : n;
	return "0".concat((n).toString(16)).slice(-2).toUpperCase();
}