function generateHashtag (str) {
	if (str.split(' ').length < 1) return false;
	str = '#'+str.split(' ').reduce((n,e) => (e[0] != undefined ? (n += e[0].toUpperCase() + e.substring(1)) : n += '' , n), '');
	return (str.length > 140 || str.length < 2) ? false : str;
}