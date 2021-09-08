function nicknameGenerator(n){
	return n.length < 4 ? 'Error: Name too short' : (n[2].match(/[aeiou]/) ? n.substr(0,4) : n.substr(0,3));
}