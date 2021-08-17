function narcissistic(val) {
	return `${val}`.split('').reduce((n,e) => +n + +Math.pow(e,`${val}`.length), 0) == val