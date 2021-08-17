function validParentheses(parens){
	return parens.split('').reduce((n,e) => (n += e == ')' ? -1 : 1, (n < 0 ? ' ' : n)), 0) === 0
}