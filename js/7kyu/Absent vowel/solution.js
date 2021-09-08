function absentVowel(x){
	return Array.from("aeiou").reduce((n,e,i) => x.indexOf(e) > -1 ? n : i, '')
}