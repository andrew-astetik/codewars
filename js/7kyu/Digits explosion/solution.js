function explode(s) {
	return Array.from(s).reduce((n,e) => n += e.repeat(e), '');
}